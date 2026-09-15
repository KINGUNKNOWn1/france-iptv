import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import StickyWhatsAppCTA from './components/StickyWhatsAppCTA';
import CookieConsent from './components/CookieConsent';
import PageTransition from './components/PageTransition';
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const IPTVKopen = lazy(() => import('./pages/IPTVKopen'));
const Prijzen = lazy(() => import('./pages/Prijzen'));
const Contact = lazy(() => import('./pages/Contact'));
const IPTVAbonnement = lazy(() => import('./pages/IPTVAbonnement'));
const IPTVNederland = lazy(() => import('./pages/IPTVNederland'));
const Kanalen = lazy(() => import('./pages/Kanalen'));
const Apparaten = lazy(() => import('./pages/Apparaten'));
const VeelgesteldeVragen = lazy(() => import('./pages/VeelgesteldeVragen'));
const OverOns = lazy(() => import('./pages/OverOns'));
const IPTVZonderContract = lazy(() => import('./pages/IPTVZonderContract'));
const IPTVHolland = lazy(() => import('./pages/IPTVHolland'));

// Lazy load device pages
const SamsungTV = lazy(() => import('./pages/apparaten/SamsungTV'));
const Freebox = lazy(() => import('./pages/apparaten/Freebox'));
const Orange = lazy(() => import('./pages/apparaten/Orange'));
const SFR = lazy(() => import('./pages/apparaten/SFR'));
const Chromecast = lazy(() => import('./pages/apparaten/Chromecast'));
const ErreurLecture = lazy(() => import('./pages/apparaten/ErreurLecture'));
const ActivationCode = lazy(() => import('./pages/apparaten/ActivationCode'));

// Lazy load blog pages
const IPTVKopenNederlandGids = lazy(() => import('./pages/blog/IPTVKopenNederlandGids'));
const BesteIPTVApps2024 = lazy(() => import('./pages/blog/BesteIPTVApps2024'));
const IsIPTVLegaalNederland = lazy(() => import('./pages/blog/IsIPTVLegaalNederland'));
const IPTVInstallerenSamsungTV = lazy(() => import('./pages/blog/IPTVInstallerenSamsungTV'));
const NederlandseIPTVKanalenLijst = lazy(() => import('./pages/blog/NederlandseIPTVKanalenLijst'));

// Lazy load legal pages
const Privacybeleid = lazy(() => import('./pages/Privacybeleid'));
const AlgemeneVoorwaarden = lazy(() => import('./pages/AlgemeneVoorwaarden'));
const Retourbeleid = lazy(() => import('./pages/Retourbeleid'));
const CookieBeleid = lazy(() => import('./pages/CookieBeleid'));

// Lazy load error pages
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    // Lazy-loaded pages render after navigation, so retry until the anchor exists
    const id = hash.slice(1);
    let attempts = 0;
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      attempts += 1;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (el || attempts >= 20) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  useEffect(() => {
    // Initialize Lenis smooth scroll with optimized settings for performance
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      // Performance optimization
      lerp: 0.1,
      syncTouch: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          lenis.scrollTo(target, { offset: -80 });
        }
      });
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollToTop />
      <SmoothScroll />
      <Suspense fallback={<LoadingScreen />}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acheter-iptv" element={<IPTVKopen />} />
            <Route path="/tarifs" element={<Prijzen />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/abonnement-iptv" element={<IPTVAbonnement />} />
            <Route path="/iptv-france" element={<IPTVNederland />} />
            <Route path="/iptv-sans-engagement" element={<IPTVZonderContract />} />
            <Route path="/iptv-belgique" element={<IPTVHolland />} />
            <Route path="/chaines" element={<Kanalen />} />
            <Route path="/appareils" element={<Apparaten />} />
            <Route path="/appareils/samsung-tv" element={<SamsungTV />} />
            <Route path="/appareils/freebox" element={<Freebox />} />
            <Route path="/appareils/orange" element={<Orange />} />
            <Route path="/appareils/sfr" element={<SFR />} />
            <Route path="/appareils/chromecast-google-tv" element={<Chromecast />} />
            <Route path="/appareils/erreur-lecture-iptv" element={<ErreurLecture />} />
            <Route path="/appareils/activer-code-iptv" element={<ActivationCode />} />
            <Route path="/faq" element={<VeelgesteldeVragen />} />
            <Route path="/a-propos" element={<OverOns />} />
            {/* Blog Routes */}
            <Route path="/blog/acheter-iptv-france-guide-complet" element={<IPTVKopenNederlandGids />} />
            <Route path="/blog/meilleures-applications-iptv-2024" element={<BesteIPTVApps2024 />} />
            <Route path="/blog/iptv-legal-en-france" element={<IsIPTVLegaalNederland />} />
            <Route path="/blog/installer-iptv-samsung-tv" element={<IPTVInstallerenSamsungTV />} />
            <Route path="/blog/liste-chaines-francaises-iptv" element={<NederlandseIPTVKanalenLijst />} />
            {/* Legal Routes */}
            <Route path="/politique-de-confidentialite" element={<Privacybeleid />} />
            <Route path="/cgv" element={<AlgemeneVoorwaarden />} />
            <Route path="/droit-de-retractation" element={<Retourbeleid />} />
            <Route path="/politique-de-cookies" element={<CookieBeleid />} />
            {/* 404 Catch-all Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </Suspense>
      <Footer />
      <StickyWhatsAppCTA />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
