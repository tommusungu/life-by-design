'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

export default function WorkFromHomeSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Make Money From Home"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
                  <Play className="text-white fill-white ml-1" size={32} />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl uppercase font-bold">
              Transform Your Life & Business

            </h2>

            <p className="text-xl text-gray-600">
Choose the pathway that aligns with your goals. Whether you&lsquo;re ready to design your generational wealth or scale your impact with AI, we have the proven framework to get you there.            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-4 rounded-sm font-semibold hover:bg-red-700 transition-colors flex items-center gap-2 group"
            >
              Learn More
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
