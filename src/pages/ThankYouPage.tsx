import { useEffect, useMemo } from 'react';
import { CheckCircle2, ChevronLeft, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { reportContactConversion, trackContactConversion } from '../lib/googleAds';
import { navigateTo } from '../lib/navigation';

const STORAGE_KEY = 'rmq-contact-form';
const TRACKING_KEY = 'rmq-contact-conversion-pending';

type StoredLead = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export function ThankYouPage() {
  const phoneNumber = '+212 787-449502';
  const phoneHref = `tel:${phoneNumber.replace(/[\s-]/g, '')}`;
  const lead = useMemo<StoredLead | null>(() => {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as StoredLead;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(TRACKING_KEY) === 'true') {
      trackContactConversion('thank_you_page');
      sessionStorage.removeItem(TRACKING_KEY);
    }
  }, []);

  return (
    <main className="min-h-screen bg-forest-dark px-6 py-10 text-white md:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl items-center">
        <div className="w-full rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-xl md:p-12">
          <CheckCircle2 className="size-14 text-orange-400" />
          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/45">Confirmation</p>
          <h1 className="mt-4 max-w-[14ch] text-4xl font-extrabold leading-tight md:text-6xl">
            Merci, votre demande a bien &eacute;t&eacute; envoy&eacute;e.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            Notre &eacute;quipe vous recontactera rapidement pour confirmer votre besoin et organiser l&apos;intervention.
          </p>

          {lead && (
            <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-6 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">Nom</p>
                <p className="mt-2 text-lg font-semibold text-white">{lead.name || '-'}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">T&eacute;l&eacute;phone</p>
                <p className="mt-2 text-lg font-semibold text-white">{lead.phone || '-'}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">Email</p>
                <p className="mt-2 text-lg font-semibold text-white">{lead.email || 'Non renseign&eacute;'}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">Message</p>
                <p className="mt-2 text-lg font-semibold text-white">{lead.message || '-'}</p>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              type="button"
              size="lg"
              className="h-12 rounded-full bg-orange-500 px-7 text-base font-semibold text-white hover:bg-orange-400"
              onClick={() => navigateTo('/')}
            >
              <ChevronLeft className="size-4" />
              Retour au site
            </Button>

            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/20 bg-white/6 px-7 text-base font-semibold text-white hover:bg-white/12 hover:text-white">
              <a
                href={phoneHref}
                onClick={(event) => {
                  event.preventDefault();
                  reportContactConversion(phoneHref);
                }}
              >
                <Phone className="size-4" />
                Appeler le {phoneNumber}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
