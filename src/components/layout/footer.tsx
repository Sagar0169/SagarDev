"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            rounded-[40px]
            border border-black/10
            bg-white/70
            backdrop-blur-xl
            p-10 md:p-16
          "
        >
          <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-6">
            Let’s Build
          </p>

          <h2 className="text-4xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] max-w-4xl">
            Creating thoughtful digital systems for the next generation.
          </h2>

          <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="space-y-3">
              <p className="text-black/60">sagarpathak.dev</p>

              <p className="text-black/60">hello@sagarpathak.dev</p>
            </div>

            <div className="flex items-center gap-6 text-black/50">
              <button className="hover:text-black transition-colors">
                GitHub
              </button>

              <button className="hover:text-black transition-colors">
                LinkedIn
              </button>

              <button className="hover:text-black transition-colors">
                Twitter
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
