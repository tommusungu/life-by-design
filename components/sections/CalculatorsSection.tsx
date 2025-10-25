'use client';

import { motion } from 'framer-motion';
import { Calculator, Shield, FileText, DollarSign } from 'lucide-react';

const calculators = [
  {
    title: 'Wealth Projection Calculator',
    icon: Calculator,
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Debt Calculator',
    icon: FileText,
    image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Life Insurance Calculator',
    icon: Shield,
    image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Singles Playbook Quiz',
    icon: DollarSign,
    image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function CalculatorsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={calc.image}
                    alt={calc.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                        <calc.icon className="text-gray-900" size={20} />
                      </div>
                      <h3 className="font-semibold text-lg leading-tight">{calc.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
