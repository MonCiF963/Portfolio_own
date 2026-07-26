import { useI18n, type Lang } from "@/lib/i18n";

const options: { code: Lang; label: string }[] = [
  { code: "ar", label: "AR" },
  { code: "fr", label: "FR" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div
      className="flex items-center rounded-full border border-border bg-background/60 p-1"
      role="group"
      aria-label="Language"
    >
      {options.map((o) => (
        <button
          key={o.code}
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wide transition-colors ${
            lang === o.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}