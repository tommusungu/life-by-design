'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, TrendingUp, Bookmark, Share2, Tag, Play } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
}

const categories = ['All', 'Financial Wealth', 'Health Wealth', 'Spiritual Growth', 'Family & Community', 'Life by Design'];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Generational Wealth Through Real Estate: A Complete Guide',
    excerpt: 'Discover proven strategies for creating lasting wealth through strategic real estate investments that can benefit your family for generations to come.',
    author: 'Tim Booker',
    date: 'November 3, 2025',
    readTime: '8 min read',
    category: 'Financial Wealth',
    tags: ['Real Estate', 'Investment', 'Wealth Building'],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    featured: true
  },
  {
    id: 2,
    title: 'The Power of Morning Routines: How Successful People Start Their Day',
    excerpt: 'Learn how implementing a powerful morning routine can transform your productivity, health, and overall success in life.',
    author: 'Tim Booker',
    date: 'October 28, 2025',
    readTime: '6 min read',
    category: 'Health Wealth',
    tags: ['Habits', 'Productivity', 'Wellness'],
    imageUrl: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800&q=80'
  },
  {
    id: 3,
    title: 'Finding Your Life Purpose: A Framework for Meaningful Living',
    excerpt: 'Explore a practical framework for discovering your true purpose and aligning your daily actions with your deepest values.',
    author: 'Tim Booker',
    date: 'October 25, 2025',
    readTime: '10 min read',
    category: 'Spiritual Growth',
    tags: ['Purpose', 'Values', 'Legacy'],
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80'
  },
  {
    id: 4,
    title: 'Estate Planning 101: Protecting Your Family\'s Future',
    excerpt: 'Essential strategies for creating a comprehensive estate plan that ensures your wealth and values are passed down effectively.',
    author: 'Tim Booker',
    date: 'October 20, 2025',
    readTime: '7 min read',
    category: 'Family & Community',
    tags: ['Estate Planning', 'Legacy', 'Family'],
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80'
  },
  {
    id: 5,
    title: 'The 4 Pillars Framework: Integrating All Aspects of Wealth',
    excerpt: 'Deep dive into how financial, health, spiritual, and family wealth work together to create lasting generational prosperity.',
    author: 'Tim Booker',
    date: 'October 15, 2025',
    readTime: '12 min read',
    category: 'Life by Design',
    tags: ['Framework', '4 Pillars', 'Wealth'],
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
  },
  {
    id: 6,
    title: 'Nutrition Strategies for High Performers',
    excerpt: 'Science-backed nutrition principles that fuel sustained energy, mental clarity, and peak physical performance.',
    author: 'Tim Booker',
    date: 'October 10, 2025',
    readTime: '9 min read',
    category: 'Health Wealth',
    tags: ['Nutrition', 'Health', 'Performance'],
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80'
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
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
            Insights & Resources
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            The Life by Design Blog
          </motion.h1>

          <motion.p
            className="text-xl mb-8 text-gray-300 max-w-3xl"
          >
            Actionable insights on building generational wealth, living with purpose, and creating a lasting legacy.
          </motion.p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchQuery && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="text-yellow-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
              </div>
              <FeaturedPostCard post={featuredPost} />
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
            </div>
          )}
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

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
    >
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative h-64 lg:h-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          </div>
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-yellow-600 font-semibold group-hover:gap-4 transition-all">
            Read Article
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className=" overflow-hidden   transition-all group cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover  rounded-xl group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <Bookmark size={18} className="text-gray-700" />
          </button>
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <Share2 size={18} className="text-gray-700" />
          </button>
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={14} />
            {post.date}
          </div>
          <div className="flex items-center gap-1 text-yellow-600 font-semibold text-sm group-hover:gap-2 transition-all">
            Read More
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}