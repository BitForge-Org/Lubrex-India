import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Car,
  Bike,
  Truck,
  Cog,
  Droplets,
  Shield,
  Zap,
  Thermometer,
  CheckCircle,
  ArrowRight,
  Package,
  Info,
  Star,
  Clock,
  Award,
  Settings,
} from "lucide-react";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("automotive");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Product categories with realistic automotive images
  const categories = [
    {
      id: "automotive",
      name: "Automotive Lubricants",
      icon: Car,
      status: "available",
      description: "Premium engine oils for passenger cars and light vehicles",
      color: "yellow",
      bgImage:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "motorcycle",
      name: "Motorcycle",
      icon: Bike,
      status: "available",
      description: "High-performance oils for motorcycles and scooters",
      color: "yellow",
      bgImage:
        "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "xtrem",
      name: "LUBREX X-Trem",
      icon: Star,
      status: "coming",
      description: "Ultimate performance lubricants for extreme conditions",
      color: "red",
      bgImage:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "agriculture",
      name: "Agriculture",
      icon: Truck,
      status: "coming",
      description: "Specialized lubricants for agricultural equipment",
      color: "gray",
      bgImage:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "heavy",
      name: "Heavy Motor",
      icon: Truck,
      status: "coming",
      description: "Heavy-duty lubricants for commercial vehicles",
      color: "gray",
      bgImage:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "industrial",
      name: "Industrial",
      icon: Cog,
      status: "coming",
      description: "Industrial-grade lubricants and greases",
      color: "gray",
      bgImage:
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Automotive products with real Lubrex data
  const automotiveProducts = [
    {
      id: 1,
      name: "VELOCITY NANO PLUS API SN/CF SAE 5W-30",
      packing: "1L, 4L, 5L, 20L, 25L, 208L",
      series: "Velocity Nano Plus",
      viscosity: "5W-30",
      api: "SN/CF",
      type: "Fully Synthetic",
      description:
        "Advanced fully synthetic engine oil designed to deliver outstanding engine protection in recent cars fitted with Gasoline and Diesel engines, naturally aspirated or turbo-charged, indirect or direct injection.",
      features: [
        "Quick cold weather starting and fast protection",
        "Outstanding thermal and oxidation stability",
        "Optimum viscosity control",
        "Improved deposit protection",
        "Better wear protection",
        "Excellent low temperature performance",
      ],
      applications: [
        "All high performance gasoline engines",
        "Direct-injection engines",
        "Multi-valve engines",
        "Turbo-charged technologies",
        "Diesel engines",
      ],
      approvals: [
        "MB-Approval 229.5",
        "VW Standard 502 00 /505 00",
        "BMW LL-01",
      ],
      performance: ["API SN/CF", "ACEA A3/B4", "RENAULT RN0700 RN0710"],
      image:
        "https://lubrex.net/wp-content/uploads/2022/03/VELOCITY-NANO-PLUS-5W-40-768x768.webp",
      productImage:
        "https://lubrex.net/wp-content/uploads/2022/03/VELOCITY-NANO-PLUS-5W-40-768x768.webp",
    },
    {
      id: 2,
      name: "VELOCITY NANO PLUS API SN/CF SAE 5W-40",
      packing: "1L, 4L, 5L, 20L, 25L, 208L",
      series: "Velocity Nano Plus",
      viscosity: "5W-40",
      api: "SN/CF",
      type: "Fully Synthetic",
      description:
        "Advanced fully synthetic engine oil with wide temperature range protection, ideal for European vehicles and turbocharged engines.",
      features: [
        "Wide temperature range protection",
        "Superior engine protection",
        "Outstanding deposit control",
        "Enhanced engine cleanliness",
        "Quick cold weather starting",
        "Optimized for turbo-charged engines",
      ],
      applications: [
        "European vehicles",
        "Turbocharged engines",
        "Direct injection engines",
        "High-performance gasoline engines",
        "Diesel engines",
      ],
      approvals: [
        "MB-Approval 229.5",
        "VW Standard 502 00 /505 00",
        "Porsche Oil Category A40",
      ],
      performance: [
        "API SN/CF",
        "ACEA A3/B4",
        "Porsche A40",
        "MB 226.5 229.3 229.5",
        "PSA B71 2296",
      ],
      image:
        "https://lubrex.net/wp-content/uploads/2022/03/VELOCITY-NANO-PLUS-5W-30-768x768.webp",
      productImage:
        "https://lubrex.net/wp-content/uploads/2022/03/VELOCITY-NANO-PLUS-5W-30-768x768.webp",
    },
    {
      id: 3,
      name: "VELOCITY NANO RX API SN/CF SAE 5W-30",
      packing: "1L, 4L, 5L, 20L, 208L",
      series: "Velocity Nano RX",
      viscosity: "5W-30",
      api: "SN/CF",
      type: "High Performance Synthetic",
      description:
        "Racing-grade high performance synthetic engine oil engineered for extreme conditions and superior protection.",
      features: [
        "Racing grade performance",
        "Superior thermal stability",
        "Enhanced protection under stress",
        "Quick cold starts",
        "Maximum power output",
        "Extended drain intervals",
      ],
      applications: [
        "High-performance vehicles",
        "Sports cars",
        "Racing applications",
        "Performance enthusiasts",
      ],
      approvals: ["Racing specification", "High performance standards"],
      performance: ["API SN/CF", "Racing standards", "Performance certified"],
      image:
        "https://lubrex.net/wp-content/uploads/2022/09/VELOCITY-NANO-EC-PLUS-5W-40-768x768.webp",
      productImage:
        "https://lubrex.net/wp-content/uploads/2022/09/VELOCITY-NANO-EC-PLUS-5W-40-768x768.webp",
    },
    {
      id: 4,
      name: "VELOCITY NANO PLUS API SN/CF SAE 0W-20",
      packing: "1L, 4L, 5L, 20L, 25L, 208L",
      series: "Velocity Nano Plus",
      viscosity: "0W-20",
      api: "SN/CF",
      type: "Ultra Low Viscosity Synthetic",
      description:
        "Ultra-low viscosity fully synthetic oil designed for maximum fuel economy in modern engines.",
      features: [
        "Maximum fuel economy benefits",
        "Ultra-low viscosity technology",
        "Excellent cold weather performance",
        "Modern engine protection",
        "Enhanced fuel efficiency",
        "Superior low-temperature flow",
      ],
      applications: [
        "Modern gasoline engines",
        "Hybrid vehicles",
        "Fuel-efficient cars",
        "Latest technology engines",
      ],
      approvals: ["API License SAE 0W-20"],
      performance: ["API SN/CF", "ACEA A3/B4", "Latest fuel economy standards"],
      image:
        "https://lubrex.net/wp-content/uploads/2022/09/VELOCITY-NANO-EC-PLUS-0W-20.webp",
      productImage:
        "https://lubrex.net/wp-content/uploads/2022/09/VELOCITY-NANO-EC-PLUS-0W-20.webp",
    },
    {
      id: 5,
      name: "VELOCITY NANO PLUS API SN/CF SAE 0W-40",
      packing: "1L, 4L, 5L, 20L, 25L, 208L",
      series: "Velocity Nano Plus",
      viscosity: "0W-40",
      api: "SN/CF",
      type: "Full Range Synthetic",
      description:
        "Versatile fully synthetic oil with wide viscosity range for all-season protection.",
      features: [
        "Wide viscosity range protection",
        "All-season performance",
        "Premium synthetic technology",
        "Versatile application range",
        "Enhanced thermal stability",
        "Superior engine protection",
      ],
      applications: [
        "All-season use",
        "Variable climate conditions",
        "Multi-vehicle applications",
        "Wide temperature range",
      ],
      approvals: ["API License SAE 0W-40"],
      performance: ["API SN/CF", "ACEA A3/B4", "Multi-season standards"],
      image:
        "https://lubrex.net/wp-content/uploads/2022/09/VELOCITY-NANO-EC-PLUS-0W-40-768x768.webp",
      productImage:
        "https://lubrex.net/wp-content/uploads/2022/09/VELOCITY-NANO-EC-PLUS-0W-40-768x768.webp",
    },
    {
      id: 6,
      name: "VELOCITY NANO PRO API SN/RC SAE 0W-20",
      packing: "1L, 4L, 5L, 20L, 208L",
      series: "Velocity Nano Pro",
      viscosity: "0W-20",
      api: "SN/RC",
      type: "Professional Grade Synthetic",
      description:
        "Professional grade synthetic oil with resource conserving technology for commercial applications.",
      features: [
        "Professional grade formula",
        "Resource conserving technology",
        "Enhanced fuel economy",
        "Advanced additive package",
        "Extended service life",
        "Superior wear protection",
      ],
      applications: [
        "Professional use",
        "Fleet vehicles",
        "Commercial applications",
        "Service centers",
      ],
      approvals: [
        "Resource Conserving certification",
        "Professional standards",
      ],
      performance: ["API SN/RC", "Professional grade", "Fleet approved"],
      image:
        "https://lubrex.net/wp-content/uploads/2022/09/VELOCITY-NANO-EC-PLUS-0W-20.webp",
      productImage:
        "https://lubrex.net/wp-content/uploads/2022/09/VELOCITY-NANO-EC-PLUS-0W-20.webp",
    },
  ];

  // Motorcycle products
  const motorcycleProducts = [
    {
      id: 7,
      name: "RACE 4T NANO XP API SN SAE 10W-40",
      packing: "24X1L",
      series: "Race 4T Nano",
      viscosity: "10W-40",
      api: "SN",
      type: "4-Stroke Racing Oil",
      description:
        "High-performance 4-stroke motorcycle oil designed for racing conditions with superior protection and performance.",
      features: [
        "Racing grade performance",
        "High-speed protection",
        "Advanced gear protection",
        "Wet clutch compatible",
        "Superior thermal stability",
        "Enhanced anti-wear protection",
      ],
      applications: [
        "4-stroke motorcycles",
        "Racing bikes",
        "High-performance scooters",
        "Sport motorcycles",
      ],
      approvals: ["Motorcycle racing specifications", "JASO MA2 compatible"],
      performance: ["API SN", "JASO MA2", "Racing standards"],
      image:
        "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      productImage:
        "https://lubrex.net/wp-content/uploads/2025/05/RACE-4T-NANO-XP-20W-50-FS.png",
    },
    {
      id: 8,
      name: "RACE 4T NANO MAX API SM SAE 20W-40",
      packing: "24X1L",
      series: "Race 4T Nano Max",
      viscosity: "20W-40",
      api: "SM",
      type: "4-Stroke Maximum Protection",
      description:
        "Maximum protection 4-stroke motorcycle oil engineered for heavy-duty applications and extreme operating conditions.",
      features: [
        "Maximum engine protection",
        "High-load capacity performance",
        "Superior temperature stability",
        "Long-lasting protection",
        "Enhanced durability",
        "Heavy-duty formulation",
      ],
      applications: [
        "Heavy-duty motorcycles",
        "Touring bikes",
        "Commercial motorcycles",
        "Long-distance riding",
      ],
      approvals: ["Heavy-duty motorcycle specifications"],
      performance: [
        "API SM",
        "Heavy-duty standards",
        "Extended service intervals",
      ],
      image:
        "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      productImage:
        "https://lubrex.net/wp-content/uploads/2025/05/RACE-4T-NANO-XP-20W-50-FS.png",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  const getCurrentProducts = () => {
    switch (activeCategory) {
      case "automotive":
        return automotiveProducts;
      case "motorcycle":
        return motorcycleProducts;
      default:
        return [];
    }
  };

  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    // Prevent background scrolling when modal is open
    React.useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }, []);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-3xl w-full my-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative p-6 rounded-t-2xl text-white"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={product.productImage}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg border-2 border-yellow-500"
                  />
                  <div>
                    <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full uppercase">
                      {product.series}
                    </span>
                    <h2 className="text-xl font-bold text-white mt-1">
                      {product.name}
                    </h2>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-yellow-500 text-2xl font-bold ml-3"
              >
                ×
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center text-sm">
                  <Settings className="h-4 w-4 text-yellow-500 mr-2" />
                  Specifications
                </h3>
                <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Viscosity:</span>
                    <span className="font-bold text-black text-sm">
                      {product.viscosity}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">API Rating:</span>
                    <span className="font-bold text-black text-sm">
                      {product.api}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Type:</span>
                    <span className="font-bold text-black text-sm">
                      {product.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Packing:</span>
                    <span className="font-bold text-black text-sm">
                      {product.packing}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center text-sm">
                  <Award className="h-4 w-4 text-yellow-500 mr-2" />
                  Applications
                </h3>
                <ul className="space-y-1">
                  {product.applications.slice(0, 4).map((app, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center text-sm">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Zap className="h-3 w-3 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm">
                  OEM Approvals
                </h3>
                <div className="space-y-1">
                  {product.approvals.slice(0, 3).map((approval, index) => (
                    <div
                      key={index}
                      className="bg-green-50 text-green-800 text-xs px-2 py-1 rounded"
                    >
                      {approval}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm">
                  Performance Standards
                </h3>
                <div className="space-y-1">
                  {product.performance.slice(0, 3).map((perf, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {perf}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-black to-gray-800 rounded-lg text-white">
              <h4 className="font-bold mb-2 text-sm">Description</h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Dynamic Background */}
      <div
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Animated Particles/Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-500 rounded-full opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-yellow-500 to-white bg-clip-text text-transparent">
              LUBREX
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Products
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            >
              <span className="text-yellow-500 font-bold">
                Premium lubricants engineered for excellence.
              </span>{" "}
              Discover our comprehensive range of high-performance oils and
              lubricants designed for automotive, motorcycle, and industrial
              applications.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Products Section */}
      <div className="relative bg-gradient-to-b bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.id)}
                    disabled={category.status === "coming"}
                    className={`relative group overflow-hidden rounded-2xl font-semibold transition-all duration-300 min-h-64 ${
                      activeCategory === category.id
                        ? "ring-4 ring-yellow-500 shadow-2xl shadow-yellow-500/25"
                        : category.status === "available"
                        ? "hover:shadow-2xl hover:shadow-white/10"
                        : "cursor-not-allowed"
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${
                        category.id === "xtrem"
                          ? "rgba(220,38,38,0.9), rgba(239,68,68,0.7)"
                          : activeCategory === category.id
                          ? "rgba(234,179,8,0.9), rgba(245,158,11,0.7)"
                          : category.status === "available"
                          ? "rgba(0,0,0,0.8), rgba(0,0,0,0.6)"
                          : "rgba(75,85,99,0.8), rgba(107,114,128,0.6)"
                      }), url(${category.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="relative z-10 p-8 text-center h-full flex flex-col justify-center">
                      {category.status === "coming" && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs px-3 py-1 rounded-full font-bold">
                          {category.id === "xtrem"
                            ? "Launching Soon"
                            : "Coming Soon"}
                        </div>
                      )}

                      <div className="mb-4">
                        <IconComponent className="h-12 w-12 mx-auto text-white mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {category.name}
                        </h3>
                        <p className="text-white opacity-90 text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>

                      {category.id === "xtrem" && (
                        <div className="mt-4">
                          <span className="inline-flex items-center text-white font-bold">
                            View Products{" "}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:-translate-x-full"></div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Products Grid */}
          {["automotive", "motorcycle"].includes(activeCategory) && (
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getCurrentProducts().map((product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Product Image Header */}
                  <div
                    className="relative h-48 overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${product.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {product.series}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <img
                        src={product.productImage}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-xl border-2 border-white/50 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-yellow-500 transition-colors duration-300">
                      {product.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Thermometer className="h-4 w-4 text-yellow-500" />
                        <div>
                          <p className="text-xs text-gray-400">Viscosity</p>
                          <p className="text-sm font-bold text-white">
                            {product.viscosity}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-yellow-500" />
                        <div>
                          <p className="text-xs text-gray-400">API Rating</p>
                          <p className="text-sm font-bold text-white">
                            {product.api}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Package className="h-4 w-4 text-yellow-500" />
                      <div>
                        <p className="text-xs text-gray-400">Available in</p>
                        <p className="text-sm font-bold text-white">
                          {product.packing}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-3 mb-4">
                      <p className="text-yellow-500 text-sm font-semibold">
                        {product.type}
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                    >
                      <Info className="h-5 w-5" />
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Coming Soon Message */}
          {!["automotive", "motorcycle"].includes(activeCategory) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className="max-w-2xl mx-auto">
                {activeCategory === "xtrem" ? (
                  <>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="inline-block mb-8"
                    >
                      <Star className="h-20 w-20 text-red-500 mx-auto" />
                    </motion.div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                      LUBREX X-Trem
                    </h2>
                    <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                      Ultimate performance lubricants designed for the most
                      extreme conditions.
                      <br />
                      <span className="text-red-500 font-semibold">
                        Launching Soon
                      </span>{" "}
                      - Stay tuned for the revolution in lubricant technology.
                    </p>
                    <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-red-500/25">
                      <Star className="h-6 w-6 mr-2" />
                      View Products Coming Soon
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </div>
                  </>
                ) : (
                  <>
                    <Clock className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Coming Soon
                    </h2>
                    <p className="text-gray-300 text-lg mb-8">
                      We're working hard to bring you the best{" "}
                      {categories
                        .find((c) => c.id === activeCategory)
                        ?.name.toLowerCase()}{" "}
                      products.
                    </p>
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-xl font-bold inline-block">
                      Stay Tuned for Updates!
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div
              className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Background Animation */}
              <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-20"
                    animate={{
                      x: [0, 50, 0],
                      y: [0, -30, 0],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Why Choose{" "}
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                      LUBREX
                    </span>
                    ?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
                  <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                    Advanced fluid engineering solutions backed by decades of
                    experience and cutting-edge technology
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Shield,
                      title: "Premium Protection",
                      description:
                        "Advanced additive packages for maximum engine protection",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: Zap,
                      title: "High Performance",
                      description:
                        "Racing-grade formulations for superior performance",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      icon: Droplets,
                      title: "Quality Assured",
                      description:
                        "Rigorous testing and quality control processes",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: CheckCircle,
                      title: "Certified Excellence",
                      description:
                        "Multiple OEM approvals and industry certifications",
                      color: "from-yellow-500 to-orange-500",
                    },
                  ].map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className="group text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300"
                      >
                        <div
                          className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;
