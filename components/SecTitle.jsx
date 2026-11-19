import React from "react";

/**
 * Section heading: mono index + label with a self-drawing rule,
 * then a display headline revealed line by line (see MotionDirector).
 */
const SecTitle = ({ head2, head1, headspan, index, compact = false }) => {
  return (
    <div className="mb-10 sm:mb-14 md:mb-16">
      <div className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-orange sm:mb-10 sm:text-sm">
        {index && <span className="text-white/40">({index})</span>}
        <span>{head2}</span>
        <span
          data-reveal="line"
          aria-hidden="true"
          className="h-px max-w-40 flex-1 bg-linear-to-r from-orange/70 to-transparent"
        />
      </div>

      <h2
        data-split
        className={`font-display font-extrabold uppercase leading-[0.95] tracking-tight text-orange ${
          compact ? "text-[clamp(1.5rem,2.9vw,2.85rem)]" : "text-[clamp(1.65rem,6.5vw,5.5rem)]"
        }`}
      >
        {head1}
        <span className="text-white">{headspan}</span>
      </h2>
    </div>
  );
};

export default SecTitle;
