import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Download,
  Shield,
  Star,
  CheckCircle,
  FileText,
  Search,
  Filter,
} from "lucide-react";

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Certificate categories and data
  const certificateCategories = [
    { id: "all", name: "All Certificates", icon: FileText, count: 32 },
    { id: "superbrand", name: "Superbrand", icon: Star, count: 1 },
    { id: "oem", name: "OEM Approvals", icon: Shield, count: 24 },
    { id: "api", name: "API & Others", icon: Award, count: 2 },
    { id: "iso", name: "ISO & Compliance", icon: CheckCircle, count: 5 },
  ];

  const certificates = [
    // Superbrand Certificate
    {
      id: 1,
      category: "superbrand",
      title: "LUBREX SUPERBRAND 2025",
      description:
        "Official Superbrand Certificate recognizing excellence in brand management",
      type: "Superbrand Award",
      year: "2025",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2025/05/LUBREX-2025-SUPERBRAND-CERTIFICATE.pdf",
    },

    // OEM Approvals
    {
      id: 2,
      category: "oem",
      title: "MB 229.52 5W-30",
      description: "Mercedes-Benz approval for LUBREX VELOCITY NANO MS 5W-30",
      type: "Mercedes-Benz",
      year: "2025",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2025/01/MB-Approval-229.52-for-LUBREX-VELOCITY-NANO-MS-5W-30.pdf",
    },
    {
      id: 3,
      category: "oem",
      title: "VOLVO Lubrex Momenta Nano 15W-40",
      description: "VOLVO VDS-3 approval for premium engine oil performance",
      type: "Volvo",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/07/VOLVO-VDS-3-APPROVAL-Lubrex-Momenta-Nano-15W-40.pdf",
    },
    {
      id: 4,
      category: "oem",
      title: "LUBREX JASO MA2 Approval",
      description:
        "Japanese Automotive Standards Organization approval for motorcycle oils",
      type: "JASO",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/06/LUBREX-JASO-MA2-Approval.pdf",
    },
    {
      id: 5,
      category: "oem",
      title: "LUBREX JASO MA2 AND JASO MB Approval",
      description:
        "Dual JASO certification for comprehensive motorcycle oil standards",
      type: "JASO",
      year: "2025",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2025/04/LUBREX-JASO-MA2-AND-JASO-MB-APPROVAL.pdf",
    },
    {
      id: 6,
      category: "oem",
      title: "DTFR 15B120 APPROVAL- LUBREX MOMENTA NANO XHPD 10W-40",
      description: "French railway approval for heavy-duty performance oil",
      type: "DTFR",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/05/DTFR-15B120-APPROVAL-LUBREX-MOMENTA-NANO-XHPD-10W-40.pdf",
    },
    {
      id: 7,
      category: "oem",
      title: "MB 229.51 APPROVAL-VELOCITY NANO GTR 5W-30",
      description: "Mercedes-Benz high-performance engine oil approval",
      type: "Mercedes-Benz",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/05/MB-229.51-APPROVAL-VELOCITY-NANO-GTR-5W-30.pdf",
    },
    {
      id: 8,
      category: "oem",
      title: "MB 229.5 APPROVAL- LUBREX VELOCITY NANO PLUS 5W-30",
      description: "Mercedes-Benz premium synthetic oil certification",
      type: "Mercedes-Benz",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/05/MB-229.5-APPROVAL-LUBREX-VELOCITY-NANO-PLUS-5W-30.pdf",
    },
    {
      id: 9,
      category: "oem",
      title: "Volvo VDS 3 10W-40 APPROVAL",
      description: "Volvo Drain Specification approval for commercial vehicles",
      type: "Volvo",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/VDS-3-APPROVAL-Lubrex_Momenta_Nano_10W-40_page-0001.pdf",
    },
    {
      id: 10,
      category: "oem",
      title: "DTFR 15C110 10W-40 APPROVAL",
      description: "French railway specification for LUBREX MOMENTA PLATINUM",
      type: "DTFR",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/APPROVAL-CERTIFICATE-LUBREX-MOMENTA-PLATINUM-10W-40_page-0001.pdf",
    },
    {
      id: 11,
      category: "oem",
      title: "MERCEDES BENZ MB-229.3 5W-40 APPROVAL",
      description: "Mercedes-Benz standard approval for passenger car engines",
      type: "Mercedes-Benz",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/MB-229.3-5W-40_page-0001.pdf",
    },
    {
      id: 12,
      category: "oem",
      title: "NMMA TC-W3 APPROVAL",
      description:
        "National Marine Manufacturers Association marine oil approval",
      type: "NMMA",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/04/Lubrex-Marine-2T-Plus-TC-W3-Approval-1.pdf",
    },
    {
      id: 13,
      category: "oem",
      title: "MERCEDES BENZ MB-229.3 10W-40 APPROVAL",
      description: "Mercedes-Benz certification for multi-grade engine oil",
      type: "Mercedes-Benz",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/MB-229.3-10W-40-APPROVAL_page-0001.pdf",
    },
    {
      id: 14,
      category: "oem",
      title: "MERCEDES BENZ MB-229.5 5W-40 APPROVAL",
      description: "Mercedes-Benz long-life service oil approval",
      type: "Mercedes-Benz",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/APPROVAL_MB-229.5-lubrex-velocity-nano-plus-5w-40.pdf",
    },
    {
      id: 15,
      category: "oem",
      title: "PORSCHE A40 5W-40",
      description: "Porsche high-performance engine oil certification",
      type: "Porsche",
      year: "2025",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2025/02/APPROVAL-CERTIFICATE-LUBREX-VELOCITY-NANO-PLUS.pdf",
    },
    {
      id: 16,
      category: "oem",
      title: "VOLVO VDS-4.5 15W-40 APPROVAL",
      description: "Latest Volvo specification for heavy-duty engines",
      type: "Volvo",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/VOLVO-VDS-4.5-Momenta_Platinum_HD_15W-40_page-0001.pdf",
    },
    {
      id: 17,
      category: "oem",
      title: "VOLVO VDS-4 10W-40 APPROVAL",
      description: "Volvo VDS-4 specification for MOMENTA NANO PLUS",
      type: "Volvo",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/APPROVAL-CERTIFICATE-VDS-4-LUBREX-MOMENTA-NANO-PLUS-10W-40_page-0001.pdf",
    },
    {
      id: 18,
      category: "oem",
      title: "VOLVO VDS-4 15W-40 APPROVAL",
      description: "Volvo VDS-4 certification for multi-grade performance",
      type: "Volvo",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/06/APPROVAL-VOLVO-VDS4-Lubrex_Momenta_Nano_Plus_15W-40.pdf",
    },
    {
      id: 19,
      category: "oem",
      title: "VOLKSWAGEN VW 502 00 /505 00 5W-40",
      description: "Volkswagen approval for gasoline and diesel engines",
      type: "Volkswagen",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/Approval-Certificate_Lubrex_Velocity_Nano_Plus_page-0001.pdf",
    },
    {
      id: 20,
      category: "oem",
      title: "VOLKSWAGEN VW 502 00/ 505 00 5W-30",
      description: "Volkswagen dual specification for modern engines",
      type: "Volkswagen",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/12/APPROVAL-CERTIFICATE-502-00-505-00_Lubrex_Velocity_Nano_Plus.pdf",
    },
    {
      id: 21,
      category: "oem",
      title: "ZF LUBREX DRIVEMAX-III",
      description: "ZF Friedrichshafen approval for transmission fluids",
      type: "ZF",
      year: "2025",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2025/03/ZF-APPROVAL-LUBREX-DRIVEMAX-III.pdf",
    },
    {
      id: 22,
      category: "oem",
      title: "DTFR 15B110 APPROVAL-LUBREX MOMENTA NANO 15W40",
      description: "French railway specification for heavy-duty oil",
      type: "DTFR",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/05/DTFR-15B110-APPROVAL-LUBREX-MOMENTA-NANO-15W40.pdf",
    },
    {
      id: 23,
      category: "oem",
      title: "VOITH APPROVAL DRIVEMAX III",
      description: "Voith transmission fluid approval certification",
      type: "Voith",
      year: "2023",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/re-approval_LUBREX_DRIVEMAX_III_1304000_IME1313146-A_2023-06-13_signed-4page-1-scaled-1.pdf",
    },

    // API and Other Certificates
    {
      id: 24,
      category: "api",
      title: "EELQMS LETTER OF CONFORMANCE",
      description:
        "Energy Institute Engine Lubricant Quality Management System",
      type: "EELQMS",
      year: "2025",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2025/01/LUBREX-FZC-Conf-2025.pdf",
    },
    {
      id: 25,
      category: "api",
      title: "API APPROVAL",
      description:
        "American Petroleum Institute Engine Oil Licensing Certification",
      type: "API",
      year: "2025",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2025/03/EOLCS-Certificate-LUBREX-FZC.pdf",
    },

    // ISO & REACH Compliance Certificates
    {
      id: 26,
      category: "iso",
      title: "ISO 9001:2015 CERTIFICATE (BASE OIL)",
      description:
        "Quality Management System certification for base oil production",
      type: "ISO 9001:2015",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/ISO-CERITIFICATES-RENEWAL_page-0001.pdf",
    },
    {
      id: 27,
      category: "iso",
      title: "ISO 9001:2015 CERTIFICATE (LUBRICANTS)",
      description:
        "Quality Management System certification for lubricant manufacturing",
      type: "ISO 9001:2015",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/ISO-CERITIFICATES-RENEWAL_page-0002.pdf",
    },
    {
      id: 28,
      category: "iso",
      title: "ISO 14001:2015 CERTIFICATE",
      description: "Environmental Management System certification",
      type: "ISO 14001:2015",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/ISO-CERITIFICATES-RENEWAL_page-0003.pdf",
    },
    {
      id: 29,
      category: "iso",
      title: "ISO 45001:2018 CERTIFICATE",
      description: "Occupational Health and Safety Management System",
      type: "ISO 45001:2018",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/ISO-CERITIFICATES-RENEWAL_page-0004.pdf",
    },
    {
      id: 30,
      category: "iso",
      title: "ISO 17025 CERTIFICATE",
      description: "Laboratory Testing and Calibration accreditation",
      type: "ISO 17025",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/ACCREDITATION-CERTIFICATE.pdf",
    },
    {
      id: 31,
      category: "iso",
      title: "REACH COMPLIANCE CERTIFICATE",
      description:
        "European Union chemical regulation compliance certification",
      type: "REACH",
      year: "2024",
      downloadUrl:
        "https://lubrex.net/wp-content/uploads/2024/03/REACH-Compliance-cerficate-scaled-2.pdf",
    },
  ];

  // Filter certificates based on category and search
  const filteredCertificates = certificates.filter((cert) => {
    const matchesCategory =
      activeCategory === "all" || cert.category === activeCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
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
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Award className="h-12 w-12 text-yellow-500 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Our <span className="text-yellow-500">Certificates</span>
            </h1>
          </div>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to quality, safety, and excellence through
            industry-leading certifications and approvals
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {certificateCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-yellow-500 text-black shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-yellow-500"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{category.name}</span>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      activeCategory === category.id
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {category.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Results Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-bold text-black">
              {filteredCertificates.length}
            </span>{" "}
            certificates
            {searchTerm && (
              <span>
                {" "}
                for "
                <span className="font-bold text-yellow-600">{searchTerm}</span>"
              </span>
            )}
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-yellow-500 transition-colors duration-300"
            >
              {/* Certificate Header */}
              <div className="bg-black p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {certificate.type}
                  </span>
                  <span className="text-yellow-500 text-sm font-bold">
                    {certificate.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {certificate.title}
                </h3>
              </div>

              {/* Certificate Body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {certificate.description}
                </p>

                {/* Download Button */}
                <motion.a
                  href={certificate.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                  <span>Download PDF</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">
              No certificates found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filter settings
            </p>
          </motion.div>
        )}

        {/* Footer CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 bg-black rounded-2xl p-8 md:p-12"
        >
          <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quality Guaranteed
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our extensive certifications demonstrate our unwavering commitment
            to quality, safety, and environmental responsibility
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-lg"
          >
            Learn More About Our Quality
          </motion.button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Certificates;
