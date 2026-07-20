import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 start-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-white shadow-glow transition-transform hover:scale-110"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
