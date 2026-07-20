import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const testimonials = [
  {
    name: { ar: "أمين بلقاسم", fr: "Amine Belkacem" },
    business: { ar: "مطعم زيتون", fr: "Restaurant Olive" },
    photo: "https://i.pravatar.cc/128?img=12",
    review: {
      ar: "عمل احترافي جداً. الموقع سريع، جميل، وساعدنا فعلاً في زيادة الحجوزات.",
      fr: "Travail extrêmement professionnel. Le site est rapide, élégant et nous a apporté beaucoup de réservations.",
    },
  },
  {
    name: { ar: "الدكتورة ياسمين", fr: "Dr. Yasmine" },
    business: { ar: "عيادة طبية", fr: "Cabinet médical" },
    photo: "https://i.pravatar.cc/128?img=47",
    review: {
      ar: "التعاون كان سلساً من البداية للنهاية. النتيجة تجاوزت توقعاتي.",
      fr: "Une collaboration fluide du début à la fin. Le résultat a dépassé mes attentes.",
    },
  },
  {
    name: { ar: "سفيان حداد", fr: "Sofiane Haddad" },
    business: { ar: "شركة عقارية", fr: "Agence immobilière" },
    photo: "https://i.pravatar.cc/128?img=33",
    review: {
      ar: "أفضل قرار اتخذته لعملي. الموقع يبدو كوكالة عالمية.",
      fr: "La meilleure décision pour mon activité. Un site digne d'une agence internationale.",
    },
  },
];

export function Testimonials() {
  const { t, lang, dir } = useI18n();
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const c = testimonials[i];

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeader eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} />
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="glass-strong relative rounded-3xl p-8 md:p-12 shadow-glow"
            >
              <Quote className="absolute end-6 top-6 h-10 w-10 text-blue-500/25" />
              <div className="flex flex-col items-center text-center">
                <img
                  src={c.photo}
                  alt={c.name[lang]}
                  className="h-20 w-20 rounded-full ring-4 ring-blue-500/30"
                />
                <div className="mt-4 flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
                  "{c.review[lang]}"
                </p>
                <div className="mt-6">
                  <div className="font-semibold">{c.name[lang]}</div>
                  <div className="text-sm text-muted-foreground">{c.business[lang]}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} className="glass grid h-10 w-10 place-items-center rounded-full hover:bg-white/10">
              {dir === "rtl" ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${
                    k === i ? "w-8 bg-gradient-to-r from-blue-500 to-indigo-500" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="glass grid h-10 w-10 place-items-center rounded-full hover:bg-white/10">
              {dir === "rtl" ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
