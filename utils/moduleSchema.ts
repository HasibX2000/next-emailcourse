export function generateModuleSchema(moduleData: any) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: moduleData.title,
    description: moduleData.description,
    learningResourceType: "Module",
    timeRequired: moduleData.duration,
    teaches: moduleData.keywords,
    isPartOf: {
      "@type": "Course",
      name: "Email Design With HTML & CSS",
      url: "https://htmlemailcourse.online",
    },
    provider: {
      "@type": "Person",
      name: "Akon M Hasib",
      url: "https://htmlemailcourse.online/instructor",
    },
  };
}
