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
  title: "Diska & Dika",
  description: "Undangan Nikah",
  openGraph: {
    title: "Diska & Dika",
    description: "Our Wedding Invitation💍",
    url: "https://diskadika.vercel.app", // ganti dengan domain kamu
    siteName: "Diska & Dika",
    images: [
      {
        url: "https://diskadika.vercel.app/images/page1/bg1.jpg", // Gambar harus full URL dan bisa diakses publik
        width: 1200,
        height: 630,
        alt: "Undangan Nikah Diska & Dika",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
