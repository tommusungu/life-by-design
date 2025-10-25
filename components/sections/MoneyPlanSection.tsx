'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function MoneyPlanSection() {
  return (
    <section className="py-12 bg-yellow-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            Transform Your Life & Business
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 group"
          >
            ACCESS NOW
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
