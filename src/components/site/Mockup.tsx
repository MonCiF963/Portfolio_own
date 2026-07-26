export function BrowserMockup({
  src,
  alt,
  domain = "modev.dev",
  className = "",
}: {
  src: string;
  alt: string;
  domain?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-card/80 ${className}`}>
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5" dir="ltr">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ms-2 truncate rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
          {domain}
        </span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
    </div>
  );
}

export function PhoneMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.6rem] border border-border bg-card p-1.5 shadow-glow ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className="h-full w-full rounded-[1.25rem] object-cover" />
    </div>
  );
}