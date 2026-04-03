import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
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
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
