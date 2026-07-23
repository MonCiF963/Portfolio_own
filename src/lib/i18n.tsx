import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ar" | "fr";

type Dict = Record<string, string | string[] | Record<string, string>>;

const translations: Record<Lang, Dict> = {
  ar: {
    "nav.home": "الرئيسية",
    "nav.portfolio": "أعمالي",
    "nav.services": "خدماتي",
    "nav.about": "نبذة عني",
    "nav.pricing": "الأسعار",
    "nav.faq": "الأسئلة",
    "nav.contact": "تواصل",
    "cta.quote": "اطلب عرض سعر",
    "cta.viewWork": "شاهد أعمالي",

    "hero.badge": "مطوّر ومصمّم ويب مستقل",
    "hero.title": "أصمّم وأطوّر مواقع تليق بعلامتك",
    "hero.subtitle":
      "أنا مطوّر ويب مستقل. أبني مواقع عصرية، سريعة ومتجاوبة، مصمّمة من الصفر لتمنح نشاطك حضوراً رقمياً احترافياً.",
    "hero.chip1": "تصميم مخصّص",
    "hero.chip2": "أداء عالٍ",
    "hero.chip3": "SEO تقني",

    "trusted.title": "التقنيات التي أعمل بها",

    "services.eyebrow": "ما أقدّمه",
    "services.title": "خدمات مصمّمة لخدمة أهدافك",
    "services.subtitle": "من الفكرة إلى الإطلاق، أتولّى الجانب التصميمي والتقني لأسلّمك موقعاً جاهزاً للعمل.",

    "portfolio.eyebrow": "أعمالي",
    "portfolio.title": "مشاريع مختارة",
    "portfolio.subtitle": "نماذج من واجهات ومشاريع أنجزتها، تعكس أسلوبي في التصميم والتطوير.",
    "portfolio.filter.all": "الكل",
    "portfolio.filter.company": "شركات",
    "portfolio.filter.restaurant": "مطاعم",
    "portfolio.filter.doctor": "أطباء",
    "portfolio.filter.construction": "مقاولات",
    "portfolio.filter.realestate": "عقارات",
    "portfolio.filter.landing": "صفحات هبوط",
    "portfolio.filter.dashboard": "لوحات تحكم",
    "portfolio.filter.ecommerce": "متاجر",

    "why.eyebrow": "لماذا تختارني",
    "why.title": "ما يميّز طريقتي في العمل",
    "why.subtitle": "أتعامل مع كل مشروع بجدّية ومسؤولية، وأركّز على ما يُحدث فرقاً حقيقياً لعملك.",

    "process.eyebrow": "طريقة عملي",
    "process.title": "منهجية واضحة، من أول لقاء إلى الإطلاق",
    "process.subtitle": "أتّبع مساراً منظّماً في كل مشروع، لتعرف تماماً أين يقف موقعك في كل مرحلة.",

    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "إجابات عن الأسئلة الأكثر شيوعاً",

    "about.eyebrow": "نبذة عني",
    "about.title": "مطوّر ويب مستقل، شغوف بصناعة تجارب رقمية جادّة",
    "about.p1":
      "أنا موديف، مطوّر ومصمّم ويب مستقل. أساعد أصحاب الأعمال والمشاريع الناشئة على بناء مواقع تعكس احترافية علامتهم وتخدم أهدافهم الحقيقية — بعيداً عن القوالب الجاهزة.",
    "about.p2":
      "أحبّ هذا العمل لأنه يمزج بين التصميم والهندسة والتفاصيل الصغيرة. أُصغي أولاً، أخطّط بعناية، ثم أُنفّذ بكود نظيف وأداء عالٍ — لأن الموقع الجيّد يُبنى بالتفاصيل، لا بالوعود.",

    "pricing.eyebrow": "الأسعار",
    "pricing.title": "أسعار تتناسب مع حجم مشروعك",
    "pricing.subtitle": "كل مشروع مختلف. تواصل معي وسأُعدّ لك عرضاً مخصّصاً بعد فهم متطلباتك.",
    "pricing.startFrom": "تواصل للحصول على عرض",
    "pricing.onRequest": "حسب المشروع",
    "pricing.currency": "",
    "pricing.getStarted": "اطلب عرضاً مخصّصاً",
    "pricing.mostPopular": "الأكثر طلباً",

    "contact.eyebrow": "تواصل معي",
    "contact.title": "لنتحدّث عن مشروعك",
    "contact.subtitle": "اختر القناة الأنسب لك، وسأعود إليك في أقرب وقت لمناقشة تفاصيل مشروعك.",
    "contact.whatsapp": "واتساب",
    "contact.email_label": "البريد الإلكتروني",
    "contact.location": "الموقع",
    "contact.reachOn": "تواصل عبر",

    "footer.tagline": "أصمّم وأطوّر مواقع تليق بجدّية أعمالك.",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.quickLinks": "روابط سريعة",
    "footer.follow": "تابعني",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.portfolio": "Projets",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.pricing": "Tarifs",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "cta.quote": "Demander un devis",
    "cta.viewWork": "Voir mes projets",

    "hero.badge": "Développeur & designer web freelance",
    "hero.title": "Je conçois des sites web à la hauteur de votre marque",
    "hero.subtitle":
      "Je suis MoDev, développeur web freelance. Je crée des sites modernes, rapides et responsives, conçus sur mesure pour donner à votre activité la présence en ligne qu'elle mérite.",
    "hero.chip1": "Design sur mesure",
    "hero.chip2": "Performance",
    "hero.chip3": "SEO technique",

    "trusted.title": "Les technologies que j'utilise",

    "services.eyebrow": "Mes services",
    "services.title": "Un accompagnement web de bout en bout",
    "services.subtitle": "De la première idée à la mise en ligne, je prends en charge le design et la partie technique pour vous livrer un site prêt à travailler pour vous.",

    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Quelques projets sélectionnés",
    "portfolio.subtitle": "Un aperçu de projets qui illustrent mon approche du design, du code et de l'expérience utilisateur.",
    "portfolio.filter.all": "Tous",
    "portfolio.filter.company": "Entreprise",
    "portfolio.filter.restaurant": "Restaurant",
    "portfolio.filter.doctor": "Médecin",
    "portfolio.filter.construction": "BTP",
    "portfolio.filter.realestate": "Immobilier",
    "portfolio.filter.landing": "Landing Page",
    "portfolio.filter.dashboard": "Dashboard",
    "portfolio.filter.ecommerce": "E-commerce",

    "why.eyebrow": "Pourquoi me choisir",
    "why.title": "Ce qui fait la différence dans ma façon de travailler",
    "why.subtitle": "Je prends chaque projet au sérieux et je me concentre sur ce qui a un vrai impact pour votre activité.",

    "process.eyebrow": "Ma méthodologie",
    "process.title": "Un processus clair, du premier échange à la mise en ligne",
    "process.subtitle": "Chaque projet suit une démarche structurée. Vous savez à tout moment où en est votre site et ce qui vient ensuite.",

    "faq.eyebrow": "FAQ",
    "faq.title": "Les questions que l'on me pose souvent",

    "about.eyebrow": "À propos",
    "about.title": "Développeur web freelance, passionné par les interfaces bien faites",
    "about.p1":
      "Je suis MoDev, développeur et designer web indépendant. J'accompagne entrepreneurs, PME et projets ambitieux dans la création de sites qui reflètent le sérieux de leur marque — loin des templates génériques.",
    "about.p2":
      "J'aime ce métier parce qu'il mêle design, ingénierie et souci du détail. J'écoute d'abord, je cadre soigneusement, puis je livre un code propre et performant — parce qu'un bon site se construit dans les détails, pas dans les promesses.",

    "pricing.eyebrow": "Tarifs",
    "pricing.title": "Des offres pensées selon la taille de votre projet",
    "pricing.subtitle": "Chaque projet est unique. Contactez-moi et j'établis un devis personnalisé après avoir cerné vos besoins.",
    "pricing.startFrom": "Devis personnalisé",
    "pricing.onRequest": "Sur devis",
    "pricing.currency": "",
    "pricing.getStarted": "Demander un devis",
    "pricing.mostPopular": "Le plus demandé",

    "contact.eyebrow": "Contact",
    "contact.title": "Discutons de votre projet",
    "contact.subtitle": "Choisissez le canal qui vous convient le mieux. Je reviens vers vous rapidement pour échanger sur vos besoins.",
    "contact.whatsapp": "WhatsApp",
    "contact.email_label": "Email",
    "contact.location": "Localisation",
    "contact.reachOn": "Me contacter via",

    "footer.tagline": "Je conçois des sites web à la hauteur de votre entreprise.",
    "footer.rights": "Tous droits réservés",
    "footer.quickLinks": "Liens rapides",
    "footer.follow": "Me suivre",
  },
};

type I18nCtx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: (key: string) => string;
  setLang: (l: Lang) => void;
};

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "ar" || saved === "fr") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch { /* ignore */ }
  }, []);

  const value = useMemo<I18nCtx>(() => ({
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    setLang,
    t: (key: string) => {
      const v = translations[lang][key];
      return typeof v === "string" ? v : key;
    },
  }), [lang, setLang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
