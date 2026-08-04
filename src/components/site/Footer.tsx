import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-start">
        <div className="flex items-center gap-2.5">
          <span className="h-3.5 w-3.5 bg-brand-gradient" />
          <span className="font-display text-[15px] font-semibold tracking-[-0.02em]">MoCreat</span>
        </div>
        <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">{t("footer.tagline")}</p>
        <p className="font-mono text-[11px] tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} MoCreat — {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}