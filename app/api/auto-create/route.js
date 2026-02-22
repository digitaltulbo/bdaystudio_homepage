import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';

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
        const body = await request.json();
        const { customerName, shootDate, originalUrl, retouchedUrl, videoUrl, calendarUrl, formUrl, type } = body;

        // Validation
        if (!customerName || !shootDate) {
            return NextResponse.json({
                error: 'Missing required fields: customerName and shootDate are required'
            }, { status: 400 });
        }

        // Validate type parameter
        const pageType = type === 'retouched' ? 'retouched' : 'original';

        // Generate ID: YYYYMMDD-random5chars (same logic as admin page)
        const id = `${shootDate.replace(/-/g, '')}-${Math.random().toString(36).substr(2, 5)}`;

        // Calculate expiry date: current date + 15 days
        const expiryDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        // Prepare customer data
        const customerData = {
            id,
            customerName,
            shootDate,
            expiryDate,
            type: pageType,
            videoUrl: videoUrl || '',
            calendarUrl: calendarUrl || '',
            formUrl: formUrl || '',
            originalUrl: originalUrl || '',
            retouchedUrl: retouchedUrl || '',
            createdAt: new Date().toISOString(),
            createdBy: 'auto-api'
        };

        // Save to Firestore
        await db.collection('customers').doc(id).set(customerData);

        // Return success with download URL
        const downloadUrl = `https://bdaystudio.store/download/${id}`;

        return NextResponse.json({
            success: true,
            downloadUrl,
            id,
            expiryDate
        });

    } catch (error) {
        console.error('Auto-create Error:', error);
        return NextResponse.json({
            error: 'Failed to create customer page',
            details: error.message
        }, { status: 500 });
    }
}
