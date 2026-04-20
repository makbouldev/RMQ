import { useEffect, useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { Hero } from './sections/Hero';
import { IntroGrid } from './sections/IntroGrid';
import { Services } from './sections/Services';
import { WhyChooseMe } from './sections/WhyChooseMe';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';
import { siteConfig } from './config';
import { trackGoogleAdsPageView } from './lib/googleAds';
import { stripBasePath } from './lib/navigation';
import { ThankYouPage } from './pages/ThankYouPage';
import './App.css';

function App() {
  // Initialize Lenis smooth scroll
  useLenis();
  const [pathname, setPathname] = useState(() => stripBasePath(window.location.pathname));

  useEffect(() => {
    if (siteConfig.siteTitle) {
      document.title = siteConfig.siteTitle;
    }
    if (siteConfig.siteDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', siteConfig.siteDescription);
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      const currentPath = stripBasePath(window.location.pathname);
      setPathname(currentPath);
      trackGoogleAdsPageView(currentPath + window.location.search);
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);

    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  if (pathname === '/thank-you') {
    return <ThankYouPage />;
  }

  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Hero Section - Parallax Layering */}
      <Hero />

      {/* Intro & Masonry Grid - White Section */}
      <IntroGrid />

      {/* Services - Dark Section */}
      <Services />

      {/* Why Choose Me & Stats - White Section */}
      <WhyChooseMe />

      {/* Featured Projects - Dark Section */}
      <FeaturedProjects />

      {/* Testimonials Carousel - White Section */}
      <Testimonials />

      {/* FAQ Accordion - Dark Section */}
      <FAQ />

      {/* Footer - White Section with Massive Typography */}
      <Footer />
    </main>
  );
}

export default App;
