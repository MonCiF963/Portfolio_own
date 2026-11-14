import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Scramble } from "./fx";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  const { lang } = useI18n();
  const [seen, setSeen] = useState(false);
  return (
    <motion.div
      onViewportEnter={() => setSeen(true)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-2xl ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 bg-acc-green" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-acc-green">
          {eyebrow}
        </span>
      </div>
      <h2 className="chrome-text mt-4 font-display text-3xl uppercase leading-[1.15] tracking-[-0.025em] text-balance md:text-[3.2rem]">
        {lang === "ar" ? title : <Scramble text={title} play={seen} />}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
}
