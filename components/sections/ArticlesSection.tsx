'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const videos = [
  { 
    id: 1, 
    title: 'Finding Wholeness- Danielle’s Leap from Boston & London to Nairobi | Life by Design Ep. 4',
    thumbnail: '/ep-4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=d9nYEFYBB-w',
    views: '20K',
    duration: '44:42'
  },
  { 
    id: 2, 
    title: 'Entrepreneurship Without Borders: Aligning Purpose with Business Growth | EP 1- Life by Design',
    thumbnail: '/ep-2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    views: '98K',
    duration: '45:30'
  },
  { 
    id: 3, 
    title: 'Life in Nairobi: Wealth Beyond Money | Episode 2 of Life by Design with Tim Booker & Kevin Morrison',
    thumbnail: '/ep-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    views: '156K',
    duration: '54:15'
  },
  
];

export default function VideosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videosPerPage = 3;
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentVideos = videos.slice(
    currentIndex * videosPerPage,
    (currentIndex + 1) * videosPerPage
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-yellow-600 mb-2 uppercase tracking-wider">
            Latest Videos
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Life By Design With Tim Booker
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join 200K+ subscribers transforming their lives
          </p>
          <motion.a
            href="https://www.youtube.com/@LifeByDesignWithTimBooker"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors group"
          >
            SUBSCRIBE NOW
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </motion.a>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Previous videos"
              >
                <ChevronLeft size={24} className="text-gray-900" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Next videos"
              >
                <ChevronRight size={24} className="text-gray-900" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-yellow-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function VideoCard({ video }: { video: typeof videos[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={video.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className=" overflow-hidden  hover:shadow-2xl transition-shadow">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-gray-200">
          <div className='rounded-sm'>
            <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover rounded-sm "
          />
          </div>
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
              className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl"
            >
              <Play size={24} fill="white" className="text-white ml-1" />
            </motion.div>
          </div>
          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>

        {/* Video Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 group-hover:text-yellow-500 transition-colors line-clamp-2 mb-2">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600">{video.views} views</p>
        </div>
      </div>
    </motion.a>
  );
}