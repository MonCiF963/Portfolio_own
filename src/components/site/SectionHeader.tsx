import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "start",
  className = "",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`mb-10 max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-start"} ${className}`}
    >
      <div className={`flex items-center gap-2.5 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-6 bg-primary/70" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
}