import { motion } from "framer-motion";
import { Code2, PenTool, Image as ImageIcon, Film, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const main = {
  title: { ar: "تطوير مواقع مخصّصة", fr: "Développement de sites sur mesure" },
  desc: {
    ar: "موقع مبني من الصفر حسب نشاطك: بنية نظيفة، تحميل سريع، تجاوب كامل، ومحتوى يسهل تحديثه لاحقاً.",
    fr: "Un site construit de zéro pour votre activité : structure propre, chargement rapide, responsive complet et contenu facile à faire évoluer.",
  },
  points: {
    ar: ["واجهات مبنية بلا قوالب", "أداء وسرعة تحميل", "تهيئة أساسية لمحركات البحث"],
    fr: ["Interfaces sans template", "Performance et vitesse", "Bases SEO propres"],
  },
  tags: ["React", "Next.js", "TypeScript", "Tailwind"],
};

const others = [
  {
    icon: PenTool,
    accent: "text-acc-blue",
    title: { ar: "تصميم UI / UX", fr: "Design UI / UX" },
    desc: {
      ar: "أرسم الواجهات قبل الكود، حتى تعرف تماماً كيف سيبدو موقعك وكيف يتنقّل فيه زوّارك.",
      fr: "Je dessine les écrans avant le code : vous voyez exactement le rendu et le parcours utilisateur.",
    },
  },
  {
    icon: ImageIcon,
    accent: "text-acc-purple",
    title: { ar: "تصميم جرافيك", fr: "Design graphique" },
    desc: {
      ar: "شعارات، هويات بصرية ومنشورات تُكمل حضور موقعك.",
      fr: "Logos, identités visuelles et visuels qui prolongent le site.",
    },
  },
  {
    icon: Film,
    accent: "text-acc-cyan",
    title: { ar: "مونتاج فيديو", fr: "Montage vidéo" },
    desc: {
      ar: "فيديوهات قصيرة ونظيفة لعرض منتجك أو خدماتك.",
      fr: "Vidéos courtes et nettes pour présenter un produit ou un service.",
    },
  },
];

export function Services() {
  const { t, lang } = useI18n();

  return (
    <section id="services" className="border-t border-border px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} className="mb-12" />

        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-white/[0.07] md:grid-cols-3">
          {/* Primary service — spans two columns */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-background p-8 transition-colors hover:bg-white/[0.02] md:col-span-2 md:p-10"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-accent-line" />
            <div className="flex items-center justify-between gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-sm bg-foreground text-background">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                {t("services.primaryTag")}
              </span>
            </div>
            <h3 className="mt-7 font-display text-2xl font-semibold tracking-[-0.02em] md:text-[1.75rem]">
              {main.title[lang]}
            </h3>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              {main.desc[lang]}
            </p>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-3">
              {main.points[lang].map((p) => (
                <li key={p} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-acc-emerald" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6">
              {main.tags.map((tag) => (
                <span key={tag} className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {tag}
                </span>
              ))}
              <a
                href="#contact"
                className="group/link ms-auto inline-flex items-center gap-2 text-[13px] font-semibold text-foreground"
              >
                {t("cta.quote")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1 rtl:rotate-180" />
              </a>
            </div>
          </motion.article>

          <div className="grid gap-px bg-white/[0.07]">
            <div className="flex items-center bg-background px-8 py-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                {t("services.secondary")}
              </span>
            </div>
            {others.map((s, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-1 items-start gap-4 bg-background p-8 transition-colors hover:bg-white/[0.02]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-border transition-colors group-hover:border-white/25">
                  <s.icon className={`h-4 w-4 ${s.accent}`} />
                </span>
                <div>
                  <h3 className="font-display text-[15px] font-semibold">{s.title[lang]}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.desc[lang]}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}