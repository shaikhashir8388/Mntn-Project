import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from '../ui/Section';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      
      // Calculate opacity based on scroll position (fade out between 100px and 400px scroll)
      const newOpacity = Math.max(0, Math.min(1, 1 - (newScrollY - 100) / 300));
      setOpacity(newOpacity);

      // Calculate translation for entrance animation
      const translateValue = Math.max(0, 50 - newScrollY / 2);
      setTranslateY(translateValue);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section padding="none" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background with Parallax - Adjusted for your 3 images: AV (foreground), another as middle, third as background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B1D26]/30" /> {/* Light base overlay */}
        
        {/* Foreground Layer (AV - assuming this is your closest/detailed mountain layer) */}
        <div className="absolute inset-0 w-full">
          <img
            className="absolute top-0 left-1/2 w-full max-w-[1920px] h-auto brightness-125 contrast-105"
            style={{
              transform: `translate3d(-50%, ${-scrollY * 0.15}%, 0) scale3d(1.1, 1.1, 1)`,
              willChange: 'transform',
              marginTop: '-25vh',
            }}
            src="/hg.png"  // Replace with your actual AV image path
            alt="Mountains foreground"
          />
        </div>
        
        {/* Middle Layer (Your second image - e.g., mid-distance mountains) */}
        <div className="absolute inset-0 w-full">
          <img
            className="absolute top-[35%] left-1/2 w-full max-w-[1920px] h-auto brightness-125 contrast-105"
            style={{
              transform: `translate3d(-50%, ${-scrollY * 0.1}%, 0) scale3d(1, 1, 1)`,
              willChange: 'transform',
              marginTop: '-10vh',
            }}
            src="/MG.png"  // Replace with your actual middle layer image path
            alt="Mountains middle ground"
          />
        </div>
        
        {/* Background Layer (Your third image - e.g., distant mountains/sky) */}
        <div className="absolute inset-0 w-full">
          <img
            className="absolute top-[45%] left-1/2 w-full max-w-[1920px] h-auto brightness-120"
            style={{
              transform: `translate3d(-50%, ${-scrollY * 0.05}%, 0) scale3d(1, 1, 1)`,
              willChange: 'transform',
              marginTop: '-5vh',
            }}
            src="/VG.png"  // Replace with your actual background layer image path
            alt="Mountains background"
          />
        </div>
        
        {/* Gradient Overlays - These create depth and focus on content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1D26]/30 to-[#0B1D26]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#0B1D26]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D26]/30 via-transparent to-[#0B1D26]/30" />
      </div>

      {/* Content - With scroll-based animations */}
      <div 
        className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 -mt-32"
        style={{
          opacity: opacity,
          transform: `translateY(${translateY}px)`,
          transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
        }}
      >
        <div className="max-w-[1462px] mx-auto flex flex-col items-start">
          {/* Subtitle */}
          <div className="flex items-center mb-8">
            <div className="w-[72px] h-0.5 bg-app-accent"></div>
            <span className="ml-6 text-app-accent font-sans font-medium text-base tracking-[6px] uppercase">
              A Hiking Guide
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-[64px] sm:text-[72px] lg:text-[88px] font-playfair font-medium text-white leading-[1.1] mb-8 max-w-[900px]">
            Be Prepared For The{' '}
            <span className="text-white">Mountains</span>{' '}
            And Beyond!
          </h1>

          {/* Scroll Indicator */}
          <div className="flex items-center space-x-3 mt-8">
            <span className="text-white font-sans font-medium text-base tracking-[4px] uppercase">scroll down</span>
            <ChevronDown className="w-5 h-5 text-white animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent"></div>
    </Section>
  );
};