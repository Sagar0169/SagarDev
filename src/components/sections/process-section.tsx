"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Research & Systems Thinking",
    description:
      "Understanding workflows, bottlenecks, and scalability before writing code.",
  },
  {
    title: "Designing Architecture",
    description:
      "Creating maintainable structures focused on performance and clarity.",
  },
  {
    title: "Building Experiences",
    description:
      "Developing polished interfaces with thoughtful interactions and responsiveness.",
  },
  {
    title: "Automation & Optimization",
    description:
      "Reducing repetitive tasks through workflows, AI systems, and automation.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative px-6 py-52">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div className="lg:sticky lg:top-32 h-fit">
          <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-6">
            Process
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-tight">
            Building with intention, not noise.
          </h2>

          <p className="mt-10 text-lg leading-relaxed text-black/60 max-w-xl">
            My approach combines engineering, product thinking, design clarity,
            and automation to create systems that scale naturally.
          </p>
        </div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                rounded-[32px]
                border border-black/10
                bg-white/70
                backdrop-blur-xl
                p-10
              "
            >
              <p className="text-sm text-black/30 mb-6">0{index + 1}</p>

              <h3 className="text-3xl font-semibold tracking-[-0.03em] mb-4">
                {step.title}
              </h3>

              <p className="text-black/60 leading-relaxed text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
