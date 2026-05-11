"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-100 blur-3xl opacity-40" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-neutral-200 blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-5xl"
        >
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.92] tracking-[-0.05em]">
            Mobile Engineer
            <br />
            building AI-powered
            <br />
            consumer products.
          </h1>

          {/* Description */}
          <p className="mt-10 text-xl text-black/60 leading-relaxed max-w-3xl">
            I build and scale AI-first mobile experiences focused on
            performance, growth, and real-world user engagement — combining
            engineering, product thinking, and fast execution.
          </p>

          {/* Metrics */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
            {[
              {
                value: "10M+",
                label: "Views Generated",
              },
              {
                value: "50K+",
                label: "Audience Reach",
              },
              {
                value: "2.5K+",
                label: "Users",
              },
              {
                value: "200+",
                label: "Daily Active Users",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-bold tracking-[-0.04em]">
                  {item.value}
                </p>

                <p className="mt-3 text-sm text-black/45">{item.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 flex flex-wrap items-center gap-5">
            <button className="px-8 py-4 rounded-full bg-black text-white text-sm hover:opacity-90 transition">
              View Projects
            </button>

            <button className="px-8 py-4 rounded-full border border-black/10 text-sm hover:bg-black/5 transition">
              View Resume
            </button>
          </div>

          {/* Bottom Strip */}
          <div className="mt-16 flex flex-wrap items-center gap-6 text-sm text-black/45">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Available for opportunities
            </div>

            <div>Currently based in Delhi, India</div>

            <div>React Native & Android</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
