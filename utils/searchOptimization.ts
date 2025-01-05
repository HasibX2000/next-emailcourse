interface SearchMetadata {
  title: string;
  description: string;
  keywords: string[];
  section: string;
  datePublished: string;
  dateModified: string;
}

export function generateSearchMetadata(data: SearchMetadata) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.title,
    description: data.description,
    keywords: data.keywords.join(", "),
    inLanguage: "en",
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    about: {
      "@type": "Course",
      name: "Email Design With HTML & CSS",
      courseSection: data.section,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "HTML Email Course",
      url: "https://htmlemailcourse.online",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://htmlemailcourse.online${item.url}`,
    })),
  };
}
