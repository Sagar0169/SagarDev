"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2025 — Present",
    role: "Mobile Engineer",
    company: "Chaotix",
    description:
      "Building and scaling an AI-powered text-to-game platform focused on interactive consumer experiences.",
  },
  {
    period: "2023 — 2025",
    role: "Android Developer",
    company: "Silver Touch Technologies",
    description:
      "Built scalable mobile systems with focus on performance, architecture, and production-grade user experiences.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative px-6 py-52 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-[500px] h-[500px] rounded-full bg-neutral-200 blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-6">
            Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.05em] leading-[1]">
            Building products, systems, and mobile experiences at scale.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-10">
          {experiences.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                rounded-[36px]
                border border-black/10
                bg-white/80
                backdrop-blur-xl
                p-10 md:p-14
              "
            >
              <div className="grid md:grid-cols-[220px_1fr] gap-12">
                {/* Left */}
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-black/35">
                    {item.period}
                  </p>
                </div>

                {/* Right */}
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                    {item.role}
                  </h3>

                  <p className="mt-3 text-xl text-black/55">{item.company}</p>

                  <p className="mt-8 text-lg text-black/60 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
