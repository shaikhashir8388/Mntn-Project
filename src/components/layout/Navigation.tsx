import React, { useEffect, useState } from 'react';
import { User } from 'lucide-react';
import { Container } from '../ui/Container';

const navigationItems = [
  { label: 'Equipment', href: '#equipment' },
  { label: 'About us', href: '#about' },
  { label: 'Blog', href: '#blog' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show navbar when at the top (in header section)
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 transform ${
        !isScrolled ? 'translate-y-0 bg-transparent' : '-translate-y-full'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl lg:text-3xl font-bold text-white tracking-wider">
              <span className="text-white">M</span>
              <span>N</span>
              <span className="text-white">T</span>
              <span>N</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-semibold hover:text-app-accent transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-app-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-white hover:text-app-accent transition-colors duration-300 flex items-center space-x-2">
              <User className="w-6 h-6" />
              <span>Account</span>
            </button>
          </div>

          {/* Mobile User Icon */}
          <button
            className="lg:hidden text-white hover:text-app-accent transition-colors duration-300"
          >
            <User className="w-6 h-6" />
          </button>
        </nav>
      </Container>
    </header>
  );
};
