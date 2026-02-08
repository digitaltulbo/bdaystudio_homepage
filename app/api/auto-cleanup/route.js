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

export async function GET(request) {
    // Authentication check
    if (!validateApiKey(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

        // Find all expired documents
        const snapshot = await db.collection('customers')
            .where('expiryDate', '<', today)
            .get();

        if (snapshot.empty) {
            return NextResponse.json({
                success: true,
                message: 'No expired documents found',
                deletedCount: 0
            });
        }

        const deletedItems = [];
        const errors = [];

        for (const doc of snapshot.docs) {
            const data = doc.data();
            const id = doc.id;
            const folderName = `${id}_${data.customerName}`;

            try {
                // 1. Delete Storage files
                try {
                    const bucket = storage.bucket();
                    const [files] = await bucket.getFiles({ prefix: `${folderName}/` });

                    if (files.length > 0) {
                        await Promise.all(files.map(file => file.delete()));
                    }
                } catch (storageError) {
                    console.warn(`Storage delete warning for ${id}:`, storageError.message);
                    // Continue even if storage delete fails
                }

                // 2. Delete Firestore document
                await db.collection('customers').doc(id).delete();

                deletedItems.push({
                    id,
                    customerName: data.customerName,
                    expiryDate: data.expiryDate
                });
            } catch (deleteError) {
                errors.push({
                    id,
                    error: deleteError.message
                });
            }
        }

        return NextResponse.json({
            success: true,
            message: `Cleanup completed`,
            deletedCount: deletedItems.length,
            deletedItems,
            errors: errors.length > 0 ? errors : undefined,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Auto-cleanup Error:', error);
        return NextResponse.json({
            error: 'Failed to run cleanup',
            details: error.message
        }, { status: 500 });
    }
}
