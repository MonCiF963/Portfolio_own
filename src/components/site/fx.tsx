import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";
const reduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Decrypt-style reveal: random glyphs resolve left → right into the real text. */
export function Scramble({
  text,
  play = true,
  delay = 0,
  className = "",
}: {
  text: string;
  play?: boolean;
  delay?: number;
  className?: string;
}) {
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!play || reduced()) return setOut(text);
    let raf = 0;
    const start = performance.now() + delay;
    const dur = 700 + text.length * 26;
    const tick = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - start) / dur));
      const done = Math.floor(p * text.length);
      setOut(
        text
          .split("")
          .map((c, i) => (c === " " || i < done ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
          .join(""),
      );
      raf = p < 1 ? requestAnimationFrame(tick) : (setOut(text), 0);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, play, delay]);
  return (
    <span className={className} aria-label={text}>
      {out}
    </span>
  );
}

/** Holographic foil card: 3D tilt + glare + a rainbow sheen that follows the pointer. */
export function Tilt({ children, className = "", max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const [hot, setHot] = useState(false);
  const rx = useSpring(0, { stiffness: 170, damping: 16 });
  const ry = useSpring(0, { stiffness: 170, damping: 16 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const on = useSpring(0, { stiffness: 120, damping: 20 });
  const glare = useMotionTemplate`radial-gradient(360px circle at ${gx}% ${gy}%, rgba(255,255,255,0.28), transparent 55%)`;
  const foil = useMotionTemplate`conic-gradient(from ${useTransform(gx, (v) => v * 3.6)}deg at ${gx}% ${gy}%, #ff7ad9, #ffd27a, #7affd9, #7aa8ff, #d97aff, #ff7ad9)`;

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set((0.5 - py) * max * 2);
    gx.set(px * 100);
    gy.set(py * 100);
    on.set(1);
    if (!hot) setHot(true);
  };
  const leave = () => {
    rx.set(0);
    ry.set(0);
    on.set(0);
    setTimeout(() => setHot(false), 450);
  };

  return (
    <motion.div
      onPointerMove={move}
      onPointerLeave={leave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`relative h-full ${className}`}
    >
      {children}
      {hot && (
        <>
      <motion.div
        aria-hidden
        style={{ background: foil, opacity: useTransform(on, (v) => v * 0.22) }}
        className="pointer-events-none absolute inset-0 rounded-[1.5rem] mix-blend-color-dodge"
      />
      <motion.div
        aria-hidden
        style={{ background: glare, opacity: on }}
        className="pointer-events-none absolute inset-0 rounded-[1.5rem] mix-blend-overlay"
      />
        </>
      )}
    </motion.div>
  );
}

/** Pulls its child toward the pointer, springs back on leave. */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const x = useSpring(0, { stiffness: 220, damping: 15 });
  const y = useSpring(0, { stiffness: 220, damping: 15 });
  return (
    <motion.span
      className="inline-block"
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType === "touch") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => (x.set(0), y.set(0))}
    >
      {children}
    </motion.span>
  );
}

/** Global cursor layer. Pure transform writes in one rAF loop (no blur, no blend, no React renders):
 *  a lagging light + a small lit-dot patch that follows the pointer, and stardust on click. */
export function CursorFX() {
  const glow = useRef<HTMLDivElement>(null);
  const dots = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || reduced()) return;
    let tx = -999, ty = -999, cx = -999, cy = -999, raf = 0;
    const loop = () => {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      if (glow.current) glow.current.style.transform = `translate3d(${cx - 200}px,${cy - 200}px,0)`;
      if (dots.current) {
        const dx = tx - 220, dy = ty - 220;
        dots.current.style.transform = `translate3d(${dx}px,${dy}px,0)`;
        dots.current.style.backgroundPosition = `${-dx}px ${-dy}px`;
      }
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5 ? requestAnimationFrame(loop) : 0;
    };
    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (cx < -900) (cx = tx), (cy = ty);
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const colors = ["#b983ff", "#ff7ab8", "#ffc46b", "#6fe7d8"];
    const burst = (e: PointerEvent) => {
      for (let i = 0; i < 10; i++) {
        const s = document.createElement("span");
        const a = (Math.PI * 2 * i) / 10 + Math.random() * 0.4;
        const d = 38 + Math.random() * 50;
        Object.assign(s.style, {
          position: "fixed", left: `${e.clientX}px`, top: `${e.clientY}px`, width: "5px", height: "5px",
          borderRadius: i % 2 ? "50%" : "1px", background: colors[i % 4], pointerEvents: "none", zIndex: "9999",
        });
        document.body.appendChild(s);
        s.animate(
          [
            { transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
            { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px) scale(0)`, opacity: 0 },
          ],
          { duration: 600 + Math.random() * 200, easing: "cubic-bezier(.16,1,.3,1)" },
        ).onfinish = () => s.remove();
      }
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", burst);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", burst);
    };
  }, []);
  return (
    <>
      <div ref={dots} aria-hidden className="bg-dots-lit pointer-events-none fixed left-0 top-0 -z-[9] hidden h-[440px] w-[440px] will-change-transform [@media(pointer:fine)]:block" />
      <div
        ref={glow}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--acc-green)_20%,transparent),transparent_65%)] will-change-transform [@media(pointer:fine)]:block"
      />
    </>
  );
}

/** Marquee whose speed, direction and skew are driven by scroll velocity. */
export function VelocityMarquee({ words }: { words: string[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const inView = useInView(wrap);
  const p = useMotionValue(0);
  const { scrollY } = useScroll();
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const skew = useTransform(vel, [-2500, 2500], [-16, 16], { clamp: true });
  const dir = useRef(1);
  useAnimationFrame((_, dt) => {
    if (!inView) return;
    const v = vel.get();
    if (Math.abs(v) > 20) dir.current = v > 0 ? 1 : -1;
    const next = (p.get() + dir.current * (0.012 + Math.abs(v) / 9000) * dt) % 50;
    p.set(next < 0 ? next + 50 : next);
  });
  const x = useTransform(p, (v) => `${-v}%`);
  const row = (
    <>
      {words.map((w, i) => (
        <span
          key={w + i}
          className={`mx-6 font-display text-6xl uppercase md:text-8xl ${i % 2 ? "mesh-static" : "text-stroke"}`}
        >
          {w}
          <span className="mx-6 inline-block text-acc-green">✦</span>
        </span>
      ))}
    </>
  );
  return (
    <div ref={wrap} dir="ltr" aria-hidden className="overflow-hidden py-6">
      <motion.div style={{ x, skewX: skew }} className="flex w-max whitespace-nowrap will-change-transform">
        {[0, 1].map((k) => (
          <div key={k} className="flex">
            {row}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
