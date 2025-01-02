import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@bengaluru/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blr Purity Test",
  description: "The official purity test checklist for the techies of Bengaluru. Find out how deep you're into the Bengaluru tech scene!",
  keywords: [
    "Bengaluru Tech",
    "Tech Culture",
    "Startup Culture",
    "Bengaluru Startups",
    "Tech Scene",
    "Silicon Valley of India",
    "Bengaluru Tech Community"
  ],
  authors: [{ name: "Srihari" }, { name: "Priya" }],
  creator: "Bengaluru Tech Community",
  publisher: "BLR Purity Test",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://blrpurity.com",
    title: "Blr Purity Test - By AdiKris",
    description: "How much of a deep deep Bangalorean are you? Take the test to find out!",
    siteName: "Blr Purity Test - By AdiKris"
  },
  twitter: {
    card: "summary_large_image",
    title: "Blr Purity Test",
    description: "Rate your Bengaluru tech scene experience with the official purity test",
    creator: "@adii_kris"
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png"
  }
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
        <Toaster />
      </body>
    </html>
  );
}
