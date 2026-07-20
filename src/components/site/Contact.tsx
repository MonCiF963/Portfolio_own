import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send, MessageCircle, Github, Instagram, Facebook, Linkedin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export function Contact() {
  const { t } = useI18n();
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    (e.target as HTMLFormElement).reset();
    toast.success(t("contact.sent"));
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} subtitle={t("contact.subtitle")} />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong flex flex-col justify-between rounded-3xl p-8"
          >
            <div className="space-y-6">
              <ContactRow icon={MessageCircle} label={t("contact.whatsapp")} value="+213 555 000 000" />
              <ContactRow icon={Mail} label={t("contact.email_label")} value="hello@nova.dev" />
              <ContactRow icon={Phone} label="Phone" value="+213 555 000 000" />
              <ContactRow icon={MapPin} label={t("contact.location")} value="Algiers, Algeria" />
            </div>
            <div className="mt-8">
              <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Social</div>
              <div className="flex gap-2">
                {[MessageCircle, Facebook, Instagram, Linkedin, Github].map((I, i) => (
                  <a key={i} href="#" className="glass grid h-10 w-10 place-items-center rounded-xl hover:bg-white/10">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="glass-strong rounded-3xl p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label={t("contact.name")} />
              <Field name="email" type="email" label={t("contact.email")} />
              <Field name="phone" label={t("contact.phone")} />
              <Field name="subject" label={t("contact.subject")} />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-500/60 focus:bg-white/10"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              <Send className="h-4 w-4" />
              {sending ? "..." : t("contact.send")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 shadow-glow">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-500/60 focus:bg-white/10"
      />
    </div>
  );
}
