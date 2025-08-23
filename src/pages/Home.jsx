import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Play,
  Star,
  Award,
  Globe,
  Users,
  Wrench,
  Truck,
  Factory,
  Ship,
  Car,
  Zap,
  Shield,
  Droplets,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      title: "Motorcycle Oil",
      description:
        "Take care of your engine and the environment with our motorcycle products designed for optimal performance and compliance.",
      icon: Ship,
      color: "from-black to-gray-800",
      image:
        "https://plus.unsplash.com/premium_photo-1661963079615-a3b4c7771b96?q=80&w=2206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Passenger Car Motor Oil (PCMO)",
      description:
        "Ensure your vehicle is a well-oiled machine throughout your journey with our high-quality lubricants including diesel & petrol engine oils.",
      icon: Car,
      color: "from-black to-gray-800",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
    },

    {
      title: "Industrial Gear Oil",
      description:
        "Machinery is the backbone of any industry and needs to be taken care of. Our wide range of industrial lubricants provides maximum protection.",
      icon: Factory,
      color: "from-black to-gray-800",
      image:
        "https://images.unsplash.com/photo-1524514587686-e2909d726e9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comingSoon: true,
    },
    {
      title: "X-trem Racing Series",
      description:
        "Go to the extreme with our X-trem range that is specifically formulated to grant your car the power and speed you need to win the race.",
      icon: Zap,
      color: "from-yellow-500 to-yellow-600",
      image:
        "https://images.unsplash.com/photo-1697271377983-2ee08a648026?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comingSoon: true,
    },
    {
      title: "Heavy Motor Oil",
      description:
        "Heavy-duty motor oils designed for commercial vehicles and industrial equipment requiring maximum protection and performance.",
      icon: Truck,
      color: "from-yellow-500 to-yellow-600",
      image:
        "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comingSoon: true,
    },
    {
      title: "Agricultural Oil",
      description:
        "Specially formulated for agricultural machinery, providing optimal protection and performance.",
      icon: Shield,
      color: "from-yellow-500 to-yellow-600",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crophttps://images.unsplash.com/photo-1571353589026-4d75e9f96ef8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comingSoon: true,
    },
  ];

  const services = [
    {
      title: "Top-Quality Base Oils",
      description:
        "Lubrex offers top-quality base oils for lubricant blenders around the world.",
      icon: Droplets,
      link: "/products",
    },
    {
      title: "Certification ",
      description:
        "We help lower costs, improve productivity, enhance equipment efficiency through our certification .",
      icon: Wrench,
      link: "/certificates",
    },
    {
      title: "Smart Oil Finder",
      description:
        "Find the oil you need with our smart helper that will guide you to the best lubricant solution for your usage.",
      icon: Award,
      link: "https://lubrex-are.lubricantadvisor.com/en",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&h=1080&fit=crop"
            alt="Lubrex Manufacturing"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent animate-fade-in">
              LUBREX
            </div>
            <div className="text-lg md:text-xl text-gray-600 mt-2 font-medium">
              INDIA
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black animate-fade-in-delay">
            Leading Lubricants
            <br />
            <span className="text-3xl md:text-5xl bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Authorized Distributor
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-black animate-fade-in-delay-2 max-w-4xl mx-auto leading-relaxed">
            Established as the flag bearer in India with 6 years in the Indian
            market, supplying high-end lubricants and greases to meet the
            ever-growing needs of our clients across 86+ countries.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-delay-3">
            <NavLink
              to="/products"
              className="group bg-gradient-to-r from-black to-gray-800 px-10 py-5 rounded-full text-lg font-semibold text-white hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
            >
              Explore Products
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </NavLink>

            {/* <button className="group flex items-center space-x-3 text-lg text-black hover:text-yellow-600 transition-colors">
              <div className="w-14 h-14 border-2 border-black group-hover:border-yellow-600 rounded-full flex items-center justify-center transition-colors">
                <Play
                  className="ml-1 text-black group-hover:text-yellow-600"
                  size={24}
                />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </button> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "20+",
                label: "OEM Approvals",
                icon: Award,
                color: "from-yellow-500 to-yellow-600",
              },
              {
                number: "6",
                label: "Years in Indian Market",
                icon: Star,
                color: "from-black to-gray-800",
              },
              {
                number: "86+",
                label: "Countries",
                icon: Globe,
                color: "from-yellow-500 to-yellow-600",
              },
              {
                number: "2005",
                label: "Established",
                icon: Users,
                color: "from-black to-gray-800",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-black">
                  {stat.number}
                </div>
                <div className="text-black font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section
        id="products"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-black">
              Our Product Range
            </h2>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              From racing performance to industrial protection, we offer
              comprehensive lubricant solutions for every need across
              automotive, industrial, and marine applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  {product.image ? (
                    <>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">🏗️</div>
                        <div className="text-gray-500 font-medium">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                  )}

                  <div
                    className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center shadow-lg`}
                  >
                    <product.icon size={24} className="text-white" />
                  </div>

                  {product.comingSoon && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      COMING SOON
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-yellow-600 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-black mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <NavLink
                    to="/products"
                    className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    View Products
                    <ChevronRight size={20} className="ml-2" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/products"
              className="bg-gradient-to-r from-black to-gray-800 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop"
                alt="Lubrex Manufacturing Facility"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-3xl"></div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-red-600">
                  <span className="text-[#81C4FF]">B</span>
                  <span className="text-[#16588E]">M</span>
                  <span className="text-[#E7222E]">W</span>
                </div>
                <div className="text-gray-600">Approved</div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-orange-600">ISO</div>
                <div className="text-gray-600">Certified</div>
              </div>
            </div>

            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
                About Lubrex India
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Lubrex India is a leading authorized dealer of lubrex,
                established as the flag bearer in India of a group of lubricant
                manufacturing oil exporting companies with decades of
                experience, supplying high-end lubricants and greases to meet
                the ever-growing needs of our clients.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our quality standards are unparalleled as we have been awarded
                20 OEM approvals from the world's leading automotive
                manufacturers, including BMW, Mercedes, Volvo, and many more.
                With 6 years of dedicated service in the Indian market, we
                continue to expand our reach across 86+ countries.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "BMW Approved",
                  "Mercedes Certified",
                  "Volvo Partner",
                  "ISO Certified",
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-100 px-4 py-3 rounded-2xl text-center font-semibold text-red-700"
                  >
                    {badge}
                  </div>
                ))}
              </div>

              <a
                href="/about"
                className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud of our relationships with customers from around the
              world and in every industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                {service.link &&
                  (service.link.startsWith("/") ? (
                    <NavLink
                      to={service.link}
                      className="mt-6 text-red-600 hover:text-red-700 font-semibold inline-block"
                    >
                      Find Out More →
                    </NavLink>
                  ) : (
                    <a
                      href={service.link}
                      className="mt-6 text-red-600 hover:text-red-700 font-semibold inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find Out More →
                    </a>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Distributor CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
                Join our success drive as a
                <span className="block text-red-600">distributor</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Success is built on partnerships. Being our distributor means
                you can benefit from a wide array of attractive offers,
                including our online and offline marketing support, knowledge
                transfer, promotional items, and attractive incentives.
              </p>

              <p className="text-lg text-gray-600 mb-10">
                Be a representative of India's leading lubricant and grease
                manufacturer.
              </p>

              <NavLink
                to="/become-distributor"
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Become a Distributor
              </NavLink>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop"
                alt="Distributor Partnership"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s both;
        }
      `}</style>
    </div>
  );
};

export default Home;
