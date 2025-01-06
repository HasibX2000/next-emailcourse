import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

interface Module {
  title: string;
  description: string;
  // Add other properties as needed
}

interface ModulePageProps {
  moduleData: Module | null; // Allow null for error handling
}

export default function ModulePage({ moduleData }: ModulePageProps) {
  const router = useRouter();

  // Handle loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!moduleData) {
    return <div>Module not found</div>; // Handle the case where the module is not found
  }

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

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of modules to generate paths
  const modules = await fetchModules(); // Replace with your data fetching logic
  const paths = modules.map((module) => ({
    params: { slug: module.slug },
  }));

  return { paths, fallback: true }; // Enable fallback for new modules
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const moduleData = await fetchModuleBySlug(slug); // Replace with your data fetching logic

  if (!moduleData) {
    return {
      notFound: true, // Return 404 if the module is not found
    };
  }

  return {
    props: {
      moduleData,
    },
    revalidate: 10, // Optional: revalidate every 10 seconds
  };
};
