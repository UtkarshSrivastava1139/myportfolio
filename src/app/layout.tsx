import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://utkarshsrivastava.me'),
  title: "Utkarsh Srivastava | Full Stack Developer & UI/UX Designer",
  description: "Turning ideas into interactive web experiences. Full Stack Developer specializing in React, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Node.js", "Web Developer", "JavaScript", "TypeScript"],
  authors: [{ name: "Utkarsh Srivastava" }],
  creator: "Utkarsh Srivastava",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/favicon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Utkarsh Srivastava | Full Stack Developer",
    description: "Turning ideas into interactive web experiences",
    url: "https://utkarshsrivastava.me",
    siteName: "Utkarsh Srivastava Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Utkarsh Srivastava - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Srivastava | Full Stack Developer",
    description: "Turning ideas into interactive web experiences",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100 antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <main className="relative">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
