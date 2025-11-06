'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  TrendingUp, 
  Megaphone, 
  Check, 
  ArrowRight, 
  Calendar,
  Clock,
  DollarSign,
  Play
} from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  duration: string;
  investment: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Personal Life Coaching for Generational Wealth',
    subtitle: 'Transform Your Vision Into Legacy',
    description: 'A comprehensive coaching program that guides you through the 4 Pillars framework to design a life of balance, abundance, and lasting impact.',
    features: [
      '1-on-1 Strategic Life Design Sessions',
      'Complete 4 Pillars Assessment & Roadmap',
      'Personalized Wealth Building Strategy',
      'Health & Wellbeing Optimization Plan',
      // 'Purpose Clarity & Values Alignment',
      // 'Family & Community Building Framework',
      // 'Quarterly Progress Reviews & Adjustments'
    ],
    duration: '6-Month Transformation Program',
    investment: '$5,000 (6 months) | $833/month',
    ctaText: 'Begin Your Transformation',
    ctaLink: '#',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    icon: Heart
  },
  {
    id: 2,
    title: 'Growth & AI Executive Strategy',
    subtitle: 'Transform Strategy Into AI-Powered Results',
    description: 'A comprehensive program for CEOs and business owners ready to unlock hidden profits and scale with precision. Designed for companies generating $3M-$1B annually with aggressive growth goals.',
    features: [
      'Free 90-Minute Growth & AI Executive Briefing',
      'Complete AI Growth Assessment & Audit',
      'Strategic Process Mapping & Optimization',
      'Custom AI Implementation Roadmap',
      // 'Growers Cloud AI Platform Access',
      // '6-Week High-Touch Implementation Program',
      // '1:1 Strategic Support (Limited to 5 CEOs)'
    ],
    duration: '90-Min Briefing + 6-Week Intensive',
    investment: 'Briefing: Free | Intensive: $15,000',
    ctaText: 'Schedule Executive Briefing',
    ctaLink: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    icon: Sparkles
  },
  {
    id: 3,
    title: 'Business Coaching & Advisory for Global Growth',
    subtitle: 'Scale Your Business Worldwide with Expert Guidance',
    description: 'As your strategic partner, I provide personalized business coaching and advisory to help you scale with clarity and confidence. Together, we will design and execute strategies that position your business for long-term, global success. Beyond advice, I bring accountability and access to expert networks, ensuring your company has the tools, leadership, and resources needed to thrive in today\'s competitive marketplace.',
    features: [
      'Strategic Roadmap & Execution Oversight',
      'Operational & Growth Optimization',
      'Funding & Capital Strategy Guidance',
      'Board-Level Governance & Accountability',
      // 'Leadership & Culture Development',
      // 'Governance, Risk & Compliance',
      // 'Expert Network Access & Resources'
    ],
    duration: '6-Month Engagement Program',
    investment: '$8,000 (6 months) | $1,333/month',
    ctaText: 'Apply for Global Growth Strategy Session',
    ctaLink: '#',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    icon: TrendingUp
  },
  {
    id: 4,
    title: 'Business Brand Development, Sales & Storytelling',
    subtitle: 'Build Magnetic Brands & Drive Results Through Storytelling',
    description: 'We develop comprehensive branding strategies designed to position your company — and its leadership — for success in global and local markets. Through integrated marketing, executive reputation management, and video-first storytelling, we help transform businesses into trusted brands that attract customers, investors, and opportunities. Clients also gain access to my in-house social media studio for professional video production and distribution.',
    features: [
      'Brand Strategy & Architecture',
      'Executive & CEO Brand Positioning',
      'Social & Video Storytelling Strategy',
      // 'Sales Enablement Integration',
      // 'In-House Social Media Studio Access',
      // 'Performance Measurement & Optimization'
    ],
    duration: '6-Month Strategy & Production Program',
    investment: '$5,000 (6 months) | $833/month',
    ctaText: 'Request a Brand & Storytelling Strategy Session',
    ctaLink: '#',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    icon: Megaphone
  }
];

export default function ServicesPage() {
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

  <div className="max-w-5xl mx-auto relative z-10">
    <motion.div
      className="inline-block bg-yellow-600 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-6"
    >
      Best Services
    </motion.div>

    <motion.h1
      className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
    >
      Transforming Businesses with{' '}
      <span className="text-yellow-500 italic">Excellence</span>
    </motion.h1>

    <motion.p
      className="text-lg text-gray-300 leading-relaxed max-w-3xl"
    >
      Choose the pathway that aligns with your goals. Whether you&apos;re ready to design your generational wealth or scale your impact with AI, we have the proven framework to get you there.
    </motion.p>

    <blockquote className="mt-8 border-l-4 border-yellow-500 w-fit px-2 pl-4 py-2 bg-gray-700/40 rounded-r-lg">
      <p className="text-gray-300 italic">
        &quot;Excellence isn’t a skill — it’s a mindset. When you lead with purpose and clarity, success becomes inevitable.&quot;
      </p>
      {/* <footer className="mt-2 text-gray-400 text-sm">— Tim Booker</footer> */}
    </blockquote>
  </div>
</motion.section>


      {/* Large Hero Image */}
    
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
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

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
    >
      {/* Image */}
      <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-lg ${!isEven ? 'lg:col-start-2' : ''}`}>
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <div className="flex items-center gap-2 mb-3">
          <Icon className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
            {service.subtitle}
          </span>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign size={16} />
            <span>{service.investment}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-black/80 transition-colors"
        >
          {service.ctaText}
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}