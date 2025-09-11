import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-app-accent text-bg hover:bg-app-accent/90 shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent border-2 border-app-accent text-app-accent hover:bg-app-accent hover:text-bg',
    ghost: 'bg-transparent text-white hover:text-app-accent hover:bg-white/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};