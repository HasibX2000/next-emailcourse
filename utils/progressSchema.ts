interface CourseProgress {
  totalModules: number;
  completedModules: number;
  currentModule: string;
  lastUpdated: string;
}

export function generateProgressSchema(progress: CourseProgress) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningProgressMeasurement",
    learningProgress: {
      "@type": "QuantitativeValue",
      value: (progress.completedModules / progress.totalModules) * 100,
      unitText: "percent",
    },
    educationalLevel: "Beginner to Advanced",
    teaches: "Email Template Design",
    assesses: progress.currentModule,
    dateModified: progress.lastUpdated,
    isPartOf: {
      "@type": "Course",
      name: "Email Design With HTML & CSS",
      url: "https://htmlemailcourse.online",
    },
  };
}
