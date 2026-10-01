import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090d16",
};

export const metadata: Metadata = {
  title: "Shivam Kumar | Full Stack Developer • React, Next.js, NestJS & AI",
  description:
    "Portfolio and Resume of Shivam Kumar, Full Stack Developer with 4+ years of experience building scalable web applications, enterprise dashboards, logistics systems, and AI/LLM integrated tools.",
  keywords: [
    "Shivam Kumar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "NestJS",
    "AI Application Development",
    "Software Engineer",
    "Resume",
    "Portfolio",
  ],
  authors: [{ name: "Shivam Kumar" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
