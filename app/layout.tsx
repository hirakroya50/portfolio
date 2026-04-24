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
  title: "Hirak Roy — Full Stack Engineer",
  description:
    "Full Stack Engineer building scalable SaaS & Web3 applications. Specializing in React, Next.js, TypeScript, Node.js, and distributed microservices.",
  keywords: ["Full Stack Engineer", "React", "Next.js", "TypeScript", "Web3", "SaaS"],
  authors: [{ name: "Hirak Roy" }],
  openGraph: {
    title: "Hirak Roy — Full Stack Engineer",
    description: "Building scalable SaaS & Web3 applications",
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
      <body className="min-h-full flex flex-col bg-[#050508] text-[#e8eaf0]">{children}</body>
    </html>
  );
}
