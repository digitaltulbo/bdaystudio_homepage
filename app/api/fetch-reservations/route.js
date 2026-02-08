import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { requireAuth } from '@/lib/auth';

export async function GET() {
    // Authentication check
    const authError = await requireAuth();
    if (authError) {
        return NextResponse.json({ error: authError.error }, { status: authError.status });
    }

    const spreadsheetId = '1mEUjQ-toVNF1POvwZbVsGV0HEnEsHalyTICkLj04BSA';
    const range = '시트1!A2:E100';

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                project_id: process.env.FIREBASE_PROJECT_ID,
                client_email: process.env.FIREBASE_CLIENT_EMAIL,
                private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            return NextResponse.json({ 
                reservations: [],
                debug_email: process.env.FIREBASE_CLIENT_EMAIL || "Email env not found",
                debug_project: process.env.FIREBASE_PROJECT_ID 
            });
        }

        const reservations = rows.map((row) => ({
            id: row[0] || '',
            customerName: row[1] || '',
            phone: row[2] || '',
            shootDate: row[3] || '',
            productName: row[4] || '',
        })).filter(res => res.customerName);

        return NextResponse.json({ reservations });

    } catch (error) {
        console.error('Google Sheets API Error:', error);
        return NextResponse.json({
            error: 'Failed to fetch reservations',
            details: error.message
        }, { status: 500 });
    }
}
