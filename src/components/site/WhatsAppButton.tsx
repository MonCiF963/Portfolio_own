import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/213558619475"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 end-6 z-40 grid h-13 w-13 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
