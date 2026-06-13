export const trackGAEvent = (event: string, params?: Record<string, any>) => {
  if ((window as any).gtag) {
    (window as any).gtag("event", event, params);
  }
};