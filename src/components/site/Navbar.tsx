import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

const links = [
  { id: "home", key: "nav.home" },
  { id: "work", key: "nav.portfolio" },
  { id: "services", key: "nav.services" },
  { id: "about", key: "nav.about" },
  { id: "contact", key: "nav.contact" },
];

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong flex items-center justify-between gap-3 rounded-3xl px-4 py-3">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-xl bg-brand-gradient" />
            <span className="font-display text-lg font-bold tracking-tight">
              Mo<span className="text-primary">Dev</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="rounded-full px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>

          {/* Language switcher stays visible on every breakpoint */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="hidden rounded-full bg-primary px-4 py-2 text-[13px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
            >
              {t("cta.contactMe")}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-xl border border-border text-foreground transition-colors hover:bg-white/5 md:hidden"
            >
              {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-strong mt-2 rounded-3xl p-3 md:hidden"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {t(l.key)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                {t("cta.contactMe")}
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}