"use client";

import { motion } from "framer-motion";

export default function BuildingPublicSection() {
  return (
    <section className="relative px-6 py-52 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-100 blur-3xl opacity-30" />
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
            Building in Public
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.05em] leading-[1]">
            Sharing the process behind building AI products and systems.
          </h2>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-10">
              <p className="text-2xl leading-relaxed text-black/75 tracking-[-0.02em]">
                Alongside building products, I document the process publicly —
                sharing AI workflows, mobile engineering insights, automation
                systems, and lessons from shipping fast.
              </p>

              <p className="text-lg text-black/60 leading-relaxed">
                Over time this evolved into a creator-focused content system
                reaching millions organically, helping developers and builders
                learn through real execution and experimentation.
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  value: "10M+",
                  label: "Views",
                },
                {
                  value: "50K+",
                  label: "Audience",
                },
                {
                  value: "100",
                  label: "Days Challenge",
                },
                {
                  value: "Organic",
                  label: "Growth",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-[28px]
                    border border-black/10
                    bg-white/80
                    backdrop-blur-xl
                    p-8
                  "
                >
                  <p className="text-4xl font-bold tracking-[-0.05em]">
                    {item.value}
                  </p>

                  <p className="mt-3 text-black/45">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-16 flex flex-wrap gap-4">
              {[
                "React Native",
                "AI Workflows",
                "Automation",
                "Product Building",
                "Mobile UX",
                "Growth Systems",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    px-5 py-3
                    rounded-full
                    border border-black/10
                    bg-white/70
                    text-sm text-black/60
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Preview */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="
              rounded-[36px]
              border border-black/10
              bg-white/80
              backdrop-blur-xl
              p-6
              sticky top-32
            "
          >
            {/* Fake Content Feed */}
            <div className="space-y-5">
              {[
                {
                  title: "FlatList Optimization",
                  views: "240K views",
                },
                {
                  title: "AI Prompt Systems",
                  views: "1.2M views",
                },
                {
                  title: "Building AI Apps",
                  views: "500K views",
                },
                {
                  title: "React Native Performance",
                  views: "120K views",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    border border-black/10
                    p-5
                    hover:bg-black/[0.02]
                    transition
                  "
                >
                  <p className="font-medium tracking-[-0.02em]">{item.title}</p>

                  <p className="mt-2 text-sm text-black/45">{item.views}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-black/10">
              <p className="text-sm text-black/50 leading-relaxed">
                Creating educational content around AI, mobile engineering, and
                building scalable digital systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
