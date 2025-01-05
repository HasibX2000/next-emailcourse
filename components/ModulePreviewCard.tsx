import Link from "next/link";
import { PlayCircle, Clock, Users } from "lucide-react";

interface ModulePreviewProps {
  module: {
    id: string;
    slug: string;
    title: string;
    description: string;
    duration: string;
    totalStudents: number;
    videoCount: number;
  };
}

export default function ModulePreviewCard({ module }: ModulePreviewProps) {
  return (
    <article className="border rounded-lg p-6 hover:border-primary transition-colors">
      <Link href={`/modules/${module.slug}`}>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{module.title}</h3>
          <p className="text-gray-600 line-clamp-2">{module.description}</p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{module.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <PlayCircle className="w-4 h-4" />
              <span>{module.videoCount} videos</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{module.totalStudents} students</span>
            </div>
          </div>
        </div>
      </Link>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: module.title,
          description: module.description,
          timeRequired: module.duration,
          learningResourceType: "Module",
          interactionStatistic: {
            "@type": "InteractionCounter",
            interactionType: "http://schema.org/WatchAction",
            userInteractionCount: module.totalStudents,
          },
        })}
      </script>
    </article>
  );
}
