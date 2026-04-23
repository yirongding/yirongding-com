import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AI-Powered Business Systems | Yirong Ding",
  description:
    "I help you get the right foundations in place, clean up your workflows, and use AI in ways that actually save time — so your business runs more smoothly and you can focus on your clients.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AI-Powered Business Systems | Yirong Ding",
    description:
      "I help you get the right foundations in place, clean up your workflows, and use AI in ways that actually save time — so your business runs more smoothly and you can focus on your clients.",
    url: "https://yirongding.com",
    siteName: "Yirong Ding",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CXFDTCGNVW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CXFDTCGNVW');
        `}
      </Script>
    </html>
  );
}
