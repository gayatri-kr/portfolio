import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.name} | Full-Stack + AI + Data Systems Engineer`,
  description: profile.pitch,
  keywords: [
    profile.name,
    "Full-Stack",
    "AI",
    "Data Systems",
    "Software Engineer",
    "MERN",
    "Python",
    "Sacramento",
  ],
  authors: [{ name: profile.name, url: profile.links.github }],
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description: profile.pitch,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} dark`} suppressHydrationWarning>
      <body className="antialiased bg-[var(--bg)] text-[var(--text)]">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
