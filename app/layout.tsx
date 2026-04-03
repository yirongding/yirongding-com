import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Yirong Ding — AI Systems for Operators",
  description:
    "I help real estate teams and growing businesses build better systems for lead capture, workflow organization, and manual admin.",
  openGraph: {
    title: "Yirong Ding — AI Systems for Operators",
    description:
      "I help real estate teams and growing businesses build better systems for lead capture, workflow organization, and manual admin.",
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
    </html>
  );
}
