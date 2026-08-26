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

    "hero.badge": "تطوير ويب · تصميم · محتوى بصري",
    "hero.title.1": "مواقع حديثة",
    "hero.title.2": "تبني حضورك الرقمي",
    "hero.subtitle": "تصميم وتطوير مواقع سريعة ومتجاوبة، ومحتوى بصري يرافقها.",
    "hero.scroll": "تابع للأسفل",
    "hero.side.label": "مطوّر ويب مستقل",
    "hero.side.role": "تطوير مواقع · تصميم واجهات · مونتاج وجرافيك",

    "services.eyebrow": "الخدمات",
    "services.title": "ما أقدّمه",
    "services.primaryTag": "الخدمة الأساسية",
    "services.web": "تطوير مواقع",
    "services.web.d": "مواقع مبنية من الصفر، سريعة ومتجاوبة.",
    "services.uiux": "تصميم واجهات",
    "services.uiux.d": "واجهات واضحة تسهّل التنقّل.",
    "services.videodesign": "فيديو وجرافيك",
    "services.videodesign.d": "مونتاج فيديو وتصميم جرافيك للعلامات والمحتوى.",

    "skills.eyebrow": "الأدوات",
    "skills.title": "أعمل بهذه التقنيات",
    "skills.web": "تطوير الويب",
    "skills.video": "الفيديو والتصميم",

    "portfolio.eyebrow": "الأعمال",
    "portfolio.title": "مشاريع مختارة",
    "portfolio.subtitle": "نماذج تعكس أسلوبي في التصميم والتطوير.",
    "portfolio.filter.company": "شركات",
    "portfolio.filter.restaurant": "مطاعم",
    "portfolio.filter.doctor": "أطباء",
    "portfolio.filter.construction": "مقاولات",
    "portfolio.filter.realestate": "عقارات",
    "portfolio.filter.landing": "صفحات هبوط",
    "portfolio.filter.dashboard": "لوحات تحكم",
    "portfolio.filter.ecommerce": "متاجر",

    "about.eyebrow": "نبذة",
    "about.title": "منصف",
    "about.p1":
      "طالب إعلام آلي متخصّص في الأمن السيبراني، وأعمل في الوقت نفسه مطوّر ويب ومبدع رقمي مستقل.",
    "about.p2": "أهتمّ بالتفاصيل — المسافات، الخطوط، سرعة التحميل — وتتعامل معي مباشرة من الفكرة إلى الإطلاق.",
    "about.focus": "تركيزي",
    "about.focus1": "أداء وسرعة",
    "about.focus2": "تصميم نظيف",
    "about.focus3": "تجاوب كامل",

    "contact.eyebrow": "تواصل",
    "contact.title": "لنبدأ مشروعك",
    "contact.subtitle": "اختر القناة الأنسب لك.",
    "contact.whatsapp": "واتساب",
    "contact.email_label": "البريد الإلكتروني",
    "contact.available": "متاح لمشاريع جديدة",

    "footer.tagline": "مواقع سريعة ومصمّمة من الصفر.",
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

    "hero.badge": "Développement web · Design · Contenu visuel",
    "hero.title.1": "Des sites modernes",
    "hero.title.2": "qui installent votre présence",
    "hero.subtitle":
      "Conception et développement de sites rapides et responsives, avec le contenu visuel qui va avec.",
    "hero.scroll": "Défiler",
    "hero.side.label": "Développeur web freelance",
    "hero.side.role": "Développement web · UI/UX · Vidéo & graphisme",

    "services.eyebrow": "Services",
    "services.title": "Ce que je fais",
    "services.primaryTag": "Service principal",
    "services.web": "Développement web",
    "services.web.d": "Des sites sur mesure, rapides et responsives.",
    "services.uiux": "Design UI / UX",
    "services.uiux.d": "Des interfaces claires et lisibles.",
    "services.videodesign": "Vidéo & graphisme",
    "services.videodesign.d": "Montage vidéo et design graphique pour marques et contenus.",

    "skills.eyebrow": "Outils",
    "skills.title": "Ce avec quoi je travaille",
    "skills.web": "Développement web",
    "skills.video": "Vidéo & design",

    "portfolio.eyebrow": "Projets",
    "portfolio.title": "Projets sélectionnés",
    "portfolio.subtitle": "Un aperçu de mon approche du design et du code.",
    "portfolio.filter.company": "Entreprise",
    "portfolio.filter.restaurant": "Restaurant",
    "portfolio.filter.doctor": "Médecin",
    "portfolio.filter.construction": "BTP",
    "portfolio.filter.realestate": "Immobilier",
    "portfolio.filter.landing": "Landing Page",
    "portfolio.filter.dashboard": "Dashboard",
    "portfolio.filter.ecommerce": "E-commerce",

    "about.eyebrow": "À propos",
    "about.title": "Moncif",
    "about.p1":
      "Étudiant en informatique spécialisé en cybersécurité, et en parallèle développeur web et créateur digital freelance.",
    "about.p2": "Je soigne les détails — espacements, typographie, temps de chargement — et vous échangez directement avec moi, du concept à la mise en ligne.",
    "about.focus": "Mes priorités",
    "about.focus1": "Performance",
    "about.focus2": "Design propre",
    "about.focus3": "Responsive",

    "contact.eyebrow": "Contact",
    "contact.title": "Démarrons votre projet",
    "contact.subtitle": "Choisissez le canal qui vous convient.",
    "contact.whatsapp": "WhatsApp",
    "contact.email_label": "Email",
    "contact.available": "Disponible pour de nouveaux projets",

    "footer.tagline": "Des sites rapides, conçus sur mesure.",
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
