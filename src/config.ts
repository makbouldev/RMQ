// Site Configuration
// Configuration pour les services de dépannage et remorquage

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "fr",
  siteTitle: "Deppanage Remorquage - Services 24/7",
  siteDescription: "Services professionnels de dépannage et remorquage disponibles 24h/24 et 7j/7. Intervention rapide partout dans la région.",
};

const withBase = (assetPath: string) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, "")}`;

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "Un service de dépannage fiable, disponible 24h/24 et 7j/7 pour chaque urgence",
  heroImage: "",
  heroImageAlt: "Camion de dépannage professionnel",
  overlayText: "Service rapide et fiable",
  brandName: "DEPPANAGE",
  navLinks: [
    { label: "Accueil", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#why-choose" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#footer" },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Votre sécurité",
  titleLine2: "notre priorité",
  description: "Nous offrons des services de dépannage et remorquage de haute qualité depuis plus de 15 ans. Notre équipe d'experts est disponible à tout moment pour vous aider sur la route, où que vous soyez.",
  portfolioImages: [
    { src: withBase("/gallery-1.jpg"), alt: "Dépannage sur autoroute" },
    { src: withBase("/gallery-2.jpg"), alt: "Remorquage de véhicule" },
    { src: withBase("/gallery-3.jpg"), alt: "Service de dépannage" },
    { src: withBase("/gallery-4.jpg"), alt: "Équipe professionnelle" },
    { src: withBase("/gallery-5.jpg"), alt: "Camion de remorquage" },
  ],
  accentText: "Services Professionnels - 24/7",
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Nos Interventions",
  titleRegular: "Services",
  titleItalic: "Réalisés",
  viewAllText: "Voir tous nos services",
  viewAllHref: "#services",
  viewProjectText: "En savoir plus",
  projects: [
    {
      id: 1,
      title: "Dépannage d'urgence",
      category: "Route",
      year: "2024",
      image: withBase("/project-1.jpg"),
      description: "Intervention rapide sur toutes routes pour panne mécanique, batterie déchargée ou crevaison.",
    },
    {
      id: 2,
      title: "Remorquage longue distance",
      category: "Transport",
      year: "2024",
      image: withBase("/project-2.jpg"),
      description: "Transport sécurisé de votre véhicule sur de longues distances avec suivi en temps réel.",
    },
    {
      id: 3,
      title: "Assurance accident",
      category: "Sinistre",
      year: "2024",
      image: withBase("/project-3.jpg"),
      description: "Gestion complète de votre sinistre avec prise en charge directe par votre assurance.",
    },
    {
      id: 4,
      title: "Dépannage moto",
      category: "Deux-roues",
      year: "2024",
      image: withBase("/project-4.jpg"),
      description: "Service spécialisé pour motos et scooters avec équipement adapté.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "Ce que nous offrons",
  titleLine1: "Nos Services",
  titleLine2Italic: "Professionnels",
  description: "Une gamme complète de services de dépannage et remorquage pour tous types de véhicules. Disponibles 24 heures sur 24, 7 jours sur 7.",
  services: [
    {
      iconName: "Truck",
      title: "Remorquage",
      description: "Service de remorquage pour tous véhicules légers et utilitaires avec camions modernes et équipés.",
    },
    {
      iconName: "Wrench",
      title: "Dépannage sur place",
      description: "Réparation rapide sur place pour pannes mineures : batterie, pneu, démarrage.",
    },
    {
      iconName: "Clock",
      title: "Disponible 24/7",
      description: "Service d'urgence disponible à toute heure, jour et nuit, week-ends et jours fériés.",
    },
    {
      iconName: "Shield",
      title: "Assistance assurance",
      description: "Prise en charge directe avec toutes les compagnies d'assurance pour votre tranquillité.",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Pourquoi nous choisir",
  titleRegular: "Notre",
  titleItalic: "Expertise",
  statsLabel: "En chiffres",
  stats: [
    { value: 15, suffix: "+", label: "Années d'expérience" },
    { value: 50000, suffix: "+", label: "Interventions" },
    { value: 30, suffix: " min", label: "Temps moyen d'arrivée" },
    { value: 98, suffix: "%", label: "Clients satisfaits" },
  ],
  featureCards: [
    {
      image: withBase("/feature-1.jpg"),
      imageAlt: "Équipe professionnelle",
      title: "Équipe qualifiée",
      description: "Nos techniciens sont formés et certifiés pour tous types d'interventions.",
    },
    {
      image: withBase("/feature-2.jpg"),
      imageAlt: "Flotte de camions",
      title: "Flotte moderne",
      description: "Véhicules de dépannage récents et équipés des dernières technologies.",
    },
  ],
  wideImage: withBase("/wide-service.jpg"),
  wideImageAlt: "Service de dépannage sur route",
  wideTitle: "Intervention rapide garantie",
  wideDescription: "Nous nous engageons à être sur place en moins de 30 minutes pour toute urgence dans notre zone de couverture.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Témoignages clients",
  titleRegular: "Ce qu'ils disent",
  titleItalic: "de nous",
  testimonials: [
    {
      id: 1,
      name: "Marie Dupont",
      role: "Automobiliste",
      image: withBase("/testimonial-1.jpg"),
      quote: "Service impeccable ! Arrivés en 20 minutes à 2h du matin. L'équipe était professionnelle et rassurante. Je recommande vivement.",
    },
    {
      id: 2,
      name: "Pierre Martin",
      role: "Chauffeur routier",
      image: withBase("/testimonial-2.jpg"),
      quote: "Je fais appel à eux régulièrement pour mon entreprise. Toujours ponctuels et efficaces. Un partenaire de confiance.",
    },
    {
      id: 3,
      name: "Sophie Bernard",
      role: "Propriétaire de flotte",
      image: withBase("/testimonial-3.jpg"),
      quote: "Excellent rapport qualité-prix. La prise en charge avec l'assurance est très facile. Équipe sympathique et compétente.",
    },
    {
      id: 4,
      name: "Jean Leroy",
      role: "Motard",
      image: withBase("/testimonial-4.jpg"),
      quote: "Spécialistes du dépannage moto. Mon deux-roues a été transporté sans aucune rayure. Service très professionnel.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Questions fréquentes",
  titleRegular: "Besoin",
  titleItalic: "d'aide ?",
  ctaText: "Vous avez encore des questions ?",
  ctaButtonText: "Contactez-nous",
  ctaHref: "#footer",
  faqs: [
    {
      id: "faq-1",
      question: "Quel est le délai d'intervention ?",
      answer: "Nous nous engageons à intervenir en moins de 30 minutes dans notre zone de couverture. Pour les zones plus éloignées, le délai peut varier entre 45 et 60 minutes.",
    },
    {
      id: "faq-2",
      question: "Quels types de véhicules pouvez-vous remorquer ?",
      answer: "Nous pouvons remorquer tous types de véhicules légers : voitures, utilitaires, motos, scooters. Nous disposons également d'équipements pour les véhicules électriques.",
    },
    {
      id: "faq-3",
      question: "Travaillez-vous avec les assurances ?",
      answer: "Oui, nous travaillons avec toutes les compagnies d'assurance. Nous pouvons prendre en charge directement votre sinistre selon les termes de votre contrat.",
    },
    {
      id: "faq-4",
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs sont transparents et compétitifs. Le coût dépend de la distance et du type d'intervention. Contactez-nous pour un devis gratuit et sans engagement.",
    },
    {
      id: "faq-5",
      question: "Êtes-vous disponibles les jours fériés ?",
      answer: "Absolument ! Notre service est disponible 24h/24 et 7j/7, y compris les week-ends et jours fériés. Les urgences n'attendent pas !",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "DEPPANAGE",
  contactLabel: "Contactez-nous",
  email: "contact@deppanage-remorquage.fr",
  locationText: "123 Avenue de la Route\n75000 Paris, France",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "Accueil", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#why-choose" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  socialLabel: "Suivez-nous",
  socialLinks: [
    { iconName: "Instagram", href: "#", label: "Instagram" },
    { iconName: "Twitter", href: "#", label: "Twitter" },
    { iconName: "Linkedin", href: "#", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:contact@deppanage-remorquage.fr", label: "Email" },
  ],
  tagline: "Votre partenaire de confiance\nsur la route depuis 2009",
  copyright: "© 2024 Deppanage Remorquage. Tous droits réservés.",
  bottomLinks: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGV", href: "#" },
  ],
};

