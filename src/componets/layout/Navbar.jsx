import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../../assets/logo-04.png";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Media", href: "#media" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "AR", label: "Arabic" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const langRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    if (langOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [langOpen]);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Lubrex Home"
          >
            <img
              src={logo}
              alt="Lubrex Logo"
              className="h-8 w-auto object-contain"
              style={{ maxWidth: 120 }}
            />
          </a>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex gap-2 lg:gap-6 mx-4 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                tabIndex={0}
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Search & Language */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-full hover:bg-blue-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search"
              tabIndex={0}
              type="button"
            >
              <Search size={20} />
            </button>
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                className="px-2 py-1 rounded-md border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
                tabIndex={0}
                type="button"
              >
                {selectedLang.code}
                <svg
                  className="w-4 h-4 ml-1 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {langOpen && (
                <ul
                  className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-md shadow-lg z-10 focus:outline-none"
                  role="listbox"
                  tabIndex={-1}
                >
                  {LANGUAGES.map((lang) => (
                    <li
                      key={lang.code}
                      className={`px-3 py-2 cursor-pointer hover:bg-blue-50 text-gray-700 text-sm ${
                        selectedLang.code === lang.code ? "font-semibold" : ""
                      }`}
                      role="option"
                      aria-selected={selectedLang.code === lang.code}
                      tabIndex={0}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }
                      }}
                    >
                      {lang.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

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
            <a
              href="/"
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
            </a>
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block w-full text-center px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                tabIndex={mobileOpen ? 0 : -1}
                role="menuitem"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-center gap-4 py-6 border-t border-gray-100">
            <button
              className="p-2 rounded-full hover:bg-blue-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search"
              tabIndex={mobileOpen ? 0 : -1}
              type="button"
            >
              <Search size={22} />
            </button>
            <div className="relative" ref={langRef}>
              <button
                className="px-2 py-1 rounded-md border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
                tabIndex={mobileOpen ? 0 : -1}
                type="button"
              >
                {selectedLang.code}
                <svg
                  className="w-4 h-4 ml-1 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {langOpen && (
                <ul
                  className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-md shadow-lg z-10 focus:outline-none"
                  role="listbox"
                  tabIndex={-1}
                >
                  {LANGUAGES.map((lang) => (
                    <li
                      key={lang.code}
                      className={`px-3 py-2 cursor-pointer hover:bg-blue-50 text-gray-700 text-sm ${
                        selectedLang.code === lang.code ? "font-semibold" : ""
                      }`}
                      role="option"
                      aria-selected={selectedLang.code === lang.code}
                      tabIndex={0}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }
                      }}
                    >
                      {lang.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
