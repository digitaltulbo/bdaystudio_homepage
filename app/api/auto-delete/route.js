import { NextResponse } from 'next/server';
import { db, storage } from '@/lib/firebase';

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

export async function DELETE(request) {
    // Authentication check
    if (!validateApiKey(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { id } = body;

        if (!id) {
            return NextResponse.json({ error: 'Missing required field: id' }, { status: 400 });
        }

        // 1. Get customer data to find folder name
        const docRef = db.collection('customers').doc(id);
        const doc = await docRef.get();

        let storageDeleted = false;

        if (doc.exists) {
            const data = doc.data();
            const folderName = `${id}_${data.customerName}`;

            // 2. Try to delete Storage files (folder)
            try {
                const bucket = storage.bucket();
                const [files] = await bucket.getFiles({ prefix: `${folderName}/` });

                if (files.length > 0) {
                    await Promise.all(files.map(file => file.delete()));
                    storageDeleted = true;
                }
            } catch (storageError) {
                console.warn('Storage delete warning:', storageError.message);
                // Continue even if storage delete fails
            }
        }

        // 3. Delete Firestore document
        await docRef.delete();

        return NextResponse.json({
            success: true,
            message: `Deleted customer ${id}`,
            storageDeleted
        });

    } catch (error) {
        console.error('Auto-delete Error:', error);
        return NextResponse.json({
            error: 'Failed to delete customer data',
            details: error.message
        }, { status: 500 });
    }
}
