import React from 'react';
import { Section } from '../ui/Section';

const blogLinks = [
  'About MNTN',
  'Contributors & Writers',
  'Write For Us',
  'Contact Us',
  'Privacy Policy',
];

const mntnLinks = [
  'The Team',
  'Jobs',
  'Press',
];

export const Footer: React.FC = () => {
  return (
    <Section padding="xl" background="darker">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-0">
        <div className="lg:flex lg:justify-between lg:items-start">
          {/* Brand Section */}
          <div className="max-w-[400px]">
            <div className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-white tracking-wider mb-6">
              <span className="text-white">M</span>
              <span>N</span>
              <span className="text-white">T</span>
              <span>N</span>
            </div>
            <p className="text-white font-sans font-normal text-base leading-relaxed mb-8 lg:mb-16">
              Get out there & discover your next slope, mountain & destination!
            </p>
            {/* Copyright */}
            <div className="mt-auto">
              <p className="text-white/40 text-sm lg:text-base font-sans">
                Copyright 2020 MNTN, Inc. Terms & Privacy
              </p>
              <p className="text-white/40 text-sm lg:text-base font-sans mt-2">
                A concept by Kryston Schwarze
              </p>
            </div>
          </div>

          {/* Right Side Links */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:flex lg:gap-32">
            {/* Blog Links */}
            <div>
              <h3 className="text-app-accent font-sans font-medium text-base lg:text-lg mb-4 lg:mb-6">
                More on The Blog
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                {blogLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white hover:text-app-accent transition-colors duration-300 text-sm lg:text-base font-sans"
                    >
                      {link}
                    </a>
                  </li>
                ))}  
              </ul>
            </div>

            {/* MNTN Links */}
            <div>
              <h3 className="text-app-accent font-sans font-medium text-base lg:text-lg mb-4 lg:mb-6">
                More on MNTN
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                {mntnLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white hover:text-app-accent transition-colors duration-300 text-sm lg:text-base font-sans"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};