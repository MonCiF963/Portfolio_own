import { useI18n, type Lang } from "@/lib/i18n";

const options: { code: Lang; label: string }[] = [
  { code: "ar", label: "AR" },
  { code: "fr", label: "FR" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div
      className="flex items-center rounded-sm border border-border p-0.5"
      role="group"
      aria-label="Language"
    >
      {options.map((o) => (
        <button
          key={o.code}
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={`rounded-[3px] px-2.5 py-1 font-mono text-[11px] font-semibold tracking-widest transition-colors ${
            lang === o.code
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}