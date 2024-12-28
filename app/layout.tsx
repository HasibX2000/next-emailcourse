import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Email Design With HTML & CSS",
  description: "Professional HTML Email Template Design Course",
  icons: {
    icon: [
      { url: "/images/favicon.png" },
      { url: "/images/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/images/favicon.png" }],
  },
  verification: {
    google: "O6V8a2tf9TRaovu15ZZlO_iexgGMItMZcV9scrHC-rI",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-O6V8a2tf9TRaovu15ZZlO_iexgGMItMZcV9scrHC-rI"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-O6V8a2tf9TRaovu15ZZlO_iexgGMItMZcV9scrHC-rI');
          `}
        </Script>
        <meta
          name="google-site-verification"
          content="O6V8a2tf9TRaovu15ZZlO_iexgGMItMZcV9scrHC-rI"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
