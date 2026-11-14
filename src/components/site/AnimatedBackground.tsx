export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="animate-float-slow absolute -left-40 -top-20 h-[40rem] w-[40rem] rounded-full bg-acc-green/20 blur-[130px]" />
      <div className="animate-float-slow absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-acc-purple/15 blur-[140px] [animation-delay:-6s]" />
      <div className="animate-float-slow absolute -bottom-40 left-1/3 h-[32rem] w-[32rem] rounded-full bg-acc-cyan/10 blur-[140px] [animation-delay:-12s]" />
      <div className="bg-dots absolute inset-0 opacity-[0.14]" />
      <div className="bg-dots-lit absolute inset-0" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
