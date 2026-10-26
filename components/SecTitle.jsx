import React from 'react'

const SecTitle = ({head2, head1, headspan}) => {
  return (
    <div>
      {/* Section Title */}
      <h2 className="relative mb-12 w-fit text-base font-normal uppercase tracking-[5px] text-orange after:absolute after:-bottom-4 after:left-0 after:h-1 after:w-14 after:bg-white sm:mb-16 sm:text-xl sm:tracking-[8px] md:mb-20 md:text-2xl md:tracking-[10px]">
        {head2}
      </h2>

      {/* Main Heading */}
      <h1 className="mb-8 text-3xl font-semibold uppercase leading-tight text-orange sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl lg:text-6xl xl:text-7xl">
        {head1}<span className="text-white">{headspan}</span>
      </h1>
    </div>
  );
}

export default SecTitle