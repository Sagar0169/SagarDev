"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
      }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            mt-6
            flex items-center justify-between
            rounded-full
            border border-black/10
            bg-white/70
            backdrop-blur-xl
            px-6 py-4
            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          "
        >
          {/* Logo */}
          <div>
            <p className="text-sm font-medium tracking-[0.25em]">
              SAGAR PATHAK
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm text-black/50">
            {["Projects", "Experience", "Building", "Contact"].map((item) => (
              <button key={item} className="hover:text-black transition-colors">
                {item}
              </button>
            ))}
          </div>

          {/* Right CTA */}
          <button
            className="
              hidden md:flex
              items-center justify-center
              px-5 py-2
              rounded-full
              bg-black
              text-white
              text-sm
              hover:opacity-90
              transition
            "
          >
            Resume
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
