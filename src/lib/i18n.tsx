import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ar" | "fr";

type Dict = Record<string, string | string[] | Record<string, string>>;

const translations: Record<Lang, Dict> = {
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.portfolio": "الأعمال",
    "nav.about": "نبذة",
    "nav.contact": "تواصل",
    "cta.quote": "ابدأ مشروعك",
    "cta.viewWork": "شاهد الأعمال",
    "cta.contactMe": "تواصل معي",
    "cta.demo": "عرض الموقع",

    "hero.badge": "تطوير ويب · تصميم واجهات · محتوى بصري",
    "hero.title.1": "مواقع حديثة",
    "hero.title.2": "تبني حضورك الرقمي",
    "hero.subtitle":
      "أبني مواقع سريعة ومتجاوبة من الصفر، وأمنح نشاطك حضوراً واضحاً على الإنترنت — تصميم دقيق، كود نظيف، ونتائج تُقنع الزائر.",
    "hero.scroll": "تابع للأسفل",

    "services.eyebrow": "الخدمات",
    "services.title": "ما أقدّمه",
    "services.primaryTag": "الخدمة الأساسية",
    "services.secondary": "خدمات إبداعية مكمّلة",

    "portfolio.eyebrow": "الأعمال",
    "portfolio.title": "مشاريع مختارة",
    "portfolio.subtitle": "نماذج تعكس أسلوبي في التصميم والتطوير.",
    "portfolio.tech": "التقنيات",
    "portfolio.filter.all": "الكل",
    "portfolio.filter.company": "شركات",
    "portfolio.filter.restaurant": "مطاعم",
    "portfolio.filter.doctor": "أطباء",
    "portfolio.filter.construction": "مقاولات",
    "portfolio.filter.realestate": "عقارات",
    "portfolio.filter.landing": "صفحات هبوط",
    "portfolio.filter.dashboard": "لوحات تحكم",
    "portfolio.filter.ecommerce": "متاجر",

    "about.eyebrow": "نبذة عني",
    "about.title": "طريقتي في العمل",
    "about.p1":
      "أعمل على التفاصيل الصغيرة: المسافات، الخطوط، سرعة التحميل، وسلوك الواجهة على كل شاشة. الموقع الجيّد يُبنى هناك.",
    "about.p2":
      "أُصغي أولاً، أخطّط، ثم أُنفّذ — وأنت تتعامل معي مباشرة من الفكرة إلى الإطلاق، بدون وسطاء ولا قوالب جاهزة.",
    "about.philosophy": "المبدأ",
    "about.philosophyValue": "بساطة، وضوح، أداء",
    "about.stack": "الأدوات",

    "contact.eyebrow": "تواصل",
    "contact.title": "لنبدأ مشروعك",
    "contact.subtitle": "اختر القناة الأنسب لك وسأعود إليك في أقرب وقت.",
    "contact.whatsapp": "واتساب",
    "contact.email_label": "البريد الإلكتروني",
    "contact.available": "متاح لمشاريع جديدة",

    "footer.tagline": "مواقع سريعة ومصمّمة من الصفر لأصحاب الأنشطة والعلامات.",
    "footer.rights": "جميع الحقوق محفوظة",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.portfolio": "Projets",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "cta.quote": "Démarrer un projet",
    "cta.viewWork": "Voir les projets",
    "cta.contactMe": "Me contacter",
    "cta.demo": "Voir la démo",

    "hero.badge": "Développement web · UI/UX · Contenu visuel",
    "hero.title.1": "Des sites modernes",
    "hero.title.2": "qui installent votre présence",
    "hero.subtitle":
      "Je construis des sites rapides et responsives, entièrement sur mesure, pour donner à votre activité une présence en ligne claire et crédible.",
    "hero.scroll": "Défiler",

    "services.eyebrow": "Services",
    "services.title": "Ce que je fais",
    "services.primaryTag": "Service principal",
    "services.secondary": "Services créatifs complémentaires",

    "portfolio.eyebrow": "Projets",
    "portfolio.title": "Projets sélectionnés",
    "portfolio.subtitle": "Un aperçu de mon approche du design et du code.",
    "portfolio.tech": "Technologies",
    "portfolio.filter.all": "Tous",
    "portfolio.filter.company": "Entreprise",
    "portfolio.filter.restaurant": "Restaurant",
    "portfolio.filter.doctor": "Médecin",
    "portfolio.filter.construction": "BTP",
    "portfolio.filter.realestate": "Immobilier",
    "portfolio.filter.landing": "Landing Page",
    "portfolio.filter.dashboard": "Dashboard",
    "portfolio.filter.ecommerce": "E-commerce",

    "about.eyebrow": "À propos",
    "about.title": "Ma façon de travailler",
    "about.p1":
      "Je travaille les détails : espacements, typographie, temps de chargement, comportement de l'interface sur chaque écran. Un bon site se joue là.",
    "about.p2":
      "J'écoute, je cadre, puis je construis — et vous échangez directement avec moi, du concept à la mise en ligne. Sans intermédiaire, sans template.",
    "about.philosophy": "Principe",
    "about.philosophyValue": "Simplicité, clarté, performance",
    "about.stack": "Outils",

    "contact.eyebrow": "Contact",
    "contact.title": "Démarrons votre projet",
    "contact.subtitle": "Choisissez le canal qui vous convient, je réponds rapidement.",
    "contact.whatsapp": "WhatsApp",
    "contact.email_label": "Email",
    "contact.available": "Disponible pour de nouveaux projets",

    "footer.tagline": "Des sites rapides, conçus sur mesure pour les marques et les indépendants.",
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
