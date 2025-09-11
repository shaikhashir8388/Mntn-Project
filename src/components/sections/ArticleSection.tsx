import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

const articles = [
  {
    number: "01",
    category: "GET STARTED",
    title: "What level of hiker are you?",
    description:
      "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
    image: "/RK.png",
    imagePosition: "right" as const,
  },
  {
    number: "02",
    category: "HIKING ESSENTIALS",
    title: "Picking the right Hiking Gear!",
    description:
      "The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.",
    image: "/SG.png",
    imagePosition: "left" as const,
  },
  {
    number: "03",
    category: "WHERE YOU GO IS THE KEY",
    title: "Understand Your Map & Timing",
    description:
      "To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction.",
    image: "/FK.png",
    imagePosition: "right" as const,
  },
];

interface ArticleCardProps {
  article: typeof articles[0];
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const isImageRight = article.imagePosition === 'right';

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Content */}
      <div className={`space-y-6 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
        {/* Large Number Background */}
        <div className="relative">
          <div className="absolute -top-8 -left-4 text-8xl lg:text-9xl font-playfair font-medium text-white/5 select-none">
            {article.number}
          </div>
          
          {/* Category */}
          <div className="flex items-center space-x-4 mb-6 relative z-10">
            <div className="w-16 lg:w-20 h-0.5 bg-app-accent"></div>
            <span className="text-app-accent font-sans font-medium text-base tracking-[4px] uppercase">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-playfair font-medium text-white leading-tight mb-6">
            {article.title}
          </h2>

          {/* Description */}
          <p className="text-white font-sans font-normal text-lg leading-relaxed mb-8">
            {article.description}
          </p>

          {/* Read More Button */}
          <Button variant="ghost" className="group p-0 hover:bg-transparent">
            <span className="text-app-accent font-sans font-medium text-base tracking-[4px] uppercase">
              read more
            </span>
            <ChevronRight className="w-5 h-5 ml-2 text-app-accent transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className={`${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] lg:h-[500px] xl:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export const ArticleSection: React.FC = () => {
  return (
    <Section padding="xl" background="transparent" className="bg-bg">
      <div className="space-y-32 lg:space-y-40">
        {articles.map((article, index) => (
          <ArticleCard key={article.number} article={article} index={index} />
        ))}
      </div>
    </Section>
  );
};