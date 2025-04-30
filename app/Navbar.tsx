// app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { FiSearch, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface NavLinkProps {
  label: string;
  href: string; 
}

const NavLink = ({ label, href }: NavLinkProps) => (
  <Link href={href} className="text-gray-700 hover:text-cyan-500 transition font-medium text-sm">
    {label}
  </Link>
);

export default function Navbar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname(); 
  const isHome = pathname === '/'; 

  const pricingHref = isHome ? '/#pricing' : '/pricing'; 
  const contactHref = isHome ? '/#contact' : '/'; 

  return (
    <>
      {/* Navbar fixed above everything */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 bg-transparent"
      >
        <div className="relative w-full max-w-[1280px] clip-navbar bg-gradient-to-r from-cyan-100 to-cyan-50 backdrop-blur-md shadow-lg py-5 px-6 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold leading-tight">
              <span className="text-cyan-500">LifeFit</span>
              <span className="text-gray-800">Goals</span>
              <p className="text-xs text-gray-500 -mt-1">Fitness & Workout</p>
            </div>
          </Link>

          {/* Nav links & actions */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink label="Home" href="/" />
            <NavLink label="Services" href="/services" />
            <NavLink label="Pricing" href={pricingHref} /> 
            <NavLink label="Login" href="/login" />
            <NavLink label="Contact" href={contactHref} /> 
            <NavLink label="Blog" href="/blog" />
            <NavLink label="Sign Up" href="/signup" />

            {/* Search icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="bg-gray-100 p-2 rounded shadow hover:bg-gray-200"
            >
              <FiSearch className="text-gray-700" />
            </button>

            {/* Appointment button */}
            <Link
              href="/appointment"
              className="relative inline-block px-5 py-2 bg-cyan-500 text-white font-semibold shadow-md transform skew-x-[-12deg] hover:bg-cyan-600 transition"
            >
              <span className="inline-block skew-x-[12deg]">Appointment</span>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Search Overlay behind navbar */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-gradient-to-tr from-cyan-100 via-white to-cyan-50 flex items-start justify-center z-40 px-4 pt-24">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 rounded-lg shadow-md focus:outline-none"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              <FiX size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
