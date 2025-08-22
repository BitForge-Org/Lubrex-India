import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  Globe,
  ArrowRight,
  CheckCircle,
  Handshake,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

const BecomeDistributor = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    productTypes: "",
    telephone: "",
    businessModel: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitDistributorApplication(formData);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        productTypes: "",
        telephone: "",
        businessModel: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitDistributorApplication = async (data) => {
    await fetch("https://formspree.io/f/xnnzebbp", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { Accept: "application/json" },
    });
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-lg mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Handshake className="w-12 h-12 text-yellow-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Application Submitted!
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Thank you for your interest in becoming a Lubrex distributor. Our
            partnership team will review your application and contact you within
            2-3 business days.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-300"
          >
            Submit Another Application
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-black text-white py-20 px-4 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="distributor-pattern"
                x="0"
                y="0"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="2"
                  fill="currentColor"
                  opacity="0.3"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#distributor-pattern)" />
          </svg>
        </div>

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop&crop=center"
            alt="Business partnership handshake"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-6"
              variants={fadeInUp}
            >
              <Handshake className="w-4 h-4 mr-2" />
              Partnership Opportunities
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Become a <span className="text-yellow-400">Distributor</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Partner with Lubrex India and grow your business with quality
              lubricant products and dedicated support.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
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
              Why Partner with <span className="text-yellow-600">Lubrex?</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center group bg-white rounded-2xl p-6 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Quality Products
              </h3>
              <p className="text-gray-600 text-sm">
                Premium lubricants with proven performance and reliability
              </p>
            </motion.div>

            <motion.div
              className="text-center group bg-white rounded-2xl p-6 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Dedicated Support
              </h3>
              <p className="text-gray-600 text-sm">
                Complete support and training for your business success
              </p>
            </motion.div>

            <motion.div
              className="text-center group bg-white rounded-2xl p-6 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Growth Opportunity
              </h3>
              <p className="text-gray-600 text-sm">
                Competitive margins and business growth potential
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Application Form Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Side - Info & Image */}
            <motion.div className="lg:col-span-1" variants={slideInLeft}>
              <h2 className="text-3xl font-bold text-black mb-8">
                Start Your <span className="text-yellow-600">Journey</span>
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mb-8"></div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Quick Process</h3>
                    <p className="text-gray-600 text-sm">
                      Simple application with fast response
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Full Support</h3>
                    <p className="text-gray-600 text-sm">
                      Training and ongoing business support
                    </p>
                  </div>
                </div>
              </div>

              {/* Partnership Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
                  alt="Business partnership meeting"
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>

            {/* Right Side - Application Form */}
            <motion.div className="lg:col-span-2" variants={slideInRight}>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-black mb-6">
                  Distributor Application
                </h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-black mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Types of Products you are dealing with? *
                    </label>
                    <select
                      name="productTypes"
                      value={formData.productTypes}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="lubricants-greases">Lubricants</option>

                      <option value="bikes-cars">Bikes or Cars</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Telephone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                        placeholder="Enter your telephone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Please tell us about your Business Model? *
                    </label>
                    <select
                      name="businessModel"
                      value={formData.businessModel}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="importer">Importer</option>
                      <option value="local-distributor">
                        Local Distributor
                      </option>
                      <option value="importer-distributor">
                        Importer and distributor
                      </option>
                      <option value="wholesaler">Wholesaler</option>
                      <option value="retailer">Retailer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell us about your business experience and goals..."
                      ></textarea>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-black text-yellow-400 py-4 px-6 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-400 mr-2"></div>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 px-4 bg-yellow-400 text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Partner with Lubrex?
          </h3>
          <p className="text-xl mb-8 text-gray-800">
            Contact us today to start your distributor application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+919876543210"
              className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-300 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </motion.a>
            <motion.a
              href="mailto:contact@lubrexindia.in"
              className="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-yellow-400 transition-all duration-300 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BecomeDistributor;
