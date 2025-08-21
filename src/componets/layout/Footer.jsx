import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const exploreLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Certificates", href: "/certificates" },
    { name: "Events & Articles", href: "/events-articles" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Accent line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Left - Logo & Description */}
          <div className="flex flex-col items-center md:items-start space-y-4 m-auto">
            <img
              src="https://lubrex.net/wp-content/uploads/2023/09/lubrex-white-logo-latest-1.webp"
              alt="Lubrex Logo"
              className="w-60 h-auto object-contain"
            />
            <p className="text-slate-300 leading-relaxed text-sm max-w-xs">
              Leading provider of industrial lubricants and solutions, committed
              to excellence and innovation in the manufacturing sector.
            </p>
          </div>

          {/* Middle - Explore Links */}
          <div>
            <h3 className="text-xl font-semibold text-white relative inline-block mb-6">
              Explore
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-400" />
            </h3>

            <div className="flex flex-col space-y-3">
              {exploreLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex justify-center md:justify-start items-center gap-2 p-2 rounded-md hover:bg-slate-800/40 transition-all duration-300"
                >
                  <span className="text-slate-300 group-hover:text-white transition-colors text-base">
                    {link.name}
                  </span>
                  <span className="h-0.5 w-0 bg-amber-400 group-hover:w-6 transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-6">
            {/* Location */}
            <div className="text-slate-300">
              <p className="font-semibold text-amber-400 flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5" /> Our Location
              </p>
              <p>Walhekar Wadi Rd, Jay Mallhar Colony</p>
              <p>Walhekarwadi, Sector No. 32, Nigdi</p>
              <p>Pimpri-Chinchwad, Pune</p>
              <p>Maharashtra 411033</p>
            </div>

            {/* Email */}
            <div>
              <p className="font-semibold text-amber-400 flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5" /> Email Us
              </p>
              <a
                href="mailto:contact@lubrexindia.in"
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                contact@lubrexindia.in
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="font-semibold text-amber-400 flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5" /> Call Us
              </p>
              <a
                href="tel:+919090909999"
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                +91 90909099**
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6 text-sm text-slate-400">
          <p className="text-center ">
            &copy; {new Date().getFullYear()} Lubrex India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
