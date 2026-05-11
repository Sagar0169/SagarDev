"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "AI Consumer Apps",
    description:
      "Building AI-powered mobile experiences focused on engagement, usability, and real-world adoption.",
  },
  {
    title: "Mobile Engineering",
    description:
      "Creating scalable React Native and Android systems with performance-first architecture.",
  },
  {
    title: "Growth Systems",
    description:
      "Combining product thinking, experimentation, and content-driven distribution to drive user growth.",
  },
  {
    title: "Automation Workflows",
    description:
      "Designing automation pipelines and AI workflows that reduce operational overhead and scale execution.",
  },
];

export default function SystemsSection() {
  return (
    <section className="relative px-6 py-52 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-neutral-200 blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-6">
            What I Build
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.05em] leading-[1]">
            Building scalable systems across AI, mobile, and growth.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                group
                rounded-[32px]
                border border-black/10
                bg-white/80
                backdrop-blur-xl
                p-10
                min-h-[280px]
                flex flex-col justify-between
                hover:-translate-y-2
                hover:shadow-[0_20px_80px_rgba(0,0,0,0.06)]
                transition-all duration-500
              "
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-black/5 mb-10" />

                <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h3>
              </div>

              <p className="text-black/60 leading-relaxed text-lg max-w-md">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
