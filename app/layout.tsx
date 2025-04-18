import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    template: "%s - Wirayuda",
    default: "- Wirayuda",
  },
  description:
    "Welcome to my portfolio website, where creativity meets innovative web development. Discover case studies, and design solutions that transform ideas into engaging digital experiences. Explore my work and let's create something extraordinary together.",

  keywords: [
    "React developer",
    "JavaScript",
    "front-end development",
    "web development",
    "Tech community",
    "portfolio",
    "Next.js developer",
    "Indonesia",
    "SEO",
    "UI/UX design",
    "custom software solutions",
    "progressive web apps",
    "agile software development",
    "responsive web design",
    "mobile-friendly web development",
    "React.js consulting",
    "frontend optimization",
    "JavaScript developer",
  ],
  openGraph: {
    title: "Personal portfolio website",
    description:
      "Looking for a skilled React developer? Wirayuda offers expert web development services tailored to your needs.",
    siteName: "wirayuda",
    url: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  },
  robots: {
    follow: true,
    index: true,
    notranslate: true,
  },
  authors: [{ name: "Wirayuda", url: process.env.NEXT_PUBLIC_SITE_URL }],
  publisher: "Wirayuda",
  creator: "Wirayuda",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  category: "Web Development",
  alternates: {
    canonical: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  preload: true,
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-black-300 ", poppins.className)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
