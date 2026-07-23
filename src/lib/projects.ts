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
      ar: "موقع تعريفي لشركة استشارات، صُمّم لتقديم خدماتها بوضوح وبناء ثقة الزوّار من أول انطباع.",
      fr: "Site vitrine pour un cabinet de conseil — pensé pour présenter clairement ses services et inspirer confiance dès la première visite.",
    },
    category: "company",
    cover: shot("photo-1460925895917-afdab827c52f"),
    technologies: ["Next.js", "Tailwind", "Sanity"],
    date: "2025-03",
    featured: true,
  },
  {
    id: "olive-bistro",
    title: { ar: "مطعم زيتون", fr: "Restaurant Olive Bistro" },
    description: {
      ar: "موقع مطعم عائلي، يعرض القائمة والأجواء بشكل جذّاب ويسهّل حجز الطاولات على الزبائن.",
      fr: "Site d'un restaurant familial : mise en valeur de la carte et de l'ambiance, avec une réservation de table simplifiée pour les clients.",
    },
    category: "restaurant",
    cover: shot("photo-1517248135467-4c7edcad34c4"),
    technologies: ["React", "Tailwind", "Node.js"],
    date: "2025-02",
  },
  {
    id: "dr-amrani",
    title: { ar: "عيادة الدكتور العمراني", fr: "Cabinet Dr. Amrani" },
    description: {
      ar: "موقع طبّي لعيادة خاصّة، يهدف إلى تعريف المرضى بالخدمات وتسهيل حجز المواعيد أونلاين.",
      fr: "Site pour un cabinet médical privé — présenter les spécialités et permettre aux patients de prendre rendez-vous en ligne.",
    },
    category: "doctor",
    cover: shot("photo-1576091160399-112ba8d25d1d"),
    technologies: ["React", "Supabase", "Tailwind"],
    date: "2025-01",
  },
  {
    id: "batir-construction",
    title: { ar: "شركة باطر للمقاولات", fr: "Bâtir Construction" },
    description: {
      ar: "موقع لشركة مقاولات وبناء، يبرز مشاريعها المنجزة ويمنح العملاء المحتملين صورة واضحة عن خبرتها.",
      fr: "Site pour une entreprise du BTP : mettre en avant les chantiers réalisés et rassurer les prospects sur son savoir-faire.",
    },
    category: "construction",
    cover: shot("photo-1503387762-592deb58ef4e"),
    technologies: ["Next.js", "Framer Motion"],
    date: "2024-12",
  },
  {
    id: "villa-immo",
    title: { ar: "فيلا العقارية", fr: "Villa Immobilier" },
    description: {
      ar: "منصّة عقارية لوكالة محلّية، مع بحث متقدّم وخرائط تفاعلية لمساعدة المشترين على إيجاد العقار المناسب بسرعة.",
      fr: "Plateforme immobilière pour une agence locale — recherche avancée et cartes interactives pour aider les acheteurs à trouver rapidement le bon bien.",
    },
    category: "realestate",
    cover: shot("photo-1568605114967-8130f3a36994"),
    technologies: ["Next.js", "Mapbox", "Supabase"],
    date: "2024-11",
    featured: true,
  },
  {
    id: "saas-launch",
    title: { ar: "صفحة إطلاق SaaS", fr: "Landing SaaS Launch" },
    description: {
      ar: "صفحة هبوط لإطلاق منتج SaaS، صُمّمت لشرح المنتج بوضوح وتحويل الزوّار إلى مشتركين تجريبيين.",
      fr: "Landing page pour le lancement d'un produit SaaS — présenter clairement le produit et transformer les visiteurs en inscrits à l'essai.",
    },
    category: "landing",
    cover: shot("photo-1467232004584-a241de8bcf5d"),
    technologies: ["React", "Tailwind", "Framer Motion"],
    date: "2024-10",
  },
  {
    id: "analytics-dashboard",
    title: { ar: "لوحة تحكم تحليلات", fr: "Dashboard Analytics" },
    description: {
      ar: "لوحة تحكّم داخلية لفريق تشغيل، مصمّمة لعرض المؤشّرات الأساسية واتخاذ قرارات أسرع بواجهة نظيفة.",
      fr: "Interface d'administration interne pour une équipe ops — visualiser les indicateurs clés et prendre des décisions plus rapidement.",
    },
    category: "dashboard",
    cover: shot("photo-1551288049-bebda4e38f71"),
    technologies: ["React", "Recharts", "Tailwind"],
    date: "2024-09",
  },
  {
    id: "atlas-shop",
    title: { ar: "متجر أطلس", fr: "Boutique Atlas" },
    description: {
      ar: "متجر إلكتروني لعلامة محلّية، مصمّم ليعكس هوية المنتج ويقدّم تجربة شراء بسيطة وواضحة على كل الأجهزة.",
      fr: "Boutique en ligne pour une marque locale — refléter l'identité produit et offrir une expérience d'achat simple et fluide sur tous les écrans.",
    },
    category: "ecommerce",
    cover: shot("photo-1441986300917-64674bd600d8"),
    technologies: ["Next.js", "Stripe", "Supabase"],
    date: "2024-08",
    featured: true,
  },
];
