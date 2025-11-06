"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, Users, CheckCircle, ArrowRight, Play, DollarSign, Target, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";

const BookSessionPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    preferredDate: "",
    preferredTime: "",
    timezone: "",
    goals: "",
    experience: "",
    heardFrom: "",
  });

  const [submitted, setSubmitted] = useState(false);

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
        staggerChildren: 0.15,
      },
    },
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sessionTypes = [
    {
      title: "1-on-1 Strategy Call",
      duration: "60 minutes",
      description: "Deep dive into your financial goals and create a personalized roadmap",
      icon: Users,
    },
    {
      title: "Real Estate Consultation",
      duration: "90 minutes",
      description: "Explore investment opportunities and strategies for building wealth through real estate",
      icon: TrendingUp,
    },
    {
      title: "Business Growth Session",
      duration: "60 minutes",
      description: "Scale your business and maximize profitability with proven strategies",
      icon: Target,
    },
    {
      title: "Wealth Planning Review",
      duration: "45 minutes",
      description: "Comprehensive review of your current financial position and optimization opportunities",
      icon: DollarSign,
    },
  ];

  return (
    <div className="min-h-screen ">
<Navigation/>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 mt-20  px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            
            className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6"
          >
            Limited Availability
          </motion.div>

          <motion.h1  className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Book a Session with Tim
          </motion.h1>

          <motion.p  className="text-xl text-gray-300 max-w-3xl">
            Take the first step toward designing the life you deserve. Get personalized guidance from Tim Booker.
          </motion.p>
        </div>
      </motion.section>

      {/* Session Types */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2  className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Choose Your Session Type
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {sessionTypes.map((session, index) => (
                <motion.div
                  key={index}
                  
                  className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:border-2 border-transparent hover:border-black cursor-pointer"
                  onClick={() => setFormData({ ...formData, sessionType: session.title })}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-600 text-white rounded-lg p-3 flex-shrink-0">
                      <session.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{session.title}</h3>
                        {formData.sessionType === session.title && (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{session.description}</p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                        <Clock className="w-4 h-4" />
                        {session.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2  className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Complete Your Booking
            </motion.h2>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-green-800 font-semibold">
                  Success! Your booking request has been submitted. We&apos;ll contact you within 24 hours to confirm your session.
                </p>
              </motion.div>
            )}

            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-lg">
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>

                {/* Session Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Session Details</h3>
                  
                  <div className="mb-4">
                    <label htmlFor="sessionType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Session Type *
                    </label>
                    <select
                      id="sessionType"
                      name="sessionType"
                      value={formData.sessionType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                      required
                    >
                      <option value="">Select a session type</option>
                      {sessionTypes.map((session, index) => (
                        <option key={index} value={session.title}>
                          {session.title} ({session.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                        required
                      >
                        <option value="">Select a time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="timezone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Timezone *
                    </label>
                    <select
                      id="timezone"
                      name="timezone"
                      value={formData.timezone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                      required
                    >
                      <option value="">Select your timezone</option>
                      <option value="EST">Eastern Time (EST)</option>
                      <option value="CST">Central Time (CST)</option>
                      <option value="MST">Mountain Time (MST)</option>
                      <option value="PST">Pacific Time (PST)</option>
                      <option value="EAT">East Africa Time (EAT)</option>
                      <option value="GMT">Greenwich Mean Time (GMT)</option>
                      <option value="CET">Central European Time (CET)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tell Us More</h3>
                  
                  <div className="mb-4">
                    <label htmlFor="goals" className="block text-sm font-semibold text-gray-700 mb-2">
                      What are your main goals for this session? *
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none bg-white"
                      placeholder="I want to learn about real estate investing, build passive income streams, etc."
                      required
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Experience Level
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner - Just starting out</option>
                      <option value="intermediate">Intermediate - Some experience</option>
                      <option value="advanced">Advanced - Experienced investor/entrepreneur</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="heardFrom" className="block text-sm font-semibold text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="heardFrom"
                      name="heardFrom"
                      value={formData.heardFrom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="youtube">YouTube</option>
                      <option value="podcast">Podcast</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="search">Search Engine</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-colors font-bold text-lg flex items-center justify-center gap-2 mt-8"
                >
                  Book Your Session
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <p className="text-sm text-gray-600 text-center mt-4">
                  * By submitting this form, you agree to be contacted about your session booking.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2  className="text-3xl font-bold text-yellow-600 mb-12 text-center">
              What to Expect
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div  className="text-center">
                <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confirmation</h3>
                <p className="text-gray-600">
                  We&apos;ll review your request and send a confirmation email within 24 hours with your Zoom link.
                </p>
              </motion.div>

              <motion.div  className="text-center">
                <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Preparation</h3>
                <p className="text-gray-600">
                  You&apos;ll receive a brief questionnaire to help us prepare for a productive session.
                </p>
              </motion.div>

              <motion.div  className="text-center">
                <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Your Session</h3>
                <p className="text-gray-600">
                  Join your personalized session and get actionable strategies to achieve your goals.
                </p>
              </motion.div>
            </div>
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
              Join the Community
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to Life By Design and get weekly insights on building wealth and living with purpose
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
    </div>
  );
};

export default BookSessionPage;