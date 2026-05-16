"use client";

import { motion } from "framer-motion";

const navItems = ["Work", "Systems", "Writing", "Now", "About"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        fixed top-0 left-0
        w-full z-50
        border-b border-black/6
        bg-[#f5f3f1]/80
        backdrop-blur-xl
      "
    >
      <div className="container-system">
        <div className="h-[72px] flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            <p
              className="
                text-[13px]
                tracking-[-0.03em]
                font-medium
              "
            >
              SP
            </p>

            <div className="w-1.5 h-1.5 rounded-full bg-black" />
          </div>

          {/* Center */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item}
                className="
                  relative
                  text-[12px]
                  tracking-[-0.01em]
                  text-black/60
                  hover:text-black
                  transition-colors
                "
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            {/* Github */}
            <button
              className="
                hidden md:flex
                text-black/60
                hover:text-black
                transition-colors
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[17px] h-[17px]"
              >
                <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.8 2.74 1.28 3.41.98.1-.76.41-1.28.74-1.57-2.56-.3-5.26-1.28-5.26-5.72 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.16 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.64.24 2.86.12 3.16.75.8 1.2 1.84 1.2 3.11 0 4.45-2.7 5.41-5.28 5.71.42.36.79 1.08.79 2.18v3.24c0 .31.2.67.8.56a11.53 11.53 0 0 0 7.84-10.95C23.5 5.66 18.35.5 12 .5Z" />
              </svg>
            </button>

            {/* Linkedin */}
            <button
              className="
                hidden md:flex
                text-black/60
                hover:text-black
                transition-colors
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[17px] h-[17px]"
              >
                <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5s-2-.9-2-2 .9-2 2-2 1.98.9 1.98 2ZM5 8H1v15h4V8Zm7 0H8v15h4v-8.4c0-4.67 6-5.05 6 0V23h4v-10c0-7.88-8.92-7.6-10-3.72V8Z" />
              </svg>
            </button>

            {/* CTA */}
            <button
              className="
                h-10
                px-5
                rounded-full
                border border-black/10
                text-[11px]
                tracking-[0.01em]
                hover:bg-black
                hover:text-white
                transition-all duration-300
              "
            >
              Let’s connect
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
