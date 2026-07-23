import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

type Channel = {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  accent: string;
  external?: boolean;
};

export function Contact() {
  const { t } = useI18n();

  const channels: Channel[] = [
    { icon: MessageCircle, label: t("contact.whatsapp"), value: "+213 555 000 000", href: "https://wa.me/213555000000", accent: "from-emerald-500 to-teal-500", external: true },
    { icon: Mail, label: t("contact.email_label"), value: "hello@modev.dev", href: "mailto:hello@modev.dev", accent: "from-purple-500 via-blue-500 to-emerald-400" },
    { icon: Facebook, label: "Facebook", value: "@modev", href: "#", accent: "from-blue-500 to-emerald-500", external: true },
    { icon: Instagram, label: "Instagram", value: "@modev", href: "#", accent: "from-pink-500 via-rose-500 to-orange-500", external: true },
    { icon: Linkedin, label: "LinkedIn", value: "MoDev", href: "#", accent: "from-blue-500 to-purple-600", external: true },
    { icon: Github, label: "GitHub", value: "modev", href: "#", accent: "from-slate-500 to-slate-800", external: true },
    { icon: MapPin, label: t("contact.location"), value: "Algiers, Algeria", href: "#", accent: "from-indigo-500 to-violet-600" },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass-strong relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-2xl transition-opacity group-hover:bg-purple-500/25" />
              <div className="relative flex items-center gap-4">
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${c.accent} shadow-glow`}>
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="mt-0.5 truncate text-sm font-semibold">{c.value}</div>
                </div>
              </div>
              <ArrowUpRight className="relative h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}