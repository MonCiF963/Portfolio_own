import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ar" | "fr";

type Dict = Record<string, string | string[] | Record<string, string>>;

const translations: Record<Lang, Dict> = {
  ar: {
    "nav.home": "الرئيسية",
    "nav.portfolio": "أعمالنا",
    "nav.services": "خدماتنا",
    "nav.about": "من نحن",
    "nav.pricing": "الأسعار",
    "nav.faq": "الأسئلة",
    "nav.contact": "تواصل",
    "cta.quote": "اطلب عرض سعر",
    "cta.viewWork": "شاهد أعمالنا",

    "hero.badge": "استوديو تصميم وتطوير الويب",
    "hero.title": "نحوّل أفكارك إلى مواقع إلكترونية احترافية",
    "hero.subtitle":
      "نصمم ونطور مواقع إلكترونية حديثة وسريعة تساعد الشركات وأصحاب الأعمال على بناء حضور احترافي وتحقيق المزيد من العملاء.",
    "hero.chip1": "تصميم مخصص",
    "hero.chip2": "سرعة عالية",
    "hero.chip3": "SEO",

    "trusted.title": "نبني بأحدث التقنيات",

    "services.eyebrow": "خدماتنا",
    "services.title": "حلول رقمية متكاملة لنمو أعمالك",
    "services.subtitle": "نقدم مجموعة كاملة من خدمات تصميم وتطوير الويب المصممة لتحويل الزوار إلى عملاء.",

    "portfolio.eyebrow": "معرض الأعمال",
    "portfolio.title": "مشاريع مختارة",
    "portfolio.subtitle": "أعمال أنجزناها لعملاء في قطاعات مختلفة، بتصاميم فريدة ونتائج ملموسة.",
    "portfolio.viewLive": "عرض مباشر",
    "portfolio.viewCode": "الكود المصدري",
    "portfolio.filter.all": "الكل",
    "portfolio.filter.company": "شركات",
    "portfolio.filter.restaurant": "مطاعم",
    "portfolio.filter.doctor": "أطباء",
    "portfolio.filter.construction": "مقاولات",
    "portfolio.filter.realestate": "عقارات",
    "portfolio.filter.landing": "صفحات هبوط",
    "portfolio.filter.dashboard": "لوحات تحكم",
    "portfolio.filter.ecommerce": "متاجر",

    "why.eyebrow": "لماذا نحن",
    "why.title": "ما يميّز عملنا فعلاً",
    "why.subtitle": "لا نبيع أرقاماً مبالغاً بها. نركّز على ما يهم عملاءنا حقاً.",

    "process.eyebrow": "منهجية العمل",
    "process.title": "من الفكرة إلى الإطلاق",
    "process.subtitle": "عملية واضحة، مراحل شفافة، ونتائج نفخر بها.",

    "testimonials.eyebrow": "آراء العملاء",
    "testimonials.title": "يثقون بنا",

    "faq.eyebrow": "الأسئلة الشائعة",
    "faq.title": "كل ما تحتاج معرفته",

    "about.eyebrow": "من نحن",
    "about.title": "استوديو رقمي يركّز على النتائج",
    "about.p1":
      "نحن فريق صغير مهووس بالتفاصيل، نبني مواقع سريعة وحديثة وقابلة للتطوير تساعد أصحاب الأعمال على النمو عبر الإنترنت.",
    "about.p2":
      "نؤمن بأن الموقع الجيد ليس مجرد واجهة جميلة، بل أداة تسويقية قوية تحوّل الزوار إلى عملاء دائمين.",

    "pricing.eyebrow": "الأسعار",
    "pricing.title": "خطط تناسب مشروعك",
    "pricing.subtitle": "الأسعار تبدأ من، وتُخصَّص بعد فهم متطلبات مشروعك بدقة.",
    "pricing.startFrom": "يبدأ من",
    "pricing.currency": "د.ج",
    "pricing.getStarted": "ابدأ الآن",
    "pricing.mostPopular": "الأكثر طلباً",

    "contact.eyebrow": "تواصل معنا",
    "contact.title": "لنبنِ شيئاً استثنائياً معاً",
    "contact.subtitle": "أخبرنا عن مشروعك وسنعود إليك خلال 24 ساعة بعرض مخصص.",
    "contact.name": "الاسم الكامل",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.subject": "نوع المشروع",
    "contact.message": "تفاصيل المشروع",
    "contact.send": "إرسال الطلب",
    "contact.sent": "تم إرسال طلبك بنجاح!",
    "contact.whatsapp": "واتساب",
    "contact.email_label": "البريد",
    "contact.location": "الموقع",

    "footer.tagline": "نصمم ونطور مواقع إلكترونية تحقق نتائج.",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.quickLinks": "روابط سريعة",
    "footer.follow": "تابعنا",
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
    "cta.viewWork": "Voir nos projets",

    "hero.badge": "Studio de design & développement web",
    "hero.title": "Nous transformons vos idées en sites web professionnels",
    "hero.subtitle":
      "Nous concevons et développons des sites web modernes et rapides qui aident les entreprises à bâtir une présence professionnelle et à attirer plus de clients.",
    "hero.chip1": "Design sur mesure",
    "hero.chip2": "Haute performance",
    "hero.chip3": "SEO",

    "trusted.title": "Construits avec les meilleures technologies",

    "services.eyebrow": "Nos services",
    "services.title": "Des solutions digitales complètes",
    "services.subtitle": "Une gamme complète de services de design et développement pour convertir vos visiteurs.",

    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Projets sélectionnés",
    "portfolio.subtitle": "Des réalisations pour des clients dans différents secteurs, avec des designs uniques.",
    "portfolio.viewLive": "Voir en ligne",
    "portfolio.viewCode": "Code source",
    "portfolio.filter.all": "Tous",
    "portfolio.filter.company": "Entreprise",
    "portfolio.filter.restaurant": "Restaurant",
    "portfolio.filter.doctor": "Médecin",
    "portfolio.filter.construction": "BTP",
    "portfolio.filter.realestate": "Immobilier",
    "portfolio.filter.landing": "Landing Page",
    "portfolio.filter.dashboard": "Dashboard",
    "portfolio.filter.ecommerce": "E-commerce",

    "why.eyebrow": "Pourquoi nous",
    "why.title": "Ce qui rend notre travail différent",
    "why.subtitle": "Pas de chiffres exagérés. Uniquement ce qui compte vraiment pour nos clients.",

    "process.eyebrow": "Notre méthode",
    "process.title": "De l'idée au lancement",
    "process.subtitle": "Un processus clair, des étapes transparentes, des résultats dont nous sommes fiers.",

    "testimonials.eyebrow": "Témoignages",
    "testimonials.title": "Ils nous font confiance",

    "faq.eyebrow": "FAQ",
    "faq.title": "Tout ce que vous devez savoir",

    "about.eyebrow": "À propos",
    "about.title": "Un studio digital orienté résultats",
    "about.p1":
      "Une petite équipe passionnée par le détail, qui construit des sites rapides, modernes et évolutifs pour aider les entreprises à grandir en ligne.",
    "about.p2":
      "Un bon site n'est pas qu'une belle interface : c'est un outil marketing puissant qui transforme les visiteurs en clients fidèles.",

    "pricing.eyebrow": "Tarifs",
    "pricing.title": "Des offres adaptées à votre projet",
    "pricing.subtitle": "Les prix indiqués sont un point de départ, personnalisés selon vos besoins.",
    "pricing.startFrom": "À partir de",
    "pricing.currency": "DA",
    "pricing.getStarted": "Commencer",
    "pricing.mostPopular": "Le plus demandé",

    "contact.eyebrow": "Contact",
    "contact.title": "Construisons quelque chose d'exceptionnel",
    "contact.subtitle": "Parlez-nous de votre projet et nous reviendrons vers vous sous 24 heures.",
    "contact.name": "Nom complet",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.subject": "Type de projet",
    "contact.message": "Détails du projet",
    "contact.send": "Envoyer la demande",
    "contact.sent": "Votre demande a bien été envoyée !",
    "contact.whatsapp": "WhatsApp",
    "contact.email_label": "Email",
    "contact.location": "Localisation",

    "footer.tagline": "Nous concevons des sites web qui donnent des résultats.",
    "footer.rights": "Tous droits réservés",
    "footer.quickLinks": "Liens rapides",
    "footer.follow": "Suivez-nous",
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
