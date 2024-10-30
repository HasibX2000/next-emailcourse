import Head from "next/head";

export default function Page({ pageData }) {
  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{pageData.title} | Email Design With HTML & CSS By Akon M Hasib</title>
        <meta name="description" content={pageData.description} />
      </Head>
      {/* page content */}
    </>
  );
}

export async function getStaticProps({ params }) {
  try {
    const pageData = await fetchPageData(params.page); // Replace with your actual data fetching function

    if (!pageData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        pageData,
      },
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
