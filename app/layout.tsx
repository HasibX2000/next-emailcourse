import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Email Design With HTML & CSS | Learn Professional Email Templates",
  description:
    "Master the art of professional HTML email design with our comprehensive course. Learn best practices and create responsive email templates.",
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
    <html lang="en" className={montserrat.variable}>
      <head>
        {/* Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Email Design With HTML & CSS | Akon M Hasib" />
        <meta
          property="og:description"
          content="Learn how to create stunning HTML email templates with our expert-led course. Build responsive, professional email designs with ease."
        />
        <meta property="og:image" content="/images/HTML-Email-Template-Design.webp" />
        <meta property="og:url" content="https://htmlemailcourse.online" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Design With HTML & CSS" />
        <meta
          name="twitter:description"
          content="Master professional HTML email template design with our comprehensive course."
        />
        <meta name="twitter:image" content="/images/HTML-Email-Template-Design.webp" />

        {/* Google Analytics */}
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

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="O6V8a2tf9TRaovu15ZZlO_iexgGMItMZcV9scrHC-rI"
        />

        {/* Structured Data (JSON-LD) */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Email Design With HTML & CSS",
            description:
              "Master professional HTML email template design with this comprehensive course.",
            provider: {
              "@type": "Organization",
              name: "Akons Zone",
              url: "https://htmlemailcourse.online",
            },
          })}
        </Script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
