declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GOOGLE_ADS_ID = 'AW-18086327104';
const CONTACT_CONVERSION_ID = 'AW-18086327104/ba8MCJe-xz8cEMDmnbBD';

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

export function reportContactConversion(url?: string) {
  if (typeof window === 'undefined') {
    return false;
  }

  if (typeof window.gtag !== 'function') {
    if (url) {
      window.location.href = url;
    }
    return false;
  }

  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  window.gtag('event', 'conversion', {
    send_to: CONTACT_CONVERSION_ID,
    event_callback: callback,
  });

  return false;
}
