export {};

interface FacebookPixel {
  (eventName: string, ...eventParams: any[]): void;
  queue: any[];
  disablePushState: boolean;
  forcePageView: boolean;
  generation: number;
}

declare global {
  interface Window {
    fbq: FacebookPixel;
    $crisp: any[];
    CRISP_WEBSITE_ID?: string;
  }
}
