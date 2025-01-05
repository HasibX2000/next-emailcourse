export const measurePagePerformance = () => {
  if (typeof window !== "undefined") {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;

    // Core Web Vitals metrics
    const cls = performance
      .getEntriesByType("layout-shift")
      .reduce((sum, entry: any) => sum + entry.value, 0);

    const fid = performance.getEntriesByType("first-input")[0];
    const lcp = performance.getEntriesByType("largest-contentful-paint").slice(-1)[0];

    return {
      timeToFirstByte: navigation.responseStart - navigation.requestStart,
      firstContentfulPaint: performance.getEntriesByName("first-contentful-paint")[0]?.startTime,
      largestContentfulPaint: lcp?.startTime,
      firstInputDelay: fid?.processingStart - fid?.startTime,
      cumulativeLayoutShift: cls,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      pageLoadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    };
  }
  return null;
};

export const sendPerformanceMetrics = async (metrics: any) => {
  try {
    await fetch("/api/performance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metrics),
    });
  } catch (error) {
    console.error("Failed to send performance metrics:", error);
  }
};
