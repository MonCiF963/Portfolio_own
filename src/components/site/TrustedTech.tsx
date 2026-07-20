import { useI18n } from "@/lib/i18n";

const stack = [
  "React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript",
  "Node.js", "Express", "Supabase", "PostgreSQL", "Vercel", "GitHub",
];

export function TrustedTech() {
  const { t, dir } = useI18n();
  const loop = [...stack, ...stack];
  return (
    <section className="relative border-y border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          {t("trusted.title")}
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className={`flex w-max gap-12 ${dir === "rtl" ? "animate-marquee-rtl" : "animate-marquee"}`}>
            {loop.map((n, i) => (
              <div
                key={i}
                className="glass flex h-14 items-center justify-center rounded-2xl px-8 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
