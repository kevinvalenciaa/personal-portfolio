import { useEffect } from "react";

export function usePerformanceMonitor() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === "measure") {
          console.log(`${entry.name}: ${entry.duration}ms`);
        }
      });
    });

    observer.observe({ entryTypes: ["measure"] });

    // Track page load time
    window.addEventListener("load", () => {
      const loadTime = performance.now();
      console.log(`Page load time: ${loadTime}ms`);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

export function measurePerformance<T extends any[], R>(
  fn: (...args: T) => R,
  name: string
) {
  return (...args: T): R => {
    performance.mark(`${name}-start`);
    const result = fn(...args);
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    return result;
  };
}
