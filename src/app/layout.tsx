import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Utkarsh Srivastava | Portfolio",
  description: "Personal portfolio website of Utkarsh Srivastava - Developer, Designer, and Creator",
  keywords: ["portfolio", "developer", "web development", "Utkarsh Srivastava"],
  authors: [{ name: "Utkarsh Srivastava" }],
  openGraph: {
    title: "Utkarsh Srivastava | Portfolio",
    description: "Personal portfolio website of Utkarsh Srivastava",
    url: "https://utkarshsrivastava-portfolio.vercel.app",
    siteName: "Utkarsh Srivastava Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Utkarsh Srivastava Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
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
      </body>
    </html>
  );
}
