'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const navLinkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-[#FFDA03]"
        : "text-gray-900 hover:text-[#FFDA03]"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Photos/logo.png"
            alt="Nordic Waves Logo"
            width={110}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-gray-900">
            Nordic Waves
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/about" className={navLinkClass("/about")}>About</Link>
          <Link href="/events" className={navLinkClass("/events")}>Programs</Link>
          <Link href="/impact" className={navLinkClass("/impact")}>Impact</Link>
          <Link href="/gallery" className={navLinkClass("/gallery")}>Gallery</Link>

          <Link
            href="/donate"
            className="ml-6 bg-[#FFDA03] px-6 py-2 rounded-full font-semibold text-black hover:bg-black hover:text-[#FFDA03] transition"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/donate"
            className="bg-[#FFDA03] px-4 py-2 rounded-full font-semibold text-sm"
          >
            Donate
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="relative w-10 h-10 flex items-center justify-center"
          >
            <span
              className={`absolute h-0.5 w-6 bg-black transition ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-black transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-black transition ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="px-6 py-8 space-y-6 text-lg font-medium">

              <Link
                href="/about"
                onClick={closeMenu}
                className={`block ${navLinkClass("/about")}`}
              >
                About
              </Link>

              <Link
                href="/events"
                onClick={closeMenu}
                className={`block ${navLinkClass("/events")}`}
              >
                Programs
              </Link>

              <Link
                href="/impact"
                onClick={closeMenu}
                className={`block ${navLinkClass("/impact")}`}
              >
                Impact
              </Link>

              <Link
                href="/gallery"
                onClick={closeMenu}
                className={`block ${navLinkClass("/gallery")}`}
              >
                Gallery
              </Link>

              {/* Divider */}
              <div className="pt-4 border-t border-neutral-200" />

              {/* Secondary Donate CTA */}
              <Link
                href="/donate"
                onClick={closeMenu}
                className="block text-center bg-[#FFDA03] py-3 rounded-xl font-semibold text-black hover:bg-black hover:text-[#FFDA03] transition"
              >
                Support Our Mission
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
