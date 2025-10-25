'use client';
import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  end: number;
  label: string;
  isVisible: boolean;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <StatItem
            end={500}
            suffix="+"
            label="Lives Transformed"
            isVisible={isVisible}
            duration={2000}
          />
          <StatItem
            prefix="$"
            end={10}
            suffix="M+"
            label="Wealth Created"
            isVisible={isVisible}
            duration={2000}
          />
          <StatItem
            end={15}
            suffix="+"
            label="Years Experience"
            isVisible={isVisible}
            duration={2000}
          />
        </div>
      </div>
    </section>
  );
}

function StatItem({ end, label, isVisible, duration = 2000, prefix = '', suffix = '' }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * easeOutQuad(progress)));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  // Easing function for smooth animation
  const easeOutQuad = (t: number): number => t * (2 - t);

  return (
    <div className="text-center">
      <div className="text-5xl sm:text-6xl font-bold text-white mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-lg sm:text-xl font-medium text-yellow-100">
        {label}
      </div>
    </div>
  );
}