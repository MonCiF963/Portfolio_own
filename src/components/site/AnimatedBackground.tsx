export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[560px] w-[560px] rounded-full bg-indigo-500/20 blur-3xl animate-blob [animation-delay:-4s]" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-sky-500/15 blur-3xl animate-blob [animation-delay:-8s]" />
    </div>
  );
}
