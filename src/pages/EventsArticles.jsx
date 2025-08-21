import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Clock, Users } from "lucide-react";

const EventsAndArticles = () => {
  // Event data
  const event = {
    id: 1,
    title: "Upcoming Event",
    location: "XYZ Mall, xyz street, Pune",
    date: "Saturday, 23rd August",
    time: "10:00 AM - 6:00 PM",
    attendees: "200+",
    image:
      "https://images.unsplash.com/photo-1646527825581-32132b571fdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Featured",
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Events & <span className="text-yellow-500">Articles</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover upcoming events and engaging articles that will inspire and
            educate you
          </p>
        </motion.div>

        {/* Single Event Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-yellow-500 transition-colors duration-300"
          >
            {/* Event Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {event.category}
                </span>
              </div>
            </div>

            {/* Card Header */}
            <div className="bg-black p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                {event.title}
              </h3>
            </div>

            {/* Card Body */}
            <div className="p-8">
              {/* Location */}
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-bold text-base">Location</p>
                  <p className="text-gray-600 text-base">{event.location}</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-start space-x-3 mb-6">
                <Calendar className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-bold text-base">Date</p>
                  <p className="text-gray-600 text-base">{event.date}</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600 text-base">{event.time}</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600 text-base">
                    {event.attendees}
                  </span>
                </div> */}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex-1 bg-black hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2 group"
                >
                  <MapPin className="h-5 w-5 group-hover:bounce transition-all duration-300" />
                  <span>Locate</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 bg-black rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Miss Out!
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Stay updated with the latest events and articles. Join our community
            today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-lg"
          >
            Subscribe Now
          </motion.button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default EventsAndArticles;
