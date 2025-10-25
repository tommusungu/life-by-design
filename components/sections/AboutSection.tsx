'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Heart, Compass, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="hidden lg:block absolute top-40 right-40 w-80 h-80 bg-orange-400 rounded-full opacity-90" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-orange-500 rounded-full opacity-80" />
        <div className="absolute top-40 left-20 w-32 h-32 bg-yellow-400 rounded-full opacity-60" />
        <div className="absolute bottom-60 right-40 w-24 h-24 bg-green-500 rounded-full opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            {/* <h2 className="text-2xl font-semibold text-orange-600 mb-4">Meet Tim Booker</h2> */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Building Wealth That Lasts Generations
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              For over 15 years, I&lsquo;ve been obsessed with a single question: <span className="font-semibold">How do successful people design lives that create lasting impact across generations?</span>
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              After building multiple businesses, studying wealth patterns, and working with hundreds of entrepreneurs, I discovered that true generational wealth isn&lsquo;t just about money—it&lsquo;s about designing a life that creates value across four critical pillars.
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-xl font-medium">
              Today, I help ambitious leaders and entrepreneurs leverage the power of AI while building wealth that lasts. My clients don&lsquo;t just succeed in business; they create legacies that transform their families and communities for generations.
            </p>
            <div className="flex flex-row gap-4">
              <button className="bg-black text-white px-4 md:px-8 py-3.5 rounded-md hover:bg-gray-800 transition-colors text-base font-medium inline-flex items-center justify-center">
                Work With Me
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-4 md:px-8 py-3.5 rounded-md hover:bg-gray-50 transition-colors text-base font-medium inline-flex items-center justify-center">
                Learn More
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/tim-booker.jpg"
                  alt="Business strategy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/tim-booker.jpg"
                  alt="Mentorship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/tim-booker.jpg"
                  alt="Success planning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/tim-booker.jpg"
                  alt="Leadership"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The 4 Pillars of Generational Wealth</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              True wealth transcends money. It&lsquo;s a holistic approach that creates lasting impact across four fundamental areas of life, designed to build a legacy that lasts for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Financial Wealth & Investment</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Build diversified portfolios, create multiple income streams, and establish financial security that compounds across generations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Investment Strategy
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Asset Building
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Passive Income
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  Estate Planning
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Health & Wellbeing</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Prioritize physical and mental health as the foundation of true wealth. Energy is your most valuable asset.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                  Physical Vitality
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                  Mental Clarity
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                  Stress Management
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                  Longevity Planning
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">
                <Compass className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Purpose & Moral Compass</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Live with intention, align actions with values, and create meaning that guides every decision toward your legacy.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Vision Clarity
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Values Alignment
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Goal Achievement
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Legacy Building
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Family Unity & Community</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Strengthen relationships, build supportive networks, and create communities that amplify your impact and wealth.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Relationship Building
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Community Impact
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Family Legacy
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Network Effect
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}