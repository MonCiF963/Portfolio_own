export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)]" />
      <div className="animate-float-slow absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-acc-purple/20 blur-[140px]" />
      <div className="animate-float-slow absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-acc-blue/20 blur-[150px] [animation-delay:-6s]" />
      <div className="animate-float-slow absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-acc-cyan/12 blur-[150px] [animation-delay:-11s]" />
    </div>
  );
}
