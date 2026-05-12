"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] font-medium">
              SAGAR PATHAK
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {["Work", "Capabilities", "Philosophy", "Lab"].map((item) => (
              <button
                key={item}
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.22em]
                  text-black/45
                  hover:text-black
                  transition-colors
                "
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            className="
              text-[11px]
              uppercase
              tracking-[0.22em]
              border border-black/10
              px-4 py-2
              rounded-full
              hover:bg-black
              hover:text-white
              transition-all duration-300
            "
          >
            Resume
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
