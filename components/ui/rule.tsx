type Props = {
  label?: string;
  number?: string;
  className?: string;
};

export function Rule({ label, number, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {number && (
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
          {number}
        </span>
      )}
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
          {label}
        </span>
      )}
      <span className="h-px flex-1 bg-ink/[0.16]" />
    </div>
  );
}
