import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://bdaystudio.store"),
  title: "스튜디오생일 | 분당 야탑 셀프사진관 · 라온제나 도보 7분",
  description: "작가 없이 우리끼리, 우리답게. 반려견 동반 가능, 라온제나 분당 도보 7분 거리의 프라이빗 셀프 스튜디오. 가족사진, 만삭촬영, 하객룩, 커플사진까지. AI보정으로 당일 전송!",
  keywords: "분당셀프사진관, 야탑사진관, 성남셀프스튜디오, 반려견촬영, 가족사진, 하객룩, 만삭사진, 라온제나사진관, AI보정사진관, 스튜디오생일, 셀프사진관, 분당사진관",
  authors: [{ name: "스튜디오생일" }],
  creator: "스튜디오생일",
  publisher: "스튜디오생일",
  formatDetection: {
    telephone: true,
  },
  verification: {
    other: {
      "naver-site-verification": "b624bb15500a06053ef45e583c864cd0ccdceabb",
    },
  },
  openGraph: {
    title: "스튜디오생일 | 분당 야탑 셀프사진관",
    description: "작가 없이 우리끼리, 우리답게. 반려견 동반 가능한 프라이빗 셀프 스튜디오. 라온제나 분당 도보 7분!",
    url: "https://bdaystudio.store",
    siteName: "스튜디오생일",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "스튜디오생일 | 분당 야탑 셀프사진관",
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
        <meta name="naver-site-verification" content="b624bb15500a06053ef45e583c864cd0ccdceabb" />
      </head>
      <body>
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PhotographyBusiness",
              name: "스튜디오생일 (Studio B-day)",
              description:
                "작가 없이 우리끼리, 우리답게. 반려견 동반 가능한 프라이빗 셀프 스튜디오. 가족사진, 만삭촬영, 하객룩, 커플사진까지.",
              url: "https://bdaystudio.store",
              telephone: "0507-1433-5283",
              address: {
                "@type": "PostalAddress",
                streetAddress: "장미로101 근린상가 2층",
                addressLocality: "분당구 야탑동",
                addressRegion: "성남시",
                addressCountry: "KR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.4114,
                longitude: 127.1277,
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "10:00",
                  closes: "21:00",
                },
              ],
              image: "https://bdaystudio.store/opengraph-image",
              sameAs: ["https://www.instagram.com/bday_yatap"],
            }),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
