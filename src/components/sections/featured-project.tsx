"use client";

import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <section className="relative px-6 py-52 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-neutral-200 blur-3xl opacity-40" />
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
            Featured Project
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.05em] leading-[1]">
            Building AI-powered interactive experiences for the next generation.
          </h2>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Left Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              rounded-[40px]
              border border-black/10
              bg-white/80
              backdrop-blur-xl
              p-8
              overflow-hidden
            "
          >
            {/* Window Controls */}
            <div className="flex items-center gap-2 mb-10">
              <div className="w-3 h-3 rounded-full bg-red-300" />
              <div className="w-3 h-3 rounded-full bg-yellow-300" />
              <div className="w-3 h-3 rounded-full bg-green-300" />
            </div>

            {/* Preview */}
            <div className="rounded-[32px] bg-black text-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50">
                    AI Text-to-Game Platform
                  </p>

                  <h3 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">
                    Chaotix
                  </h3>
                </div>

                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Features */}
              <div className="mt-12 space-y-5">
                {[
                  "AI-generated gameplay",
                  "Interactive storytelling",
                  "Real-time mobile experience",
                  "Rapid experimentation system",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex items-center justify-between
                      rounded-2xl
                      border border-white/10
                      px-5 py-4
                    "
                  >
                    <span className="text-white/90">{item}</span>

                    <div className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {[
                  {
                    value: "2.5K+",
                    label: "Users",
                  },
                  {
                    value: "200+",
                    label: "DAUs",
                  },
                  {
                    value: "10M+",
                    label: "Views",
                  },
                  {
                    value: "50K+",
                    label: "Audience",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/5 p-5">
                    <p className="text-3xl font-bold tracking-[-0.04em]">
                      {item.value}
                    </p>

                    <p className="mt-2 text-sm text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-6">
              Case Study
            </p>

            <div className="space-y-14">
              {/* Intro */}
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] mb-5">
                  The Product
                </h3>

                <p className="text-lg text-black/60 leading-relaxed">
                  Chaotix is an AI-powered text-to-game platform transforming
                  ideas into interactive experiences.
                </p>
              </div>

              {/* Ownership */}
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] mb-5">
                  What I Owned
                </h3>

                <p className="text-lg text-black/60 leading-relaxed">
                  Led mobile experience, frontend systems, architecture
                  decisions, and product execution while scaling the platform
                  toward real users.
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] mb-5">
                  The Challenge
                </h3>

                <p className="text-lg text-black/60 leading-relaxed">
                  Building an AI-first consumer experience required balancing
                  rapid experimentation, scalable systems, smooth mobile UX, and
                  real-time engagement loops.
                </p>
              </div>

              {/* Outcome */}
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] mb-5">
                  Outcome
                </h3>

                <p className="text-lg text-black/60 leading-relaxed">
                  Built a fast-moving AI product ecosystem combining mobile
                  engineering, creator-focused experiences, and growth-driven
                  experimentation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
