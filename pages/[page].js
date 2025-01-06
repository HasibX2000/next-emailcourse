import Head from "next/head";

export default function Page({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{data.title} | Email Design With HTML & CSS By Akon M Hasib</title>
        <meta name="description" content={data.description} />
      </Head>
      {/* page content */}
    </>
  );
}

export async function getStaticProps({ params }) {
  try {
    const pageData = await fetchPageData(params.page);

    return {
      props: {
        data: pageData || null,
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
