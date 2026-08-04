import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 start-6 z-40 grid h-10 w-10 place-items-center rounded-sm border border-border bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:border-white/25 hover:text-foreground"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}