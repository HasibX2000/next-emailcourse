import Head from "next/head";
import { seoConfig } from "@/utils/seoConfig";
import CourseSchema from "./CourseSchema";

interface SEOProps {
  page: string;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string[];
}
export default function SEO({ page, customTitle, customDescription, customKeywords }: SEOProps) {
  const config = seoConfig[page as keyof typeof seoConfig];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://htmlemailcourse.online";
  const courseName = "Email Design With HTML & CSS By Akon M Hasib";

  return (
    <Head>
      <title>{customTitle || config.title}</title>
      <meta name="description" content={customDescription || config.description} />
      <meta name="keywords" content={(customKeywords || config.keywords).join(", ")} />

      {/* Course-specific meta tags */}
      <meta name="subject" content={courseName} />
      <meta name="course-type" content="Technical Training" />
      <meta name="audience" content="Designers, Developers, Email Marketers" />

      {/* Open Graph */}
      <meta property="og:title" content={customTitle || config.title} />
      <meta property="og:description" content={customDescription || config.description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={courseName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={customTitle || config.title} />
      <meta name="twitter:description" content={customDescription || config.description} />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Course Schema */}
      <CourseSchema />
    </Head>
  );
}
