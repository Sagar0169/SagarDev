"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative px-6 py-40 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-100 blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            rounded-[48px]
            border border-black/10
            bg-white/80
            backdrop-blur-xl
            p-10 md:p-20
          "
        >
          {/* Heading */}
          <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-8">
            Let’s Build
          </p>

          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.06em] leading-[0.95] max-w-5xl">
            Building meaningful AI-powered products with real impact.
          </h2>

          {/* Description */}
          <p className="mt-12 text-xl text-black/60 leading-relaxed max-w-3xl">
            Open to opportunities across AI, mobile engineering, consumer
            products, and product-focused teams building ambitious digital
            experiences.
          </p>

          {/* CTA */}
          <div className="mt-16 flex flex-wrap items-center gap-5">
            <button
              className="
                px-8 py-4
                rounded-full
                bg-black
                text-white
                text-sm
                hover:opacity-90
                transition
              "
            >
              Get In Touch
            </button>

            <button
              className="
                px-8 py-4
                rounded-full
                border border-black/10
                text-sm
                hover:bg-black/5
                transition
              "
            >
              View Resume
            </button>
          </div>

          {/* Bottom */}
          <div className="mt-24 pt-10 border-t border-black/10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Left */}
            <div>
              <p className="text-lg font-medium">Sagar Pathak</p>

              <p className="mt-3 text-black/50">
                Mobile Engineer • AI Consumer Apps
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-wrap items-center gap-8 text-black/50">
              <button className="hover:text-black transition-colors">
                GitHub
              </button>

              <button className="hover:text-black transition-colors">
                LinkedIn
              </button>

              <button className="hover:text-black transition-colors">
                Twitter
              </button>

              <button className="hover:text-black transition-colors">
                Email
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
