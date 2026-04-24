type SectionHeadingProps = {
  badge?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 sm:mb-16">
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium tracking-widest uppercase mb-4">
          <span className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 section-divider w-32" />
    </div>
  );
}
