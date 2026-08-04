export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)]" />
    </div>
  );
}