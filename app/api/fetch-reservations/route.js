import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
    const spreadsheetId = '1mEUjQ-toVNF1POvwZbVsGV0HEnEsHalyTICkLj04BSA';
    const range = '시트1!A2:E100'; // Assuming first row is header, fetch up to 100 rows

    try {
        // Auth using existing individual environment variables
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

        // Map rows to objects based on user's format:
        // A: 예약번호 (id), B: 예약자명 (name), C: 연락처 (phone), D: 촬영일시 (date), E: 상품명 (product)
        const reservations = rows.map((row) => ({
            id: row[0] || '',
            customerName: row[1] || '',
            phone: row[2] || '',
            shootDate: row[3] || '',
            productName: row[4] || '',
        })).filter(res => res.customerName); // Filter out empty rows

        return NextResponse.json({ reservations });

    } catch (error) {
        console.error('Google Sheets API Error:', error);
        return NextResponse.json({
            error: 'Failed to fetch reservations',
            details: error.message
        }, { status: 500 });
    }
}
