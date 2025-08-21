import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo-04.png";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  // { label: "Services", href: "/services" },
  {
    label: "Oil Finder",
    href: "https://lubrex-are.lubricantadvisor.com/en",
    external: true,
  },
  { label: "Certificates", href: "/certificates" },
  { label: "Events and Articles", href: "/events-articles" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileMenuRef = useRef(null);

  // Trap focus in mobile menu when open
  useEffect(() => {
    if (!mobileOpen) return;
    const focusable = mobileMenuRef.current?.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length) {
      focusable[0].focus();
    }
    function handleKey(e) {
      if (e.key === "Escape") setMobileOpen(false);
      if (e.key === "Tab" && focusable && focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  return (
    <nav
      className="w-full bg-white shadow-sm fixed top-0 left-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left: Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Lubrex Home"
          >
            <img
              src={logo}
              alt="Lubrex Logo"
              className="h-16 object-contain"
              style={{ maxWidth: 120 }}
            />
          </a>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex gap-2 lg:gap-6 mx-4 flex-1 justify-center">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-base font-medium transition-colors focus:outline-none text-gray-700 hover:text-yellow-600"
                  tabIndex={0}
                  role="menuitem"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `px-3 py-2 text-base font-medium transition-colors focus:outline-none ${
                      isActive
                        ? "text-yellow-600"
                        : "text-gray-700 hover:text-yellow-600"
                    }`
                  }
                  tabIndex={0}
                  role="menuitem"
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          {/* Right: Become a distributor & Hamburger */}
          <div className="flex items-center gap-2">
            <NavLink
              to="/become-distributor"
              className="ml-2 px-4 py-2 rounded-md bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 hidden md:inline-block"
              tabIndex={0}
            >
              Become a distributor
            </NavLink>
            {/* Hamburger: Mobile only */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-blue-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              tabIndex={0}
              type="button"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        tabIndex={-1}
        hidden={!mobileOpen}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <NavLink
              to="/"
              className="font-bold text-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Lubrex Home"
              tabIndex={mobileOpen ? 0 : -1}
            >
              <img
                src={logo}
                alt="Lubrex Logo"
                className="h-8 w-auto object-contain"
                style={{ maxWidth: 120 }}
              />
            </NavLink>
            <button
              className="p-2 rounded-full hover:bg-blue-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              tabIndex={mobileOpen ? 0 : -1}
              type="button"
            >
              <X size={24} />
            </button>
          </div>
          <nav
            className="flex-1 flex flex-col items-center justify-center gap-6"
            role="menu"
          >
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 text-lg font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                  tabIndex={mobileOpen ? 0 : -1}
                  role="menuitem"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `block w-full text-center px-4 py-3 text-lg font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      isActive
                        ? "text-yellow-600 bg-yellow-50"
                        : "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                    }`
                  }
                  tabIndex={mobileOpen ? 0 : -1}
                  role="menuitem"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              )
            )}
            {mobileOpen && (
              <NavLink
                to="/become-distributor"
                className="ml-2 px-4 py-2 rounded-md  bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2"
                tabIndex={mobileOpen ? 0 : -1}
                onClick={() => setMobileOpen(false)}
              >
                Become a distributor
              </NavLink>
            )}
          </nav>
          <div className="flex items-center justify-center gap-4 py-6 border-t border-gray-100"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
