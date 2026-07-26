import { motion } from "framer-motion";
import { Code2, Rocket, PenTool, Image as ImageIcon, Film } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const primary = [
  {
    icon: Code2,
    accent: "primary" as const,
    title: { ar: "تطوير المواقع", fr: "Développement de sites" },
    desc: {
      ar: "موقع مبني من الصفر حسب نشاطك: بنية نظيفة، تحميل سريع، وسهولة تحديث المحتوى لاحقاً.",
      fr: "Un site construit de zéro pour votre activité : structure propre, chargement rapide et contenu facile à faire évoluer.",
    },
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    icon: Rocket,
    accent: "accent" as const,
    title: { ar: "صفحات الهبوط", fr: "Landing pages" },
    desc: {
      ar: "صفحة واحدة بهدف واحد: رسالة واضحة ومسار مباشر يحوّل الزائر إلى عميل محتمل.",
      fr: "Une page, un objectif : un message clair et un parcours direct qui transforme le visiteur en contact.",
    },
    tags: ["Copy", "Conversion", "SEO"],
  },
  {
    icon: PenTool,
    accent: "muted" as const,
    title: { ar: "تصميم UI / UX", fr: "Design UI / UX" },
    desc: {
      ar: "أرسم الواجهات قبل كتابة الكود، حتى تعرف بالضبط كيف سيبدو موقعك وكيف سيتنقّل زوّارك فيه.",
      fr: "Je dessine les écrans avant d'écrire le code : vous voyez exactement à quoi ressemblera le site et comment on y navigue.",
    },
    tags: ["Figma", "Wireframes", "Design system"],
  },
];

const secondary = [
  {
    icon: ImageIcon,
    title: { ar: "تصميم جرافيك", fr: "Design graphique" },
    desc: { ar: "شعارات وهويات ومنشورات تُكمل موقعك.", fr: "Logos, identités et visuels qui accompagnent le site." },
  },
  {
    icon: Film,
    title: { ar: "مونتاج فيديو", fr: "Montage vidéo" },
    desc: { ar: "فيديوهات قصيرة لعرض منتجك أو خدماتك.", fr: "Vidéos courtes pour présenter un produit ou un service." },
  },
];

const accentClass = {
  primary: "bg-primary text-primary-foreground shadow-glow",
  accent: "bg-accent text-accent-foreground",
  muted: "bg-white/5 text-foreground",
};

export function Services() {
  const { t, lang } = useI18n();
  return (
    <section id="services" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} />

        <div className="grid gap-4 md:grid-cols-12">
          {primary.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="tile group p-8 transition-colors hover:border-primary/25 md:col-span-4"
            >
              <div className={`grid h-12 w-12 place-items-center rounded-2xl ${accentClass[s.accent]}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title[lang]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc[lang]}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="tile flex flex-col gap-6 p-8 md:col-span-12 md:flex-row md:items-center md:justify-between"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {t("services.secondary")}
            </span>
            <div className="grid flex-1 gap-6 sm:grid-cols-2 md:max-w-2xl">
              {secondary.map((s, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border">
                    <s.icon className="h-4 w-4 text-muted-foreground" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{s.title[lang]}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}