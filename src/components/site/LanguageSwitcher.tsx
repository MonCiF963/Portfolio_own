import { useI18n, type Lang } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const options: { code: Lang; label: string }[] = [
    { code: "ar", label: "AR" },
    { code: "fr", label: "FR" },
  ];
  return (
    <div className="glass inline-flex items-center rounded-full p-1 text-xs font-medium">
      <Languages className="mx-2 h-3.5 w-3.5 text-muted-foreground" />
      {options.map((o) => (
        <button
          key={o.code}
          onClick={() => setLang(o.code)}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            lang === o.code
              ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-glow"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
