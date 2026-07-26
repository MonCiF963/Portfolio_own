export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
      <div className="absolute -top-56 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
      <div className="absolute bottom-[-12rem] right-[-8rem] h-[420px] w-[420px] rounded-full bg-accent/8 blur-[130px]" />
    </div>
  );
}