import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/213558619475"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="animate-pulse-ring fixed bottom-6 end-6 z-40 grid h-11 w-11 place-items-center rounded-sm bg-foreground text-background transition-opacity hover:opacity-85"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}