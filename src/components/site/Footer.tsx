import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="px-4 pb-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-[1.5rem] border border-white/[0.07] bg-card/30 px-8 py-8 text-center md:flex-row md:text-start">
        <div className="flex items-center gap-2.5">
          <span className="h-3.5 w-3.5 bg-acc-green" />
          <span className="font-display text-[15px] uppercase tracking-[-0.01em]">MoCreat</span>
        </div>
        <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">{t("footer.tagline")}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} MoCreat — {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
