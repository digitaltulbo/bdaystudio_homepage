import { NextResponse } from 'next/server';
import { db, storage } from '@/lib/firebase';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const folder = formData.get('folder') || 'uploads'; // 고객별 폴더명 (예: 20260204-kim)

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

    // 다운로드 URL 생성 (signed URL - 유효기간 설정 가능, 일단 1년으로 넉넉하게)
    // 혹은 public URL로 만들 수도 있음 (makePublic)
    // 여기서는 간단하게 signedUrl 사용
    const [url] = await fileRef.getSignedUrl({
      action: 'read',
      expires: '03-01-2027', // 1년 뒤 만료
    });

    return NextResponse.json({ url, fileName });

  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
