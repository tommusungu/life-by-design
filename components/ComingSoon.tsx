'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 max-w-2xl"
      >
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-yellow-400">
            Coming Soon
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {title}
          </h2>
        </div>

        <p className="text-xl text-blue-100">
          We're working hard to bring you something amazing. Check back soon!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 group"
            >
              <Home size={20} />
              Go Home
            </motion.button>
          </Link>

          <Link href="javascript:history.back()">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft size={20} />
              Go Back
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
