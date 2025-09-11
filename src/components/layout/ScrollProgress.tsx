import React, { useEffect, useState } from 'react';

const navigationSteps = [
  { label: 'Start', id: 'hero' },
  { label: '01', id: 'article-1' },
  { label: '02', id: 'article-2' },
  { label: '03', id: 'article-3' },
];

export const ScrollProgress: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active step based on scroll position
      const sections = navigationSteps.map(step => document.getElementById(step.id));
      const currentSection = sections.findIndex(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      if (currentSection !== -1) {
        setActiveStep(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end space-y-8">
      {/* Progress Bar */}
      <div className="relative w-1 h-60 bg-white/20 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-app-accent transition-all duration-300 ease-out rounded-full"
          style={{ height: `${Math.min(scrollProgress, 100)}%` }}
        />
      </div>

      {/* Navigation Steps */}
      <div className="flex flex-col items-end space-y-8">
        {navigationSteps.map((step, index) => (
          <button
            key={step.label}
            onClick={() => {
              const element = document.getElementById(step.id);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`font-bold text-lg transition-all duration-300 ${
              activeStep === index
                ? 'text-white scale-110'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            {step.label}
          </button>
        ))}
      </div>
    </div>
  );
};