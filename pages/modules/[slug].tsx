import { useRouter } from "next/router";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

interface ModuleData {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  lessons: {
    id: string;
    title: string;
    duration: string;
  }[];
}

export default function ModulePage({ moduleData }: { moduleData: ModuleData }) {
  const router = useRouter();
  const { slug } = router.query;

  const breadcrumbItems = [
    { label: "Modules", href: "/modules" },
    { label: moduleData.title, href: `/modules/${slug}` },
  ];

  return (
    <>
      <SEO
        page="modules"
        customTitle={`${moduleData.title} | Email Design Course Module`}
        customDescription={moduleData.description}
        customKeywords={moduleData.keywords}
      />

      <main className="py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />

          <article>
            <h1 className="text-3xl font-bold mb-6">{moduleData.title}</h1>
            <p className="text-gray-600 mb-8">{moduleData.description}</p>

            <section aria-labelledby="lessons-title">
              <h2 id="lessons-title" className="text-2xl font-semibold mb-4">
                Module Lessons
              </h2>
              <div className="space-y-4">
                {moduleData.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="border rounded-lg p-4 hover:border-primary transition-colors"
                  >
                    <h3 className="font-semibold">{lesson.title}</h3>
                    <p className="text-sm text-gray-600">{lesson.duration}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
