'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <Mail className="text-gray-900" size={32} />
              </div>
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  JOIN 200K+ PEOPLE
                </h2>
              </div>
            </div>

            <h3 className="text-3xl font-bold">
              GETTING WEEKLY WEALTH TIPS
            </h3>

            <p className="text-xl text-gray-300">
              Free weekly email with money tips, strategies, exclusive content, and more.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors flex items-center gap-2 group"
            >
              SIGN UP AND GET FREE WEALTH CHECKLIST
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
                src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Newsletter Preview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
