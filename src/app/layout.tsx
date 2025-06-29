import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientCookieBanner from "@/components/ClientCookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wag On The Wild Side",
  description: "Wag On The Wild Side dog walking business website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Dog Walkers Dundee | Wag On The Wild Side</title>
        <meta name="description" content="Professional, fully insured dog walking in Dundee. Solo and group walks, patient care for all dogs. Contact Shauni today!" />
        <meta name="keywords" content="dog walkers Dundee, dog walking Dundee, professional dog walker Dundee, Dundee dog walker, dog walker near me" />
        <meta name="author" content="Shauni" />
        <meta property="og:title" content="Dog Walkers Dundee | Wag On The Wild Side" />
        <meta property="og:description" content="Professional, fully insured dog walking in Dundee. Solo and group walks, patient care for all dogs. Contact Shauni today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wagonthewildside.com/" />
        <meta property="og:image" content="https://wagonthewildside.com/dogs/hero-dog.jpg" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wag On The Wild Side",
            "image": "https://wagonthewildside.com/dogs/hero-dog.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dundee",
              "addressCountry": "UK"
            },
            "telephone": "+44 7885 511067",
            "email": "shauni@wagonthewildside.com",
            "url": "https://wagonthewildside.com",
            "description": "Professional, fully insured dog walker in Dundee. Solo and group walks, patient care for all dogs."
          }
        `}</script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <footer className="w-full text-center text-[10px] text-white/40 py-2 select-none pointer-events-none">
          © CorkscrewSoftware 2025
        </footer>
        <ClientCookieBanner />
      </body>
    </html>
  );
}
