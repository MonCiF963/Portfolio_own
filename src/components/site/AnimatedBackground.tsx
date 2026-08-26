export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)]" />
      <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-acc-green/[0.07] blur-[150px]" />
      <div className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-acc-purple/[0.07] blur-[150px]" />
    </div>
  );
}
