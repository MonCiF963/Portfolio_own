import { motion, useScroll, useSpring } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  const { dir } = useI18n();
  return (
    <motion.div
      style={{ scaleX, transformOrigin: dir === "rtl" ? "right" : "left" }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-blue-500 via-indigo-400 to-sky-400"
    />
  );
}
