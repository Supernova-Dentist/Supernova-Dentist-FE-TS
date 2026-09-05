// globals.d.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer?: unknown[];
  }
}

export {};
