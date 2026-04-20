import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { navigateTo } from '../lib/navigation';

const STORAGE_KEY = 'rmq-contact-form';
const TRACKING_KEY = 'rmq-contact-conversion-pending';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
      submittedAt: new Date().toISOString(),
    };

    setIsSubmitting(true);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    sessionStorage.setItem(TRACKING_KEY, 'true');
    event.currentTarget.reset();
    navigateTo('/thank-you');
  };

  return (
    <div id="contact-form" className="rounded-[2rem] border border-softblack/10 bg-offwhite p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-softblack/45">Demande rapide</p>
        <h3 className="mt-3 text-2xl font-sans font-bold text-softblack md:text-3xl">
          Laissez vos coordonn&eacute;es, on vous rappelle.
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-softblack/65">
          Remplissez ce formulaire et vous serez redirig&eacute; vers une page de confirmation utilis&eacute;e pour le suivi Google Ads.
        </p>
      </div>

      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Nom complet"
          required
          className="h-12 rounded-xl border-softblack/10 bg-white"
        />
        <Input
          name="phone"
          type="tel"
          placeholder="T&eacute;l&eacute;phone"
          required
          className="h-12 rounded-xl border-softblack/10 bg-white"
        />
        <Input
          name="email"
          type="email"
          placeholder="Adresse email"
          className="h-12 rounded-xl border-softblack/10 bg-white"
        />
        <Input
          name="subject"
          placeholder="Objet de la demande"
          className="h-12 rounded-xl border-softblack/10 bg-white"
        />
        <Textarea
          name="message"
          placeholder="Expliquez bri&egrave;vement votre besoin"
          required
          className="min-h-32 rounded-2xl border-softblack/10 bg-white md:col-span-2"
        />
        <div className="flex items-center justify-between gap-4 md:col-span-2">
          <p className="text-xs leading-5 text-softblack/45">
            Ce formulaire cr&eacute;e une demande locale et redirige vers une page de remerciement. Il faudra brancher un email service plus tard si vous voulez recevoir les demandes automatiquement.
          </p>
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="h-12 rounded-full bg-orange-500 px-7 text-base font-semibold text-white hover:bg-orange-400"
          >
            <Send className="size-4" />
            Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
}
