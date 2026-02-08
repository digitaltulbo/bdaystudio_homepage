import { NextResponse } from 'next/server';
import { db, storage } from '@/lib/firebase';
import { requireAuth } from '@/lib/auth';

export async function POST(request) {
  // Authentication check
  const authError = await requireAuth();
  if (authError) {
    return NextResponse.json({ error: authError.error }, { status: authError.status });
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

    const [url] = await fileRef.getSignedUrl({
      action: 'read',
      expires: '03-01-2027',
    });

    return NextResponse.json({ url, fileName });

  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
