import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock3, MapPinned, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { heroConfig } from '../config';
import heroBackground from '../assets/herobg.png';
import { Button } from '../components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const phoneNumber = '+212728030890';
  const whatsappMessage = encodeURIComponent("Bonjour, j'ai besoin d'un dépannage.");
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);

  if (!heroConfig.backgroundText && !heroConfig.heroImage && heroConfig.navLinks.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Store ScrollTrigger instances for cleanup
      const triggers: ScrollTrigger[] = [];

      // Parallax effect for main text
      const textTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (textRef.current) {
            gsap.set(textRef.current, { yPercent: self.progress * 50 });
          }
        },
      });
      triggers.push(textTrigger);

      // Parallax effect for model (slower movement = appears closer)
      const modelTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (modelRef.current) {
            gsap.set(modelRef.current, { yPercent: self.progress * 20 });
          }
        },
      });
      triggers.push(modelTrigger);

      // Fade out overlay text faster
      const overlayTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '30% top',
        scrub: 1,
        onUpdate: (self) => {
          if (overlayTextRef.current) {
            gsap.set(overlayTextRef.current, { opacity: 1 - self.progress });
          }
        },
      });
      triggers.push(overlayTrigger);

      // Cleanup function
      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-forest-dark"
    >
      {/* Layer 1: Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Layer 2: Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/70 to-forest-mid/90" />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 3: Big Text */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center z-10 px-6 md:px-12 will-change-transform"
      >
        <h1 className="max-w-[96vw] text-left text-[11vw] uppercase md:max-w-[92vw] md:text-[8vw] lg:max-w-[88vw] lg:text-[6vw] font-sans font-extrabold text-white/14 tracking-[-0.06em] leading-[0.85] select-none text-balance">
          {heroConfig.backgroundText}
        </h1>
      </div>

      {/* Layer 4: Creative content */}
      <div className="relative z-30 mx-auto flex min-h-screen w-full max-w-[92rem] items-center px-6 pb-16 pt-28 md:px-12 md:pb-20">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="max-w-3xl">
            <div
              ref={overlayTextRef}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm text-white/85 backdrop-blur-md will-change-transform"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.9)]" />
              <span>Disponible 24h/24 - 7j/7</span>
            </div>

            <h2 className="max-w-[14ch] font-sans text-[2.8rem] font-extrabold leading-[0.96] text-white sm:text-[3.4rem] lg:text-[5rem]">
              D&eacute;pannage rapide, intervention s&eacute;rieuse, route relanc&eacute;e.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              {heroConfig.overlayText} avec une assistance imm&eacute;diate, un service humain et une &eacute;quipe pr&ecirc;te &agrave; intervenir partout o&ugrave; vous en avez besoin.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-orange-500 px-7 text-base font-semibold text-white shadow-[0_18px_45px_rgba(249,115,22,0.35)] hover:bg-orange-400"
              >
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="size-4" />
                  Appeler maintenant
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-white/6 px-7 text-base font-semibold text-white backdrop-blur-md hover:bg-white/12 hover:text-white"
              >
                <a href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/12 bg-black/20 p-4 backdrop-blur-sm">
                <Clock3 className="mb-3 size-5 text-orange-300" />
                <p className="text-sm font-semibold text-white">Intervention express</p>
                <p className="mt-1 text-xs leading-5 text-white/65">Une &eacute;quipe mobilis&eacute;e d&egrave;s votre appel.</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-black/20 p-4 backdrop-blur-sm">
                <ShieldCheck className="mb-3 size-5 text-orange-300" />
                <p className="text-sm font-semibold text-white">Service fiable</p>
                <p className="mt-1 text-xs leading-5 text-white/65">Prise en charge claire et s&eacute;curis&eacute;e.</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-black/20 p-4 backdrop-blur-sm">
                <MapPinned className="mb-3 size-5 text-orange-300" />
                <p className="text-sm font-semibold text-white">Zone large</p>
                <p className="mt-1 text-xs leading-5 text-white/65">Assistance sur route, ville et autoroute.</p>
              </div>
            </div>
          </div>

          <div className="relative hidden justify-end lg:flex">
            <div className="relative w-full max-w-md rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl">
              <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-orange-500/20 blur-3xl" />
              <div className="absolute -right-6 bottom-6 h-28 w-28 rounded-full bg-white/10 blur-3xl" />

              <div className="relative space-y-5">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">Urgence</p>
                    <p className="mt-1 text-lg font-semibold text-white">Appelez, on part</p>
                  </div>
                  <div className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">24/7</div>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                  <p className="text-sm leading-6 text-white/72">
                    Une panne ne doit pas bloquer votre journ&eacute;e. Notre &eacute;quipe arrive vite, rassure, et remet votre trajet en mouvement.
                  </p>
                </div>

                <a
                  href="#services"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white transition-colors duration-300 hover:bg-white/10"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/45">Voir plus</p>
                    <p className="mt-1 text-base font-semibold">D&eacute;couvrir nos services</p>
                  </div>
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 5: Hero Model Image (Cutout) */}
      {heroConfig.heroImage && (
        <div
          ref={modelRef}
          className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center z-20 will-change-transform"
        >
          <div className="relative w-[56vw] max-w-[420px] md:w-[34vw] lg:w-[26vw]">
            <img
              src={heroConfig.heroImage}
              alt={heroConfig.heroImageAlt}
              className="w-full h-auto object-contain"
              loading="eager"
            />
            {/* Gradient fade at bottom for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forest-dark to-transparent" />
          </div>
        </div>
      )}

      {/* Navigation hint */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="text-white font-sans font-bold text-lg tracking-tight">
          {heroConfig.brandName}
        </div>
        {heroConfig.navLinks.length > 0 && (
          <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-body">
            {heroConfig.navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors duration-300">{link.label}</a>
            ))}
          </div>
        )}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </section>
  );
}
