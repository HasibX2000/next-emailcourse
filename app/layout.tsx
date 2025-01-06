import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
<<<<<<< HEAD
  weight: ["400", "500", "600", "700"],
  display: "swap",
=======
>>>>>>> new-branch
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://htmlemailcourse.online"),
  title: {
    default: "Professional Email Design Course | HTML & CSS Email Templates",
    template: "%s | Email Design With HTML & CSS",
  },
  description:
    "Master professional HTML email template design with our comprehensive course. Learn responsive design, cross-client compatibility, and industry best practices. Start creating beautiful email templates today.",
  keywords: [
    "HTML email templates",
    "email design course",
    "responsive email design",
    "CSS for email",
    "email development training",
    "professional email templates",
    "email marketing design",
    "cross-client email coding",
    "email template development",
    "HTML CSS email course",
  ],
  authors: [
    {
      name: "Akon M Hasib",
      url: "https://htmlemailcourse.online/",
    },
  ],
  creator: "Akon M Hasib",
  openGraph: {
    title: "Email Design With HTML & CSS",
    description:
      "Master the art of creating professional HTML email templates that work across all email clients",
    type: "website",
    url: "https://htmlemailcourse.online",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Email Design Course",
      },
    ],
    locale: "en_US",
    siteName: "HTML Email Course",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Design With HTML & CSS",
    description:
      "Master the art of creating professional HTML email templates that work across all email clients",
    images: ["/images/og-image.jpg"],
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://htmlemailcourse.online",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
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
