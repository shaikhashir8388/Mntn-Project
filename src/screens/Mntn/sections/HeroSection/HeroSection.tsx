import { ChevronDownIcon } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 md:gap-8 w-full relative px-4 lg:px-8">
      <div className="flex items-center gap-6 w-full md:w-auto">
        <div className="w-[72px] h-0.5 bg-app-accent" />
        <div className="font-sans font-extrabold text-app-accent text-sm md:text-lg tracking-[6px] uppercase">
          A HIKING GUIDE
        </div>
      </div>

      <h1 className="font-serif font-normal text-white text-4xl md:text-6xl lg:text-[88px] leading-tight lg:leading-[100px] max-w-[950px]">
        Be Prepared For The Mountains And Beyond!
      </h1>

      <div className="flex items-center gap-2 text-white">
        <span className="font-sans font-bold text-base md:text-lg tracking-[4px] uppercase">
          scroll down
        </span>
        <ChevronDownIcon className="w-4 h-6 animate-bounce" />
      </div>
    </section>
  );
};
