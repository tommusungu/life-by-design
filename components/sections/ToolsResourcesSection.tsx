'use client';

import { motion } from 'framer-motion';
import {  CreditCard, ArrowRight, DollarSign, Heart, Users } from 'lucide-react';

const resources = [
  { label: 'Financial Wealth & Investment', icon: DollarSign },
  { label: 'Health & Wellbeing', icon: Heart },
  { label: 'Purpose & Moral Compass', icon: CreditCard },
  { label: 'Family Unity & Community', icon: Users },
];

export default function ToolsResourcesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl uppercase sm:text-4xl font-bold mb-4">
                The 4 Pillars of 
              </h2>
              <h2 className="text-3xl uppercase sm:text-4xl font-bold">
                Generational Wealth
              </h2>
            </div>

            <ul className="space-y-4">
              {resources.map((resource, index) => (
                <motion.li
                  key={resource.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 text-lg font-medium group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <resource.icon className="text-gray-900" size={20} />
                  </div>
                  <span className="group-hover:text-yellow-500 transition-colors">
                    {resource.label}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-sm font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 group"
            >
              Learn More
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Tools and Resources"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
