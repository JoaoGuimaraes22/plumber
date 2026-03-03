"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type NavbarDict = {
  home: string;
  about: string;
  services: string;
  areas: string;
  reviews: string;
  contact: string;
  cta: string;
};

type Props = {
  dict: NavbarDict;
  locale: string;
};

export default function Navbar({ dict, locale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: dict.home, href: `/${locale}#` },
    { label: dict.about, href: `/${locale}#about` },
    { label: dict.services, href: `/${locale}#services` },
    { label: dict.areas, href: `/${locale}#areas` },
    { label: dict.reviews, href: `/${locale}#reviews` },
    { label: dict.contact, href: `/${locale}#contact` },
  ];

  const pathWithoutLocale = pathname.replace(/^\/(en|pt)/, "") || "/";
  const otherLocale = locale === "en" ? "pt" : "en";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 sm:px-6 h-16 sm:h-20">
        {/* Logo */}
        <a
          href={`/${locale}`}
          className="text-xl sm:text-2xl font-bold text-white tracking-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          AQUA<span className="text-blue-500">FIX</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-wide text-navy-300 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side — CTA + lang + hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop: Emergency CTA */}
          <a
            href={`/${locale}#contact`}
            className="hidden md:flex items-center gap-2 relative rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white uppercase tracking-wide hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className="absolute inset-0 rounded-full bg-blue-400 opacity-0 animate-[ping_1s_ease-out_0.5s_2]" />
            <svg
              className="w-4 h-4 relative"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span className="relative">{dict.cta}</span>
          </a>

          {/* Language toggle */}
          <a
            href={`/${otherLocale}${pathWithoutLocale}`}
            className="hidden md:inline-block text-xs uppercase tracking-wide text-navy-400 hover:text-white transition-colors border border-navy-700 rounded-full px-3 py-1.5"
          >
            {otherLocale.toUpperCase()}
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-1 bg-navy-950/95 backdrop-blur-sm px-6 pb-8 pt-4">
          {navLinks.map((link) => (
            <li key={link.label} className="w-full">
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-center text-sm uppercase tracking-wide text-navy-300 hover:text-blue-400 active:text-blue-400 transition-colors py-3.5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="w-full mt-3">
            <a
              href={`/${locale}#contact`}
              onClick={() => setMobileOpen(false)}
              className="block text-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white uppercase tracking-wide hover:bg-blue-500 active:bg-blue-700 transition-colors"
            >
              {dict.cta}
            </a>
          </li>
          <li className="mt-3">
            <a
              href={`/${otherLocale}${pathWithoutLocale}`}
              className="inline-block text-sm uppercase tracking-wide text-navy-400 hover:text-white transition-colors border border-navy-600 rounded-full px-5 py-2.5"
            >
              {otherLocale === "en" ? "English" : "Português"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
