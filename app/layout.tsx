import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ویزیت خودرو - تعمیرات و خدمات خودرو در مشهد",
  description: "ویزیت خودرو ارائه دهنده خدمات حرفه‌ای تعمیرات خودرو، تعویض روغن، سرویس دوره‌ای، تعمیر موتور و گیربکس در مشهد. با بهترین تجهیزات و متخصصین مجرب.",
  keywords: "تعمیرات خودرو مشهد, سرویس خودرو, تعویض روغن, تعمیرگاه مشهد, خدمات خودرو",
  authors: [{ name: "ویزیت خودرو" }],
  openGraph: {
    title: "ویزیت خودرو - تعمیرات و خدمات خودرو در مشهد",
    description: "ارائه دهنده خدمات حرفه‌ای تعمیرات خودرو در مشهد",
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ویزیت خودرو - تعمیرات و خدمات خودرو در مشهد",
    description: "ارائه دهنده خدمات حرفه‌ای تعمیرات خودرو در مشهد",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-vazir antialiased">
        {children}
      </body>
    </html>
  );
}
