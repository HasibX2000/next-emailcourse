export default function CourseSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "HTML and CSS Email Design",
          description:
            "Complete HTML and CSS course for professional email template design and development.",
          provider: {
            "@type": "Organization",
            name: "Acons Zone",
            sameAs: "https://htmlemailcourse.online",
          },
          courseCode: "EMAIL-HTML-CSS",
          educationalLevel: "Beginner to Advanced",
          skills: [
            "HTML Email Coding",
            "CSS for Emails",
            "Responsive Email Design",
            "Email Client Compatibility",
            "Email Testing",
            "Template Development",
          ],
          teaches: [
            "HTML Tables for Emails",
            "Inline CSS Styling",
            "Media Queries",
            "Email Typography",
            "Image Handling",
            "Cross-client Testing",
          ],
        }),
      }}
    />
  );
}
