import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

const links = [
  { id: "services", key: "nav.services" },
  { id: "work", key: "nav.portfolio" },
  { id: "about", key: "nav.about" },
  { id: "contact", key: "nav.contact" },
];

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "glass-strong border-border" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.5rem]">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="h-4 w-4 bg-brand-gradient" />
          <span className="font-display text-[17px] font-semibold tracking-[-0.02em]">
            MoCreat
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative py-1 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:scale-x-0 after:bg-accent-line after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="hidden rounded-sm bg-foreground px-4 py-2 text-[13px] font-semibold text-background transition-opacity hover:opacity-85 md:inline-flex"
          >
            {t("cta.contactMe")}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-8 w-8 place-items-center rounded-sm border border-border transition-colors hover:bg-white/5 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.25 }}
          className="glass-strong overflow-hidden border-t border-border md:hidden"
        >
          <div className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-sm font-medium text-muted-foreground last:border-0 hover:text-foreground"
              >
                {t(l.key)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-sm bg-foreground px-4 py-3 text-center text-sm font-semibold text-background"
            >
              {t("cta.contactMe")}
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}