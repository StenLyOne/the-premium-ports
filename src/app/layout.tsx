import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Proxy | Fast & Geo-targeted Proxies",
  description:
    "Premium Proxy offers fast, reliable and geo-targeted residential and mobile proxies. Ideal for business, scraping, and automation.",
  keywords: [
    "premium proxy",
    "residential proxy",
    "mobile proxy",
    "proxy service",
    "proxy for scraping",
  ],
  metadataBase: new URL("https://the-premium-ports.vercel.app"),
  openGraph: {
    title: "Premium Proxy",
    description:
      "Premium Proxy offers fast, reliable and geo-targeted residential and mobile proxies.",
    url: "https://the-premium-ports.vercel.app",
    siteName: "Premium Proxy",
    images: [
      {
        url: "/img/og-preview.png", 
        width: 1200,
        height: 630,
        alt: "Premium Proxy Preview Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Proxy",
    description:
      "Fast, geo-targeted residential and mobile proxies for business and scraping.",
    images: ["/img/og-preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="canonical" href="https://yourdomain.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:locale" content="en_US" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
