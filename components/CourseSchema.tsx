export default function CourseSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "এইচটিএমএল এবং সিএসএস দিয়ে ইমেইল ডিজাইন",
          description:
            "পেশাদার ইমেইল টেমপ্লেট ডিজাইন এবং ডেভেলপমেন্টের জন্য সম্পূর্ণ এইচটিএমএল এবং সিএসএস কোর্স।",
          provider: {
            "@type": "Organization",
            name: "আকনস জোন",
            sameAs: "https://htmlemailcourse.online",
          },
          courseCode: "EMAIL-HTML-CSS",
          educationalLevel: "বিগিনার থেকে অ্যাডভান্সড",
          skills: [
            "এইচটিএমএল ইমেইল কোডিং",
            "ইমেইলের জন্য সিএসএস",
            "রেসপনসিভ ইমেইল ডিজাইন",
            "ইমেইল ক্লায়েন্ট কম্প্যাটিবিলিটি",
            "ইমেইল টেস্টিং",
            "টেমপ্লেট ডেভেলপমেন্ট",
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
