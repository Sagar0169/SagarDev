"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-6">
              Philosophy
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-[-0.04em]">
              Building systems
              <br />
              that feel invisible.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg leading-relaxed text-black/60">
              I care about performance, clarity, and creating experiences that
              feel effortless for users.
            </p>

            <p className="text-lg leading-relaxed text-black/60">
              My work sits at the intersection of mobile engineering, AI
              systems, automation, and thoughtful product design.
            </p>

            <div className="pt-10 border-t border-black/10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold">3+</p>
                  <p className="mt-2 text-black/50">Years Building</p>
                </div>

                <div>
                  <p className="text-4xl font-bold">10+</p>
                  <p className="mt-2 text-black/50">Systems & Products</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
