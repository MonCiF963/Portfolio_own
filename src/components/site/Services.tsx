import { motion } from "framer-motion";
import {
  Building2, ShoppingBag, Rocket, LayoutDashboard,
  Palette, Smartphone, Gauge, Search,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const items = [
  {
    icon: Building2,
    title: { ar: "مواقع الشركات", fr: "Sites d'entreprise" },
    desc: {
      ar: "موقع تعريفي أنيق يقدّم نشاطك، خدماتك وفريقك بشكل واضح — لبناء ثقة الزوّار من أول زيارة.",
      fr: "Un site vitrine soigné qui présente votre activité, vos services et votre équipe avec clarté — pour inspirer confiance dès la première visite.",
    },
  },
  {
    icon: ShoppingBag,
    title: { ar: "المتاجر الإلكترونية", fr: "Boutiques en ligne" },
    desc: {
      ar: "متجر إلكتروني مصمّم لعرض منتجاتك بأناقة وتسهيل عملية الشراء على عملائك.",
      fr: "Une boutique en ligne pensée pour mettre vos produits en valeur et simplifier le parcours d'achat de vos clients.",
    },
  },
  {
    icon: Rocket,
    title: { ar: "صفحات الهبوط", fr: "Landing pages" },
    desc: {
      ar: "صفحة موجّهة لهدف واحد: تحويل الزوّار إلى عملاء محتملين، بأسلوب مقنع ورسالة واضحة.",
      fr: "Une page pensée pour un seul objectif : convertir vos visiteurs en prospects, avec un message clair et convaincant.",
    },
  },
  {
    icon: LayoutDashboard,
    title: { ar: "تطبيقات ويب مخصّصة", fr: "Applications web sur mesure" },
    desc: {
      ar: "تطبيقات داخلية أو لوحات تحكّم مصمّمة حسب حاجتك، لتُبسّط عملك وتُوفّر وقتك.",
      fr: "Applications internes ou tableaux de bord sur mesure, conçus pour simplifier votre activité et vous faire gagner du temps.",
    },
  },
  {
    icon: Palette,
    title: { ar: "تصميم واجهات UI/UX", fr: "Design UI / UX" },
    desc: {
      ar: "واجهات نظيفة وتجربة استخدام مدروسة، تعكس هوية علامتك وتخدم أهداف زوّارك.",
      fr: "Des interfaces épurées et une expérience utilisateur réfléchie, alignées sur votre identité et sur les besoins de vos visiteurs.",
    },
  },
  {
    icon: Smartphone,
    title: { ar: "مواقع متجاوبة", fr: "Sites responsives" },
    desc: {
      ar: "تجربة مثالية على الحاسوب والجوّال، لأن أغلب زوّارك اليوم يتصفّحون من هواتفهم.",
      fr: "Une expérience impeccable sur ordinateur et mobile — l'essentiel de vos visiteurs consulte désormais depuis un smartphone.",
    },
  },
  {
    icon: Gauge,
    title: { ar: "أداء وسرعة", fr: "Performance & vitesse" },
    desc: {
      ar: "مواقع سريعة التحميل مبنية بأفضل الممارسات، لأن السرعة اليوم جزء من تجربة العميل.",
      fr: "Des sites rapides à charger, construits avec les bonnes pratiques — la vitesse fait aujourd'hui partie de l'expérience client.",
    },
  },
  {
    icon: Search,
    title: { ar: "أساسيات SEO التقني", fr: "SEO technique" },
    desc: {
      ar: "بنية نظيفة، بيانات وصفية دقيقة وأداء عالٍ — قاعدة سليمة يبدأ منها ظهورك في محركات البحث.",
      fr: "Structure propre, balises soignées et performance solide — les fondations pour bien se positionner sur les moteurs de recherche.",
    },
  },
];

export function Services() {
  const { t, lang } = useI18n();
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} subtitle={t("services.subtitle")} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-purple-500/10 blur-2xl transition-opacity group-hover:bg-purple-500/25" />
              <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold">{s.title[lang]}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc[lang]}</p>
              <div className="relative mt-4 h-[2px] w-10 rounded-full bg-gradient-to-r from-purple-500 to-transparent transition-all duration-500 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
