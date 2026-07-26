import { motion } from "framer-motion";
import { Mail, MessageCircle, Facebook, Instagram, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

type Channel = {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

export function Contact() {
  const { t } = useI18n();

  const channels: Channel[] = [
    {
      icon: MessageCircle,
      label: t("contact.whatsapp"),
      value: "+213 558 619 475",
      href: "https://wa.me/213558619475",
      external: true,
      primary: true,
    },
    { icon: Mail, label: t("contact.email_label"), value: "hello@modev.dev", href: "mailto:hello@modev.dev" },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@bymo.dev",
      href: "https://www.instagram.com/bymo.dev/",
      external: true,
    },
    { icon: Facebook, label: "Facebook", value: "MoDev", href: "https://facebook.com/", external: true },
    { icon: Linkedin, label: "LinkedIn", value: "MoDev", href: "https://linkedin.com/", external: true },
    { icon: Github, label: "GitHub", value: "MonCiF963", href: "https://github.com/MonCiF963", external: true },
  ];

  return (
    <section id="contact" className="px-4 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={t("contact.eyebrow")}
            title={t("contact.title")}
            subtitle={t("contact.subtitle")}
            className="mb-0"
          />
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t("contact.available")}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {channels.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`tile group flex items-center justify-between gap-4 p-6 transition-all hover:-translate-y-0.5 ${
                c.primary ? "border-primary/25 hover:border-primary/40" : "hover:border-white/15"
              }`}
            >
              <div className="flex min-w-0 items-center gap-4">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                    c.primary ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
                  }`}
                >
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 truncate text-sm font-semibold" dir="ltr">
                    {c.value}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}