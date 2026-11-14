export function AnimatedBackground() {
  const blob = "absolute rounded-full will-change-transform animate-float-slow";
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className={`${blob} -left-48 -top-32 h-[46rem] w-[46rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--acc-green)_26%,transparent),transparent)]`} />
      <div className={`${blob} -right-48 top-1/4 h-[42rem] w-[42rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--acc-purple)_20%,transparent),transparent)] [animation-delay:-6s]`} />
      <div className={`${blob} -bottom-48 left-1/3 h-[38rem] w-[38rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--acc-cyan)_14%,transparent),transparent)] [animation-delay:-12s]`} />
      <div className="bg-dots absolute inset-0 opacity-[0.13]" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
