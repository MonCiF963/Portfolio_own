export type ProjectCategory =
  | "company"
  | "restaurant"
  | "doctor"
  | "construction"
  | "realestate"
  | "landing"
  | "dashboard"
  | "ecommerce";

export interface Project {
  id: string;
  title: { ar: string; fr: string };
  description: { ar: string; fr: string };
  category: ProjectCategory;
  cover: string;
  gallery?: string[];
  client?: string;
  technologies: string[];
  date: string;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

// Placeholder screenshots — swap for real work when ready.
const shot = (seed: string) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1600&q=80`;

export const projects: Project[] = [
  {
    id: "aurora-corp",
    title: { ar: "موقع شركة أورورا", fr: "Site Corporate Aurora" },
    description: {
      ar: "موقع تعريفي احترافي لشركة استشارات مع نظام إدارة محتوى.",
      fr: "Site corporate premium pour un cabinet de conseil avec CMS.",
    },
    category: "company",
    cover: shot("photo-1460925895917-afdab827c52f"),
    technologies: ["Next.js", "Tailwind", "Sanity"],
    date: "2025-03",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: "olive-bistro",
    title: { ar: "مطعم زيتون", fr: "Restaurant Olive Bistro" },
    description: {
      ar: "موقع مطعم مع قائمة تفاعلية وحجز طاولات.",
      fr: "Site de restaurant avec menu interactif et réservation.",
    },
    category: "restaurant",
    cover: shot("photo-1517248135467-4c7edcad34c4"),
    technologies: ["React", "Tailwind", "Node.js"],
    date: "2025-02",
    liveUrl: "#",
  },
  {
    id: "dr-amrani",
    title: { ar: "عيادة الدكتور العمراني", fr: "Cabinet Dr. Amrani" },
    description: {
      ar: "موقع طبي مع نظام حجز مواعيد أونلاين.",
      fr: "Site médical avec prise de rendez-vous en ligne.",
    },
    category: "doctor",
    cover: shot("photo-1576091160399-112ba8d25d1d"),
    technologies: ["React", "Supabase", "Tailwind"],
    date: "2025-01",
    liveUrl: "#",
  },
  {
    id: "batir-construction",
    title: { ar: "شركة باطر للمقاولات", fr: "Bâtir Construction" },
    description: {
      ar: "موقع لشركة بناء مع معرض مشاريع تفاعلي.",
      fr: "Site pour entreprise de BTP avec galerie de chantiers.",
    },
    category: "construction",
    cover: shot("photo-1503387762-592deb58ef4e"),
    technologies: ["Next.js", "Framer Motion"],
    date: "2024-12",
    liveUrl: "#",
  },
  {
    id: "villa-immo",
    title: { ar: "فيلا العقارية", fr: "Villa Immobilier" },
    description: {
      ar: "منصة عقارية مع خرائط وفلترة متقدمة.",
      fr: "Plateforme immobilière avec cartes et filtres avancés.",
    },
    category: "realestate",
    cover: shot("photo-1568605114967-8130f3a36994"),
    technologies: ["Next.js", "Mapbox", "Supabase"],
    date: "2024-11",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "saas-launch",
    title: { ar: "صفحة إطلاق SaaS", fr: "Landing SaaS Launch" },
    description: {
      ar: "صفحة هبوط عالية التحويل لإطلاق منتج SaaS.",
      fr: "Landing page haute conversion pour un lancement SaaS.",
    },
    category: "landing",
    cover: shot("photo-1467232004584-a241de8bcf5d"),
    technologies: ["React", "Tailwind", "Framer Motion"],
    date: "2024-10",
    liveUrl: "#",
  },
  {
    id: "analytics-dashboard",
    title: { ar: "لوحة تحكم تحليلات", fr: "Dashboard Analytics" },
    description: {
      ar: "لوحة تحكم تحليلية بواجهة نظيفة ورسوم بيانية.",
      fr: "Dashboard analytique moderne avec visualisations.",
    },
    category: "dashboard",
    cover: shot("photo-1551288049-bebda4e38f71"),
    technologies: ["React", "Recharts", "Tailwind"],
    date: "2024-09",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "atlas-shop",
    title: { ar: "متجر أطلس", fr: "Boutique Atlas" },
    description: {
      ar: "متجر إلكتروني كامل مع دفع آمن وإدارة مخزون.",
      fr: "E-commerce complet avec paiement sécurisé.",
    },
    category: "ecommerce",
    cover: shot("photo-1441986300917-64674bd600d8"),
    technologies: ["Next.js", "Stripe", "Supabase"],
    date: "2024-08",
    liveUrl: "#",
    featured: true,
  },
];
