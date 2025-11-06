"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, TrendingUp, Users, Target, ChevronDown, Play, BookOpen, Video } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const AboutPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const investments = [
    {
      country: "🇺🇸 United States",
      description: "Active Markets",
      flag: "🇺🇸",
    },
    {
      country: "🇰🇪 Kenya",
      description: "Real Estate & Ventures",
      flag: "🇰🇪",
    },
    {
      country: "🇨🇴 Colombia",
      description: "Strategic Investments",
      flag: "🇨🇴",
    },
    {
      country: "🇩🇴 Dominican Republic",
      description: "Luxury Properties",
      flag: "🇩🇴",
    },
  ];

  const milestones = [
    {
      year: "2005",
      title: "The Beginning",
      description: "Started first business venture and began investing journey"
    },
    {
      year: "2012",
      title: "Global Expansion",
      description: "Expanded investments internationally across multiple markets"
    },
    {
      year: "2018",
      title: "Life by Design Launch",
      description: "Created the platform to share knowledge and build community"
    },
    {
      year: "2024",
      title: "200K+ Community",
      description: "Reached over 200,000 subscribers building generational wealth"
    }
  ];

  const resources = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "YouTube Channel",
      description: "200K+ subscribers learning about wealth building",
      stat: "500+ Videos"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Blog & Resources",
      description: "In-depth articles and actionable insights",
      stat: "100+ Articles"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Coaching Programs",
      description: "One-on-one guidance for legacy builders",
      stat: "1000+ Clients"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation/>

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
            The Story Behind Life by Design
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            About Us
          </motion.h1>

          <motion.p
            className="text-xl mb-4 text-gray-300 max-w-3xl"
          >
            Discover the journey that led to the creation of Life By Design
          </motion.p>

          <blockquote className="border-l-4 border-yellow-500 w-fit px-2 pl-4 py-2 bg-gray-700/40 rounded-r-lg">
            <p className="text-gray-300 italic">
              &quot;Wealth isn&apos;t about accumulation — it&apos;s about alignment. When your purpose,
              health, and relationships are in harmony, success follows naturally.&quot;
            </p>
          </blockquote>
        </div>
      </motion.section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Global Vision for Wealth & Legacy
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Tim Booker is a real estate investor, entrepreneur, and legacy
                  builder dedicated to helping others create wealth with purpose
                  and live well, wherever they are in the world. With over two
                  decades of business leadership and global investing experience,
                  Tim owns and operates ventures across the U.S., Kenya,
                  Colombia, and the Dominican Republic.
                </p>
                <p>
                  From the vibrant energy of Nairobi, to the coastal luxury of
                  the DR, to the mountain views of Medellín, Tim explores and
                  documents how to design a life of freedom, healing, and
                  ownership. His platform bridges business, culture, and
                  wellness, showing how you can build generational wealth and
                  live beautifully at the same time.
                </p>
                <p>
                  Whether he&apos;s mentoring rising entrepreneurs, investing in real
                  estate, or building community across the diaspora, Tim&apos;s
                  message is clear:
                </p>
                <blockquote className="border-l-4 border-yellow-600 pl-4 italic text-lg text-gray-900 my-6">
                  &quot;You can live well. You can own your future. And you can build
                  a legacy that lasts.&quot;
                </blockquote>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1000&fit=crop"
                alt="Tim Booker"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global Investment Portfolio */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Investment Portfolio
            </h2>
            <p className="text-gray-600 text-lg">
              Building wealth across four countries
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {investments.map((investment, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className=" rounded-xl p-6 border border-gray-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{investment.flag}</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {investment.country.replace(investment.flag, "").trim()}
                </h3>
                <p className="text-yellow-600 font-semibold">
                  {investment.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Key milestones in building Life by Design
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-300 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                      <div className="text-yellow-600 font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block">
                    <div className="w-6 h-6 z-10 bg-green-300 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* FAQs Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about Life by Design
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            <FAQItem 
              question="What is the 4 Pillars Framework?"
              answer="The 4 Pillars Framework is our comprehensive approach to building generational wealth. It integrates Financial Wealth (the engine), Health Wealth (the vehicle), Spiritual & Purpose Wealth (the compass), and Family & Community Wealth (the power source) to create lasting prosperity across generations."
            />
            <FAQItem 
              question="Who is Life by Design for?"
              answer="Life by Design is for entrepreneurs, investors, and individuals who want to build generational wealth while living purposefully. Whether you're just starting your wealth journey or looking to scale your existing investments, our framework and community support your growth at every stage."
            />
            <FAQItem 
              question="How can I work with Tim Booker?"
              answer="Tim offers one-on-one coaching, group mastermind programs, and speaking engagements. Discovery sessions help determine the best fit for your goals. You can also learn through our YouTube channel, blog, and free resources before committing to a program."
            />
            <FAQItem 
              question="Do I need investment experience to get started?"
              answer="No prior investment experience is required. Our framework starts with mindset, purpose, and foundational principles before diving into specific investment strategies. We meet you where you are and provide guidance appropriate for your level."
            />
            <FAQItem 
              question="What makes Life by Design different?"
              answer="Unlike traditional wealth-building programs that focus solely on money, we integrate all aspects of wealth—financial, health, spiritual, and family. This holistic approach creates sustainable success and ensures your wealth serves a purpose beyond accumulation."
            />
            <FAQItem 
              question="How do I stay connected with the community?"
              answer="Join our YouTube community with 200K+ subscribers, follow us on social media, subscribe to our newsletter, and participate in our events and programs. We're building a global network of legacy builders who support each other's growth."
            />
          </motion.div>
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

      <Footer/>
    </div>
  );
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-start justify-between gap-4"
      >
        <span className="font-semibold text-gray-900 flex-1">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="text-yellow-600" size={20} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutPage;