import React from 'react';
import { Navigation } from '../../components/layout/Navigation';
import { Hero } from '../../components/layout/Hero';
import { ArticleSection } from '../../components/sections/ArticleSection';
import { Footer } from '../../components/layout/Footer';
// import { SocialSidebar } from '../../components/layout/SocialSidebar';
// import { ScrollProgress } from '../../components/layout/ScrollProgress';

export const Mntn: React.FC = () => {
  return (
    <div className="bg-bg min-h-screen text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Social Sidebar */}
      {/* <SocialSidebar /> */}

      {/* Scroll Progress */}
      {/* <ScrollProgress /> */}

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* Articles Section */}
        <section id="articles" className="relative">
          {/* Background Mountains */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1200"
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/80 to-bg" />
          </div>

          {/* Article Content */}
          <div className="relative z-10">
            <div id="article-1">
              <ArticleSection />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};