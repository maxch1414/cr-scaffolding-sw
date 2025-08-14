import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CR Scaffolding SW",
  description: "CR Scaffolding Services | Professional Scaffolding Solutions",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "CR Scaffolding SW",
    description: "CR Scaffolding Services | Professional Scaffolding Solutions",
    type: "website",
    url: "https://cr-scaffolding-sw.vercel.app",
    siteName: "CR Scaffolding SW",
    images: [
      {
        url: "/images/Scaffold-14.JPG",
        width: 1200,
        height: 630,
        alt: "CR Scaffolding Services - Professional Scaffolding Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CR Scaffolding SW",
    description: "CR Scaffolding Services | Professional Scaffolding Solutions",
    images: ["/images/Scaffold-14.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
