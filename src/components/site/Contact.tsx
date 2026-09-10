import { motion } from "framer-motion";
import { Mail, MessageCircle, Facebook, Instagram, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();

  const channels = [
    {
      icon: MessageCircle,
      label: t("contact.whatsapp"),
      value: "+213 558 619 475",
      href: "https://wa.me/213558619475",
      accent: "text-acc-emerald",
    },
    {
      icon: Mail,
      label: t("contact.email_label"),
      value: "hello@mocreat.dev",
      href: "mailto:hello@mocreat.dev",
      accent: "text-acc-blue",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@mocreat",
      href: "https://www.instagram.com/bymo.dev/",
      accent: "text-acc-purple",
    },
    { icon: Facebook, label: "Facebook", value: "MoCreat", href: "https://facebook.com/", accent: "text-acc-blue" },
    { icon: Linkedin, label: "LinkedIn", value: "MoCreat", href: "https://linkedin.com/", accent: "text-acc-cyan" },
    {
      icon: Github,
      label: "GitHub",
      value: "MonCiF963",
      href: "https://github.com/MonCiF963",
      accent: "text-foreground",
    },
  ];

  return (
    <section id="contact" className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={t("contact.eyebrow")}
            title={t("contact.title")}
            subtitle={t("contact.subtitle")}
          />
          <div className="inline-flex items-center gap-2.5 self-start rounded-sm border border-acc-green/30 bg-acc-green/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-acc-green md:self-end">
            <span className="h-1.5 w-1.5 bg-acc-green" />
            {t("contact.available")}
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex items-center justify-between gap-4 bg-background p-7 transition-colors hover:bg-white/[0.03]"
            >
              <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-acc-green transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex min-w-0 items-center gap-4">
                <c.icon className={`h-5 w-5 shrink-0 ${c.accent}`} />
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1.5 truncate text-sm font-semibold" dir="ltr">
                    {c.value}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acc-green" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}