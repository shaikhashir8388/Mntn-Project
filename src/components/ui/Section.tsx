import React from 'react';
import { cn } from '../../lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'dark' | 'darker';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerSize = 'xl',
  padding = 'lg',
  background = 'transparent'
}) => {
  const paddings = {
    none: '',
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-20 lg:py-32',
    xl: 'py-32 lg:py-40'
  };

  const backgrounds = {
    transparent: 'bg-transparent',
    dark: 'bg-bg/50',
    darker: 'bg-bg'
  };

  return (
    <section className={cn(paddings[padding], backgrounds[background], className)}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};