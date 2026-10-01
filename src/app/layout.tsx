import type { Metadata, Viewport } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
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
      className={`${inter.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
