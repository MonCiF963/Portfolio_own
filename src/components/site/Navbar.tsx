import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

const links = [
  { id: "home", key: "nav.home" },
  { id: "portfolio", key: "nav.portfolio" },
  { id: "services", key: "nav.services" },
  { id: "about", key: "nav.about" },
  { id: "pricing", key: "nav.pricing" },
  { id: "faq", key: "nav.faq" },
  { id: "contact", key: "nav.contact" },
];

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass-strong shadow-glow" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 shadow-glow">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight">Nova<span className="text-gradient">.dev</span></span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block"><LanguageSwitcher /></div>
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] md:inline-flex"
            >
              {t("cta.quote")}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="glass grid h-10 w-10 place-items-center rounded-xl lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong mt-2 rounded-2xl p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {t(l.key)}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between">
                <LanguageSwitcher />
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  {t("cta.quote")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
