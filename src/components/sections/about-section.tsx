"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative px-6 py-52">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-6">
              About
            </p>

            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.05em] leading-[1]">
              Building systems
              <br />
              that scale with
              <br />
              clarity.
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            <div className="space-y-10">
              <p className="text-2xl leading-relaxed text-black/75 tracking-[-0.02em]">
                I work at the intersection of AI, mobile engineering, and
                product growth — building intuitive consumer experiences focused
                on real users and measurable impact.
              </p>

              <p className="text-lg leading-relaxed text-black/60">
                My approach combines engineering, product thinking, automation
                systems, and fast execution to create scalable digital
                experiences that feel simple for users but are deeply optimized
                underneath.
              </p>

              <p className="text-lg leading-relaxed text-black/60">
                Alongside building products, I document the process publicly
                through content focused on AI workflows, mobile engineering,
                growth systems, and building in public.
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-20 grid grid-cols-2 gap-8">
              {[
                {
                  value: "3+",
                  label: "Years Building",
                },
                {
                  value: "10+",
                  label: "Systems & Products",
                },
                {
                  value: "10M+",
                  label: "Content Views",
                },
                {
                  value: "50K+",
                  label: "Audience Reach",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-[28px]
                    border border-black/10
                    bg-white/70
                    backdrop-blur-xl
                    p-8
                  "
                >
                  <p className="text-5xl font-bold tracking-[-0.05em]">
                    {item.value}
                  </p>

                  <p className="mt-4 text-black/50">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
