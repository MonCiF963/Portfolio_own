import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ar" | "fr";

type Dict = Record<string, string | string[] | Record<string, string>>;

const translations: Record<Lang, Dict> = {
  ar: {
    "nav.home": "الرئيسية",
    "nav.portfolio": "أعمالي",
    "nav.services": "خدماتي",
    "nav.about": "نبذة عني",
    "nav.contact": "تواصل",
    "cta.quote": "لنتحدّث عن مشروعك",
    "cta.viewWork": "شاهد أعمالي",
    "cta.contactMe": "تواصل معي",

    "hero.badge": "مطوّر ويب ومبدع رقمي مستقل",
    "hero.title.1": "أصمّم وأبني",
    "hero.title.2": "مواقع تُشبه علامتك",
    "hero.subtitle":
      "أنا موديف، مطوّر ويب مستقل. أبني مواقع سريعة ومتجاوبة من الصفر — بدون قوالب جاهزة، وبتواصل مباشر معي من أول فكرة إلى الإطلاق.",

    "services.eyebrow": "خدماتي",
    "services.title": "ما أقدّمه",
    "services.secondary": "خدمات تكميلية",

    "portfolio.eyebrow": "أعمالي",
    "portfolio.title": "مشاريع مختارة",
    "portfolio.subtitle": "نماذج تعكس أسلوبي في التصميم والتطوير.",
    "portfolio.filter.all": "الكل",
    "portfolio.filter.company": "شركات",
    "portfolio.filter.restaurant": "مطاعم",
    "portfolio.filter.doctor": "أطباء",
    "portfolio.filter.construction": "مقاولات",
    "portfolio.filter.realestate": "عقارات",
    "portfolio.filter.landing": "صفحات هبوط",
    "portfolio.filter.dashboard": "لوحات تحكم",
    "portfolio.filter.ecommerce": "متاجر",

    "why.eyebrow": "لماذا تعمل معي",
    "why.title": "ماذا تحصل عليه",

    "about.eyebrow": "نبذة عني",
    "about.title": "أنا موديف",
    "about.p1":
      "مطوّر ومصمّم ويب مستقل. أبني واجهات نظيفة وأكتب كوداً مرتّباً، لأن الموقع الجيّد يُبنى في التفاصيل الصغيرة قبل أي شيء آخر.",
    "about.p2":
      "أحبّ اللحظة التي تتحوّل فيها فكرة غامضة إلى واجهة واضحة وسريعة. أُصغي أولاً، أخطّط، ثم أُنفّذ — وأنت تتعامل معي مباشرة في كل خطوة.",
    "about.philosophy": "فلسفتي",
    "about.philosophyValue": "البساطة، الوضوح، والأداء",

    "contact.eyebrow": "تواصل",
    "contact.title": "لنبدأ مشروعك",
    "contact.subtitle": "اختر القناة الأنسب لك وسأعود إليك في أقرب وقت.",
    "contact.whatsapp": "واتساب",
    "contact.email_label": "البريد الإلكتروني",
    "contact.available": "متاح لمشاريع جديدة",

    "footer.tagline": "مطوّر ويب مستقل — أبني مواقع سريعة ومصمّمة من الصفر.",
    "footer.rights": "جميع الحقوق محفوظة",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.portfolio": "Projets",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "cta.quote": "Parlons de votre projet",
    "cta.viewWork": "Voir mes projets",
    "cta.contactMe": "Me contacter",

    "hero.badge": "Développeur web & créateur digital freelance",
    "hero.title.1": "Je conçois et développe",
    "hero.title.2": "des sites qui vous ressemblent",
    "hero.subtitle":
      "Je suis MoDev, développeur web freelance. Je construis des sites rapides et responsives, entièrement sur mesure — sans template, et en échangeant directement avec moi du premier échange à la mise en ligne.",

    "services.eyebrow": "Services",
    "services.title": "Ce que je fais",
    "services.secondary": "Services complémentaires",

    "portfolio.eyebrow": "Projets",
    "portfolio.title": "Projets sélectionnés",
    "portfolio.subtitle": "Un aperçu de mon approche du design et du code.",
    "portfolio.filter.all": "Tous",
    "portfolio.filter.company": "Entreprise",
    "portfolio.filter.restaurant": "Restaurant",
    "portfolio.filter.doctor": "Médecin",
    "portfolio.filter.construction": "BTP",
    "portfolio.filter.realestate": "Immobilier",
    "portfolio.filter.landing": "Landing Page",
    "portfolio.filter.dashboard": "Dashboard",
    "portfolio.filter.ecommerce": "E-commerce",

    "why.eyebrow": "Pourquoi travailler avec moi",
    "why.title": "Ce que vous obtenez",

    "about.eyebrow": "À propos",
    "about.title": "Moi, c'est MoDev",
    "about.p1":
      "Développeur et designer web indépendant. Je dessine des interfaces sobres et j'écris un code propre, parce qu'un bon site se joue d'abord dans les détails.",
    "about.p2":
      "Ce que j'aime, c'est le moment où une idée floue devient une interface claire et rapide. J'écoute, je cadre, puis je construis — et vous échangez directement avec moi à chaque étape.",
    "about.philosophy": "Ma philosophie",
    "about.philosophyValue": "Simplicité, clarté, performance",

    "contact.eyebrow": "Contact",
    "contact.title": "Démarrons votre projet",
    "contact.subtitle": "Choisissez le canal qui vous convient, je réponds rapidement.",
    "contact.whatsapp": "WhatsApp",
    "contact.email_label": "Email",
    "contact.available": "Disponible pour de nouveaux projets",

    "footer.tagline": "Développeur web freelance — des sites rapides, conçus sur mesure.",
    "footer.rights": "Tous droits réservés",
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
