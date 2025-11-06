'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, Filter, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Footer from '@/components/Footer';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
  views: string;
  duration: string;
  category: string;
  date: string;
}

const allVideos: Video[] = [
  { 
    id: 1, 
    title: 'Finding Wholeness- Danielle\'s Leap from Boston & London to Nairobi | Life by Design Ep. 4',
    thumbnail: '/ep-4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=d9nYEFYBB-w',
    views: '20K',
    duration: '44:42',
    category: 'Interviews',
    date: '2025-10-15'
  },
  { 
    id: 2, 
    title: 'Entrepreneurship Without Borders: Aligning Purpose with Business Growth | EP 1- Life by Design',
    thumbnail: '/ep-2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Py9m42Qc-JI',
    views: '98K',
    duration: '45:30',
    category: 'Business',
    date: '2025-09-20'
  },
  { 
    id: 3, 
    title: 'Life in Nairobi: Wealth Beyond Money | Episode 2 of Life by Design with Tim Booker & Kevin Morrison',
    thumbnail: '/ep-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Yo8ZGnrYtC0',
    views: '156K',
    duration: '54:15',
    category: 'Podcasts',
    date: '2025-09-10'
  },
  { 
    id: 4, 
    title: 'Building Generational Wealth: The 4 Pillars Framework',
    thumbnail: '/ep-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Py9m42Qc-JI',
    views: '75K',
    duration: '38:20',
    category: 'Wealth',
    date: '2025-08-25'
  },
  { 
    id: 5, 
    title: 'Purpose & Mind: Finding Your True Calling',
    thumbnail: '/ep-2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Py9m42Qc-JI',
    views: '62K',
    duration: '42:15',
    category: 'Purpose',
    date: '2025-08-10'
  },
  { 
    id: 7, 
    title: 'Family Legacy: Raising Conscious Children',
    thumbnail: '/ep-4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Py9m42Qc-JI',
    views: '48K',
    duration: '41:30',
    category: 'Family',
    date: '2025-07-15'
  },
  { 
    id: 9, 
    title: 'Investment Strategies for Long-term Growth',
    thumbnail: '/ep-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Py9m42Qc-JI',
    views: '91K',
    duration: '47:10',
    category: 'Wealth',
    date: '2025-06-18'
  }
];

const categories = ['All', 'Interviews', 'Business', 'Wealth', 'Purpose', 'Family', 'Podcasts'];

export default function AllVideosPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const filteredVideos = allVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <Navigation />
      <motion.section
  initial="hidden"
  animate="visible"
  className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 mt-20 px-6 overflow-hidden"
>
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

  <div className="max-w-6xl mx-auto relative z-10">
    <motion.div
      className="inline-block bg-yellow-600 text-gray-100 px-4 py-1 rounded-full text-sm font-semibold mb-6"
    >
      Life By Design Series
    </motion.div>

    <motion.h1
      className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
    >
      Videos That Inspire <span className="text-yellow-500">Transformation</span>
    </motion.h1>

    <motion.p
      className="text-xl mb-4 text-gray-300 max-w-3xl"
    >
      Explore conversations and lessons that help you design a life of purpose, balance, and true wealth.
    </motion.p>

    
    <blockquote className="border-l-4 border-yellow-500 w-fit px-2 pl-4 py-2 bg-gray-700/40 rounded-r-lg">
      <p className="text-gray-300 italic">
        &quot;Every episode is an invitation to rethink what success means and to realign your life with what truly matters.&quot;
      </p>
      {/* <footer className="mt-2 text-gray-400 text-sm">— Tim Booker</footer> */}
    </blockquote>
  </div>
</motion.section>



      {/* Search and Filter Section */}
      <section className=" z-40 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>

            {/* Category Filters - Desktop */}
            <div className="hidden lg:flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-yellow-600 text-white shadow-md'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filters - Mobile */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowFilters(false);
                      }}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-yellow-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredVideos.length}</span> videos
              {selectedCategory !== 'All' && (
                <span> in <span className="font-semibold text-yellow-600">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {/* Videos Grid */}
          <AnimatePresence mode="wait">
            {filteredVideos.length > 0 ? (
              <motion.div
                key={`${searchQuery}-${selectedCategory}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredVideos.map((video, index) => (
                  <VideoCard key={video.id} video={video} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="text-gray-400 mb-4">
                  <Search size={64} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No videos found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Never Miss an Episode
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 200K+ subscribers and get weekly insights on building generational wealth and living with purpose
            </p>
            <motion.a
              href="https://www.youtube.com/@LifeByDesignWithTimBooker"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              SUBSCRIBE ON YOUTUBE
              <Play size={20} fill="currentColor" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    
    </div>
  );
}

interface VideoCardProps {
  video: Video;
  index: number;
}

function VideoCard({ video, index }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.a
      href={video.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
    >
      <div className=" overflow-hidden  hover:shadow-2xl transition-all duration-300">
        {/* Thumbnail Section */}
        <div className="relative aspect-video ">
          {/* ✅ Video Thumbnail */}
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover rounded-lg "
            priority={index < 3} // prioritize first few for faster load
          />

          {/* Overlay gradient and play button */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <motion.div
              animate={{ scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 0.2 }}
              className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-xl"
            >
              <Play size={20} fill="white" className="text-white ml-1" />
            </motion.div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {video.category}
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 bg-black/90 text-white text-xs font-semibold px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>

        {/* Video Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors line-clamp-2 mb-3 min-h-[3rem]">
            {video.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{video.views} views</span>
            <span>
              {new Date(video.date).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}