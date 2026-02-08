import { NextResponse } from 'next/server';
import { storage } from '@/lib/firebase';

// Bearer token validation helper
function validateApiKey(request) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return false;
    }

    const token = authHeader.substring(7);
    const apiKey = process.env.AUTO_CREATE_API_KEY;

    if (!apiKey) {
        console.error('AUTO_CREATE_API_KEY environment variable is not set');
        return false;
    }

    return token === apiKey;
}

export async function POST(request) {
    // Authentication check
    if (!validateApiKey(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const formData = await request.formData();
        const file = formData.get('file');
        const folder = formData.get('folder') || 'uploads';

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const fileName = file.name;
        const bucket = storage.bucket();
        const fileRef = bucket.file(`${folder}/${fileName}`);

        await fileRef.save(buffer, {
            metadata: {
                contentType: file.type,
            },
        });

        // Generate signed URL (1 year expiry)
        const [url] = await fileRef.getSignedUrl({
            action: 'read',
            expires: '03-01-2027',
        });

        return NextResponse.json({ url, fileName });

    } catch (error) {
        console.error('Auto-upload Error:', error);
        return NextResponse.json({
            error: 'Upload failed',
            details: error.message
        }, { status: 500 });
    }
}
