import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";

export const metadata = {
  title: "Studio B-day | 프라이빗 셀프사진관",
  description: "작가 없이 우리끼리, 우리답게. 반려견 동반 가능, 결혼식장 도보 3분 거리의 프라이빗 셀프 스튜디오. 커플, 가족, 우정샷, 하객룩, 만삭 촬영까지.",
  keywords: "셀프사진관, 셀프스튜디오, 반려견촬영, 커플사진, 가족사진, 하객룩, 프로필사진, 서울사진관",
  authors: [{ name: "Studio B-day" }],
  creator: "Studio B-day",
  publisher: "Studio B-day",
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    title: "Studio B-day | 프라이빗 셀프사진관",
    description: "작가 없이 우리끼리, 우리답게. 반려견 동반 가능한 프라이빗 셀프 스튜디오.",
    url: "https://studiobday.com",
    siteName: "Studio B-day",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio B-day | 프라이빗 셀프사진관",
    description: "작가 없이 우리끼리, 우리답게. 반려견 동반 가능한 프라이빗 셀프 스튜디오.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bdaystudio.store",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#E8B4B8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
