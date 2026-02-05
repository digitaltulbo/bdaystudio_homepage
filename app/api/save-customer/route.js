import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';

export async function POST(request) {
  try {
    const data = await request.json();
    const { id } = data;

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    // Firestore 'customers' 컬렉션에 문서 저장 (문서 ID를 URL ID와 동일하게)
    await db.collection('customers').doc(id).set(data);

    return NextResponse.json({ success: true, id });

  } catch (error) {
    console.error('Save Error:', error);
    return NextResponse.json({ error: 'Save failed' }, { status: 500 });
  }
}
