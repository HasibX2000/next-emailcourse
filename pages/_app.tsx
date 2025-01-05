import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import { measurePagePerformance, sendPerformanceMetrics } from "@/utils/performance";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Register Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
          (registration) => {
            console.log("ServiceWorker registration successful");
          },
          (err) => {
            console.log("ServiceWorker registration failed: ", err);
          }
        );
      });
    }

    // Measure and send performance metrics
    const metrics = measurePagePerformance();
    if (metrics) {
      sendPerformanceMetrics(metrics);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0066cc" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
