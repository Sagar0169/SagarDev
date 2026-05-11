"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "AI Workflows",
    description:
      "Building automated systems using AI, prompts, and workflow orchestration.",
  },
  {
    title: "Mobile Engineering",
    description:
      "Creating scalable React Native and Android applications with strong architecture.",
  },
  {
    title: "Content Systems",
    description:
      "Designing creator pipelines for content generation, scheduling, and publishing.",
  },
  {
    title: "Automation",
    description:
      "Using tools like n8n to eliminate repetitive workflows and improve productivity.",
  },
];

export default function SystemsSection() {
  return (
    <section className="relative px-6 py-30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-6">
            Current Systems
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-tight max-w-4xl">
            Blending engineering, automation, and AI into scalable digital
            systems.
          </h2>
        </motion.div>

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
                bg-white/60
                backdrop-blur-xl
                p-10
                min-h-[260px]
                flex flex-col justify-between
                hover:-translate-y-1
                transition-all duration-500
              "
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-black/5 mb-8" />

                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
              </div>

              <p className="text-black/60 leading-relaxed max-w-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
