'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Heart, Compass, Users, Download, Calendar, ArrowRight, CheckCircle2, Play } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Pillar {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  quote: string;
  focusAreas: string[];
  color: string;
  gradient: string;
  imageUrl: string;
}

const pillars: Pillar[] = [
  {
    id: 1,
    title: 'Financial Wealth',
    subtitle: 'The Engine',
    icon: DollarSign,
    description: 'Financial wealth is the engine that powers generational prosperity. ',
    quote: 'Wealth is not about having a lot of money; it\'s about having a lot of options and the freedom to choose your path.',
    focusAreas: [
      'Real estate investing',
      'Land ownership',
      'Life insurance strategies',
      'Business ownership',
    ],
    color: 'yellow',
    gradient: 'from-yellow-500 to-yellow-600',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80'
  },
  {
    id: 2,
    title: 'Health Wealth',
    subtitle: 'The Vehicle',
    icon: Heart,
    description: 'Health is the vehicle that carries you through life. ',
    quote: 'Your body is your temple. Invest in it, maintain it, and it will serve you for decades to come.',
    focusAreas: [
      'Preventive healthcare',
      'Physical fitness & strength',
      'Mental health & mindfulness',
      'Nutrition & diet optimization',
    ],
    color: 'green',
    gradient: 'from-green-500 to-green-600',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80'
  },
  {
    id: 3,
    title: 'Spiritual & Purpose Wealth',
    subtitle: 'The Compass',
    icon: Compass,
    description: 'Purpose and integrity are the compass that guides decision-making.',
    quote: 'When your actions align with your purpose, every decision becomes an investment in your legacy.',
    focusAreas: [
      'Clarity of life purpose',
      'Values alignment & integrity',
      'Giving & philanthropy',
      'Legacy mindset development',
    ],
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
  },
  {
    id: 4,
    title: 'Family & Community Wealth',
    subtitle: 'The Power Source',
    icon: Users,
    description: 'Family and community are the true power source of life. ',
    quote: 'True wealth is measured not by what you accumulate, but by what you create together and leave behind.',
    focusAreas: [
      'Estate planning & succession',
      'Family meetings & governance',
      'Intergenerational unity',
      'Community building & impact',
    ],
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80'
  }
];

export default function FourPillarsPage() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
        <Navigation/>
      {/* Hero Section */}
      <motion.section
  initial="hidden"
  animate="visible"
  className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 mt-20 px-6 overflow-hidden"
>
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

  <div className="max-w-6xl mx-auto relative z-10">
    <motion.div
      className="inline-block bg-yellow-600 text-gray-100 px-4 py-1 rounded-full text-sm font-semibold mb-6"
    >
      Explore the Pillars
    </motion.div>

    <motion.h1
      className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
    >
      The 4 Pillars Framework
    </motion.h1>

    <motion.p
      className="text-xl mb-4 text-gray-300 max-w-3xl"
    >
      Deep dive into each pillar of generational wealth and discover how to implement this transformative framework in your life.
    </motion.p>



        <blockquote className="border-l-4 border-yellow-500 w-fit px-2 pl-4 py-2 bg-gray-700/40 rounded-r-lg">
      <p className="text-gray-300 italic">
        &quot;True wealth is more than money — it&apos;s a life built with balance, health, purpose, and family.&quot;
      </p>
      {/* <footer className="mt-2 text-gray-400 text-sm">— Tim Booker</footer> */}
    </blockquote>
  </div>
</motion.section>


      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              The Foundation for Life by Design
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The 4 Pillars framework is the foundation for Life by Design coaching and strategy. When these pillars are aligned and strengthened together, they create not just financial success, but a lasting legacy that transcends generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {pillars.map((pillar, index) => (
              <PillarCard 
                key={pillar.id} 
                pillar={pillar} 
                index={index}
                isActive={activePillar === pillar.id}
                onActivate={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
              />
            ))}
          </div>
        </div>
      </section>

     {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Never Miss an Episode
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 200K+ subscribers and get weekly insights on building generational wealth and living with purpose
            </p>
            <motion.a
              href="https://www.youtube.com/@LifeByDesignWithTimBooker"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              SUBSCRIBE ON YOUTUBE
              <Play size={20} fill="currentColor" />
            </motion.a>
          </motion.div>
        </div>
      </section>

       <Footer/>
    </div>
  );
}

interface PillarCardProps {
  pillar: Pillar;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}

function PillarCard({ pillar, index, isActive, onActivate }: PillarCardProps) {
  const Icon = pillar.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
    >
      {/* Image Section */}
      <motion.div 
        className="flex-shrink-0 w-full lg:w-1/2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl group cursor-pointer"
             onClick={onActivate}>
          <Image
            src={pillar.imageUrl}
            alt={pillar.title}
            fill
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
          
          {/* Icon Overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
            <Icon className="w-20 h-20 text-white" />
          </div> */}
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="flex-1">
        <div className="mb-2">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${pillar.gradient} text-white`}>
            {pillar.subtitle}
          </span>
        </div>
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {pillar.title}
        </h3>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {pillar.description}
        </p>

        {/* Focus Areas */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span>Key Focus Areas:</span>
            <ArrowRight size={16} />
          </h4>
          <ul className="space-y-2">
            {pillar.focusAreas.map((area, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 text-gray-700"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.gradient}`} />
                {area}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Quote */}
        <blockquote className={`border-l-4 border-${pillar.color}-500 pl-4 py-2 bg-gray-50 rounded-r-lg`}>
          <p className="text-gray-700 italic">&quot;{pillar.quote}&quot;</p>
        </blockquote>
      </div>

     
    </motion.div>
  );
}