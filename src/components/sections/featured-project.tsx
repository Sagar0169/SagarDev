"use client";

import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <section className="relative px-6 py-52">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-6">
            Featured Build
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-tight max-w-4xl">
            AI-powered content infrastructure for creators.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              rounded-[36px]
              border border-black/10
              bg-white/80
              backdrop-blur-xl
              p-8
              overflow-hidden
              min-h-[500px]
            "
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/[0.02] to-transparent" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-10">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <div className="w-3 h-3 rounded-full bg-yellow-300" />
                <div className="w-3 h-3 rounded-full bg-green-300" />
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-black text-white p-5">
                  AI Caption Generation
                </div>

                <div className="rounded-2xl border border-black/10 p-5">
                  Automated Scheduling
                </div>

                <div className="rounded-2xl border border-black/10 p-5">
                  Cross Platform Publishing
                </div>

                <div className="rounded-2xl border border-black/10 p-5">
                  Analytics Pipeline
                </div>
              </div>

              <div className="mt-auto pt-10">
                <p className="text-sm text-black/40 uppercase tracking-[0.2em]">
                  SYSTEM STATUS
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <p className="text-sm text-black/60">Active & Scalable</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            <p className="text-black/50 uppercase tracking-[0.3em] text-sm mb-6">
              Case Study
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>

                <p className="text-black/60 leading-relaxed text-lg">
                  Managing content creation, caption generation, scheduling, and
                  publishing across platforms manually consumed significant
                  time.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">The Solution</h3>

                <p className="text-black/60 leading-relaxed text-lg">
                  Built an AI-assisted workflow system integrating automation
                  pipelines, scheduling infrastructure, and reusable content
                  generation tools.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Outcome</h3>

                <p className="text-black/60 leading-relaxed text-lg">
                  Reduced repetitive workflow overhead while creating a scalable
                  creator-focused publishing system.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
