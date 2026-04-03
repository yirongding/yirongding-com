import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yirong Ding — AI Systems for Operators",
  description:
    "I build AI workflows that handle the follow-up, the busywork, and the handoffs — so you can focus on what actually grows your business.",
  openGraph: {
    title: "Yirong Ding — AI Systems for Operators",
    description:
      "I build AI workflows that handle the follow-up, the busywork, and the handoffs — so you can focus on what actually grows your business.",
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
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
