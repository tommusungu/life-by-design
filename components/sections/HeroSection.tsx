'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hidden lg:block absolute -bottom-40 -left-64 w-[500px] h-[500px] bg-yellow-400 rounded-full opacity-30" />
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-yellow-50/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* LEFT CONTENT */}
          <div className="space-y-8 z-10 lg:col-span-3">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Design Your Life.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-yellow-500 leading-tight">
                Build Generational Wealth.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Lead with Purpose.
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-xl">
              Transform your vision into legacy through the proven 4 Pillars of Generational Wealth, 
              powered by cutting-edge AI strategy and intentional living.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* BOOK SESSION BUTTON */}
              <Link
                href="/book-session"
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 group shadow-lg"
              >
                Book Your Session
              </Link>

              {/* EXPLORE / ABOUT BUTTON */}
              <Link
                href="/services"
                className="border-2 border-black text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group shadow-lg"
              >
                Explore
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block lg:col-span-2"
          >
            <div className="relative z-10 gap-4 h-[500px]">
              <div className="relative h-full">
                <Image
                  src="/tim-booker.jpg"
                  alt="Professional coach"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
