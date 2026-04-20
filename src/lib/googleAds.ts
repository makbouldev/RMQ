declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GOOGLE_ADS_ID = 'AW-18086327104';
const CONTACT_CONVERSION_ID = 'AW-18086327104/fLdDCJPxoJ4cEMDmnbBD';

export function trackGoogleAdsPageView(path?: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('config', GOOGLE_ADS_ID, path ? { page_path: path } : undefined);
}

export function trackContactConversion(label: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: CONTACT_CONVERSION_ID,
    event_category: 'contact',
    event_label: label,
  });
}

