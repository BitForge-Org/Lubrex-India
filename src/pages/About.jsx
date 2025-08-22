import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Award,
  Users,
  Droplets,
  Truck,
  Factory,
  ArrowRight,
  Star,
  Target,
  Heart,
  MapPin,
  Shield,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-black text-white py-20 px-4 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="mandala"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="2"
                  fill="currentColor"
                  opacity="0.3"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mandala)" />
          </svg>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&crop=center"
            alt="Industrial lubricants manufacturing"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-6"
              variants={fadeInUp}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Global Excellence • Local Expertise
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              About <span className="text-yellow-400">Lubrex India</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Pioneering advanced lubricant solutions across India with global
              excellence and local expertise for over 6 years
            </motion.p>

            <motion.div className="mt-8" variants={fadeInUp}>
              <div className="flex justify-center items-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">6+</div>
                  <div className="text-gray-400">Years in India</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">86+</div>
                  <div className="text-gray-400">Countries Served</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    1000+
                  </div>
                  <div className="text-gray-400">Satisfied Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Journey Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Journey in <span className="text-yellow-500">India</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Part of the global Lubrex FZC family, we've established ourselves
              as India's trusted authorized dealer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6" variants={slideInLeft}>
              {/* Global Heritage Card */}
              <div className="bg-white border-2 border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">
                      Global Heritage
                    </h3>
                    <p className="text-yellow-600 font-semibold">
                      Lubrex FZC, UAE
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Backed by Lubrex FZC's international expertise and proven
                  track record in lubricant manufacturing and distribution
                  across global markets.
                </p>
              </div>

              {/* Kerala Establishment Card */}
              <div className="bg-white border-2 border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-black p-3 rounded-full mr-4">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">
                      6 Years Strong
                    </h3>
                    <p className="text-yellow-600 font-semibold">
                      Kerala, South India
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Established in Kerala, we've been serving South India with
                  dedication, building lasting relationships and delivering
                  consistent quality.
                </p>
              </div>

              {/* Authorized Supplier Card */}
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">
                      Authorized Supplier
                    </h3>
                    <p className="text-yellow-700 font-semibold">
                      80+ Countries Distribution
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  As India's authorized supplier, we support global distribution
                  networks, ensuring quality products reach markets worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div className="relative" variants={slideInRight}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center"
                  alt="Lubrex manufacturing facility"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Quality Excellence
                  </h3>
                  <p className="text-gray-200">
                    Trusted by industries across India for superior performance
                  </p>
                </div>
                <div className="absolute top-6 right-6 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                  ★ Premium Quality
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="py-20 px-4 bg-yellow-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Core <span className="text-yellow-600">Values</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that drive our commitment to excellence and
              customer success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center group bg-white rounded-2xl p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-600 transition-colors duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Satisfaction
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We prioritize customer satisfaction above all, ensuring every
                interaction exceeds expectations and builds lasting
                partnerships.
              </p>
            </motion.div>

            <motion.div
              className="text-center group bg-white rounded-2xl p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                <Star className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Quality</h3>
              <p className="text-gray-700 leading-relaxed">
                Uncompromising quality standards ensure our products deliver
                superior performance and reliability in every application.
              </p>
            </motion.div>

            <motion.div
              className="text-center group bg-white rounded-2xl p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-600 transition-colors duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Passion</h3>
              <p className="text-gray-700 leading-relaxed">
                Our passion for innovation and excellence drives us to
                continuously improve and deliver cutting-edge lubricant
                solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Product Launch Section */}
      <motion.section
        className="py-20 px-4 bg-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&crop=center"
                  alt="Modern automotive industry in India"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-3">
                    New Launch 2024
                  </div>
                  <h3 className="text-2xl font-bold">Made for India</h3>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight}>
              <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Factory className="w-4 h-4 mr-2" />
                New Product Range
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Solutions for{" "}
                <span className="text-yellow-400">Indian Conditions</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Introducing our new range of automotive and industrial oils,
                specially formulated to excel in India's diverse climate and
                operating conditions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4">
                  <Users className="w-8 h-8 mb-3 text-yellow-400" />
                  <h4 className="font-bold mb-2 text-white">
                    Automotive Range
                  </h4>
                  <p className="text-sm text-gray-300">
                    Premium engine oils for Indian vehicles
                  </p>
                </div>

                <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4">
                  <Factory className="w-8 h-8 mb-3 text-yellow-400" />
                  <h4 className="font-bold mb-2 text-white">
                    Industrial Solutions
                  </h4>
                  <p className="text-sm text-gray-300">
                    Heavy-duty lubricants for manufacturing
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-gray-300">
                    Climate-optimized formulations
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-gray-300">
                    Enhanced performance and protection
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-gray-300">
                    Sustainable and eco-friendly solutions
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Future in India Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Future in <span className="text-yellow-600">India</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=600&fit=crop&crop=center"
                alt="Future of India manufacturing"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-6">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Globe className="w-8 h-8 text-black" />
                  </motion.div>

                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 italic">
                    "We are committed to contributing to the future of the
                    Indian market with advanced lubricant solutions that drive
                    progress, sustainability, and excellence across all
                    industries."
                  </blockquote>

                  <div className="flex flex-wrap justify-center gap-4">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                      Innovation-Driven
                    </span>
                    <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">
                      Sustainable Future
                    </span>
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                      Customer-Centric
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 px-4 bg-yellow-400 text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience Lubrex Quality?
          </h3>
          <p className="text-xl mb-8 text-gray-800">
            Discover how our advanced lubricant solutions can enhance your
            operations
          </p>
          <NavLink to="/contact">
            <motion.button
              className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-300 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>{" "}
          </NavLink>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
