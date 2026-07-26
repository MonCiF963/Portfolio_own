import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-start">
        <div className="flex items-center gap-2.5">
          <span className="h-7 w-7 rounded-lg bg-brand-gradient" />
          <span className="font-display text-base font-bold tracking-tight">
            Mo<span className="text-primary">Dev</span>
          </span>
        </div>
        <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">{t("footer.tagline")}</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MoDev — {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}