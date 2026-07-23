import { Sparkles, MessageCircle, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const links = [
  { id: "home", key: "nav.home" },
  { id: "portfolio", key: "nav.portfolio" },
  { id: "services", key: "nav.services" },
  { id: "about", key: "nav.about" },
  { id: "pricing", key: "nav.pricing" },
  { id: "contact", key: "nav.contact" },
];

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="text-lg font-bold">Mo<span className="text-gradient">Dev</span></span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">{t("footer.quickLinks")}</div>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-muted-foreground hover:text-foreground">{t(l.key)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">{t("footer.follow")}</div>
            <div className="flex gap-2">
              {[MessageCircle, Facebook, Instagram, Linkedin, Github].map((I, i) => (
                <a key={i} href="#" className="glass grid h-10 w-10 place-items-center rounded-xl hover:bg-white/10">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} MoDev — {t("footer.rights")}</div>
          <div>Made with care in Algeria</div>
        </div>
      </div>
    </footer>
  );
}
