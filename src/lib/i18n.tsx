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

    "hero.badge": "استوديو تطوير وتصميم ويب",
    "hero.title": "مواقع إلكترونية تعكس جدية علامتك",
    "hero.subtitle":
      "نصمّم ونطوّر مواقع أنيقة وسريعة تمنح شركتك حضوراً رقمياً موثوقاً، وتحوّل الزوار إلى عملاء فعليين.",
    "hero.chip1": "تصميم مدروس",
    "hero.chip2": "أداء عالٍ",
    "hero.chip3": "SEO تقني",

    "trusted.title": "نعمل بتقنيات موثوقة يعتمدها الكبار",

    "services.eyebrow": "ما نقدّمه",
    "services.title": "خدمات ويب مصمّمة لتخدم أهدافك",
    "services.subtitle": "من الفكرة إلى الإطلاق، نتولّى الجوانب التصميمية والتقنية لنسلّمك منتجاً رقمياً جاهزاً للعمل.",

    "portfolio.eyebrow": "أعمالنا",
    "portfolio.title": "مختارات من مشاريعنا",
    "portfolio.subtitle": "نماذج من واجهات ومشاريع عملنا عليها، تعكس أسلوبنا في التصميم والتطوير.",
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
    "why.title": "لماذا يختارنا أصحاب الأعمال",
    "why.subtitle": "نتعامل مع كل مشروع بجدّية ومسؤولية، ونركّز على ما يُحدث فرقاً حقيقياً لعملك.",

    "process.eyebrow": "طريقة عملنا",
    "process.title": "منهجية واضحة تضمن نتائج موثوقة",
    "process.subtitle": "نتّبع مساراً منظّماً في كل مشروع، من أول لقاء إلى ما بعد الإطلاق، لتعرف تماماً أين يقف مشروعك في كل مرحلة.",

    "testimonials.eyebrow": "آراء العملاء",
    "testimonials.title": "يثقون بنا",

    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "إجابات عن ما يشغل عملاءنا عادةً",

    "about.eyebrow": "من نحن",
    "about.title": "شركاء تقنيّون لأصحاب الأعمال الجادّين",
    "about.p1":
      "نحن استوديو متخصّص في تصميم وتطوير الويب، نعمل مع أصحاب الأعمال والمشاريع الناشئة لبناء منصّات إلكترونية تعكس احترافية علامتهم وتخدم أهدافهم التجارية.",
    "about.p2":
      "فلسفتنا بسيطة: تصميم واضح، كود نظيف، وأداء عالٍ. نُصغي أولاً، نخطّط بعناية، ثم نُنفّذ بمعايير جودة لا نتساهل فيها — لأن الموقع الجيّد يُبنى بالتفاصيل، لا بالوعود.",

    "pricing.eyebrow": "باقاتنا",
    "pricing.title": "أسعار مرنة تتناسب مع حجم مشروعك",
    "pricing.subtitle": "كل مشروع مختلف، لذلك نُعدّ لك عرضاً مخصّصاً بعد فهم متطلباتك. الأسعار أدناه إرشادية وتبدأ من.",
    "pricing.startFrom": "تبدأ من",
    "pricing.onRequest": "حسب المشروع",
    "pricing.currency": "",
    "pricing.getStarted": "اطلب عرضاً مخصّصاً",
    "pricing.mostPopular": "الأكثر طلباً",

    "contact.eyebrow": "تواصل معنا",
    "contact.title": "لنتحدّث عن مشروعك",
    "contact.subtitle": "اختر القناة الأنسب لك، وسنعود إليك في أقرب وقت لمناقشة تفاصيل مشروعك.",
    "contact.whatsapp": "واتساب",
    "contact.email_label": "البريد الإلكتروني",
    "contact.location": "الموقع",
    "contact.reachOn": "تواصل عبر",

    "footer.tagline": "نصمّم ونطوّر مواقع تليق بجدّية أعمالك.",
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

    "hero.badge": "Studio de développement & design web",
    "hero.title": "Des sites web à la hauteur de votre marque",
    "hero.subtitle":
      "Nous concevons et développons des sites élégants, rapides et fiables qui donnent à votre entreprise la présence en ligne qu'elle mérite — et convertissent réellement vos visiteurs.",
    "hero.chip1": "Design réfléchi",
    "hero.chip2": "Performance",
    "hero.chip3": "SEO technique",

    "trusted.title": "Un socle technique éprouvé",

    "services.eyebrow": "Nos services",
    "services.title": "Un accompagnement web de bout en bout",
    "services.subtitle": "De l'idée initiale à la mise en ligne, nous prenons en charge le design et la partie technique pour vous livrer un produit prêt à travailler pour vous.",

    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Un aperçu de nos réalisations",
    "portfolio.subtitle": "Quelques projets qui illustrent notre approche du design, du code et de l'expérience utilisateur.",
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
    "why.title": "Ce qui fait la différence chez nous",
    "why.subtitle": "Nous prenons chaque projet au sérieux et nous concentrons sur ce qui a un vrai impact pour votre activité.",

    "process.eyebrow": "Notre méthodologie",
    "process.title": "Un processus clair, du premier échange à la mise en ligne",
    "process.subtitle": "Chaque projet suit une démarche structurée. Vous savez à tout moment où en est votre site et ce qui vient ensuite.",

    "testimonials.eyebrow": "Témoignages",
    "testimonials.title": "Ils nous font confiance",

    "faq.eyebrow": "FAQ",
    "faq.title": "Les questions qu'on nous pose souvent",

    "about.eyebrow": "À propos",
    "about.title": "Le partenaire technique des entreprises exigeantes",
    "about.p1":
      "Nous sommes un studio spécialisé en conception et développement web. Nous accompagnons entrepreneurs, PME et projets ambitieux dans la création de plateformes en ligne qui reflètent le sérieux de leur marque.",
    "about.p2":
      "Notre approche est simple : un design clair, un code propre, des performances soignées. Nous écoutons, nous cadrons, puis nous livrons — avec une exigence de qualité qui ne se négocie pas. Un bon site se construit dans les détails, pas dans les promesses.",

    "pricing.eyebrow": "Tarifs",
    "pricing.title": "Des offres pensées selon la taille de votre projet",
    "pricing.subtitle": "Chaque projet est unique. Les tarifs ci-dessous sont indicatifs — nous établissons un devis personnalisé après avoir cerné vos besoins.",
    "pricing.startFrom": "À partir de",
    "pricing.onRequest": "Sur devis",
    "pricing.currency": "",
    "pricing.getStarted": "Demander un devis",
    "pricing.mostPopular": "Le plus demandé",

    "contact.eyebrow": "Contact",
    "contact.title": "Discutons de votre projet",
    "contact.subtitle": "Choisissez le canal qui vous convient le mieux. Nous revenons vers vous rapidement pour échanger sur vos besoins.",
    "contact.whatsapp": "WhatsApp",
    "contact.email_label": "Email",
    "contact.location": "Localisation",
    "contact.reachOn": "Contactez-nous sur",

    "footer.tagline": "Nous concevons des sites web à la hauteur de votre entreprise.",
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
