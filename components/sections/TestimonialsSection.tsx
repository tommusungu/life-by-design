'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus Chen',
    text: '"Working with Tim completely transformed how I think about wealth. It\'s not just about money—it\'s about creating a life that serves my family for generations. In just 6 months, I increased my income by 40% while being more present with my children."',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Sarah Johnson',
    text: '"Tim\'s AI strategy implementation saved our company 20 hours per week and increased productivity by 300%. But more importantly, he helped me design a business that aligns with my values and creates generational impact."',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Robert Cowans',
    text: '"Before meeting Tim, I was overwhelmed and stuck in outdated systems. His frameworks helped me automate 70% of our workflows and scale without burnout. I finally have time to lead strategically instead of constantly putting out fires."',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];


export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-xl text-gray-600">Real stories from real people</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              <div className="absolute top-8 right-8 text-yellow-400 opacity-20">
                <Quote size={48} />
              </div>

              <div className="relative space-y-6">
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
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
