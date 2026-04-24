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
  title: "Hirak Roy — AI-Focused Full Stack Developer",
  description:
    "AI-focused full stack developer building AI SaaS products, OpenAI-powered features, and scalable web platforms with Next.js, TypeScript, and Node.js.",
  keywords: [
    "AI Full Stack Developer",
    "OpenAI Integration",
    "AI SaaS Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Hirak Roy" }],
  openGraph: {
    title: "Hirak Roy — AI-Focused Full Stack Developer",
    description: "Building AI SaaS products with production OpenAI integrations",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-[#e8eaf0]">
        {children}
      </body>
    </html>
  );
}
