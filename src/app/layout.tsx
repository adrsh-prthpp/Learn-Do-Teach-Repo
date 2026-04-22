import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Learn Build Teach",
    template: "%s | Learn Build Teach"
  },
  description: "A personal portfolio and proof-of-learning platform built around teaching videos, blog posts, and projects.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto min-h-[80vh] max-w-6xl space-y-10 px-4 py-8 sm:py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

