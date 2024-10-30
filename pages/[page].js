import Head from "next/head";

export default function Page({ pageData }) {
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
