import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/213558619475"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 end-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-glow transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full bg-green-400/60 blur-xl -z-10 animate-pulse" />
    </a>
  );
}
