import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const socialIcons = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-8">
      {/* Follow Us Text */}
      <div className="transform -rotate-90 whitespace-nowrap">
        <span className="text-white font-bold text-lg tracking-wider">
          Follow us
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col space-y-6">
        {socialIcons.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              className="text-white hover:text-app-accent transition-colors duration-300 hover:scale-110 transform"
              aria-label={social.label}
            >
              <IconComponent className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </div>
  );
};