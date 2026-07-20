import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const faqs = [
  {
    q: { ar: "كم يستغرق تنفيذ الموقع؟", fr: "Combien de temps prend la réalisation ?" },
    a: { ar: "بين أسبوع و4 أسابيع حسب حجم المشروع ومتطلباته.", fr: "Entre 1 et 4 semaines selon la portée du projet." },
  },
  {
    q: { ar: "هل أحصل على تصميم مخصص؟", fr: "Le design est-il sur mesure ?" },
    a: { ar: "نعم، كل موقع نصممه من الصفر ليعكس هوية علامتك التجارية.", fr: "Oui, chaque site est conçu à partir de zéro pour refléter votre marque." },
  },
  {
    q: { ar: "هل الموقع سيكون متجاوباً مع الهواتف؟", fr: "Le site sera-t-il responsive ?" },
    a: { ar: "بالتأكيد. جميع مواقعنا تعمل بشكل مثالي على كل الأجهزة.", fr: "Absolument. Tous nos sites fonctionnent parfaitement sur tout appareil." },
  },
  {
    q: { ar: "هل تقدمون خدمة الصيانة بعد الإطلاق؟", fr: "Proposez-vous la maintenance après lancement ?" },
    a: { ar: "نعم، نوفر باقات صيانة شهرية اختيارية.", fr: "Oui, avec des forfaits de maintenance mensuels optionnels." },
  },
  {
    q: { ar: "هل الموقع محسّن لمحركات البحث؟", fr: "Le site est-il optimisé SEO ?" },
    a: { ar: "نعم، نطبق أفضل ممارسات SEO التقنية في كل مشروع.", fr: "Oui, nous appliquons les meilleures pratiques SEO techniques." },
  },
  {
    q: { ar: "كيف تتم عملية الدفع؟", fr: "Comment se déroule le paiement ?" },
    a: { ar: "دفعة أولى عند البدء، ودفعة نهائية عند التسليم.", fr: "Un acompte au démarrage, le solde à la livraison." },
  },
];

export function FAQ() {
  const { t, lang } = useI18n();
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-2xl border-0 px-5 [&>h3]:m-0"
            >
              <AccordionTrigger className="py-5 text-start text-base font-semibold hover:no-underline">
                {f.q[lang]}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a[lang]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
