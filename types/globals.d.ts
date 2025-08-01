// globals.d.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer?: unknown[];
  }
}

export {};
