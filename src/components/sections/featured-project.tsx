"use client";

import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <section className="relative py-40 md:py-52 px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="max-w-[920px]"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-black/35">
            Featured Project
          </p>

          <h2
            className="
              mt-8
              text-[40px]
              md:text-[58px]
              tracking-[-0.06em]
              leading-[0.96]
              font-semibold
            "
          >
            Building AI-powered interactive experiences for the next generation.
          </h2>
        </motion.div>

        {/* Main Layout */}
        <div className="mt-28 grid lg:grid-cols-[1.1fr_420px] gap-20 items-start">
          {/* LEFT VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {/* Main Visual */}
            <div
              className="
                aspect-[1.25/1]
                rounded-[28px]
                border border-black/10
                bg-[#ece8e4]
                overflow-hidden
                relative
              "
            >
              {/* Fake UI */}
              <div className="absolute inset-0 p-8 flex flex-col">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                      AI Text-to-Game Platform
                    </p>

                    <h3 className="mt-4 text-[40px] tracking-[-0.06em] font-semibold">
                      Chaotix
                    </h3>
                  </div>

                  <div className="w-2 h-2 rounded-full bg-black/30" />
                </div>

                {/* Mock UI Blocks */}
                <div className="mt-16 space-y-4">
                  {[
                    "Interactive storytelling",
                    "AI-generated gameplay",
                    "Realtime mobile experiences",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        h-16
                        rounded-2xl
                        border border-black/10
                        bg-white/40
                        backdrop-blur-sm
                        px-6
                        flex items-center
                      "
                    >
                      <p className="text-[15px] text-black/65">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-auto grid grid-cols-4 gap-4">
                  {[
                    {
                      value: "2.5K+",
                      label: "USERS",
                    },
                    {
                      value: "200+",
                      label: "DAUS",
                    },
                    {
                      value: "10M+",
                      label: "VIEWS",
                    },
                    {
                      value: "50K+",
                      label: "REACH",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="
                        border border-black/10
                        rounded-2xl
                        bg-white/50
                        p-4
                      "
                    >
                      <p className="text-[24px] tracking-[-0.05em] font-semibold">
                        {item.value}
                      </p>

                      <p className="mt-2 text-[9px] tracking-[0.2em] uppercase text-black/35">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            {/* Meta */}
            <p className="text-[11px] uppercase tracking-[0.22em] text-black/35">
              Case Study
            </p>

            {/* Sections */}
            <div className="mt-12 space-y-14">
              {/* Product */}
              <div>
                <h3 className="text-[26px] tracking-[-0.05em] font-semibold">
                  The Product
                </h3>

                <p
                  className="
                    mt-5
                    text-[16px]
                    leading-[1.9]
                    text-black/58
                  "
                >
                  Chaotix is an AI-powered text-to-game platform transforming
                  ideas into interactive consumer experiences.
                </p>
              </div>

              {/* Ownership */}
              <div>
                <h3 className="text-[26px] tracking-[-0.05em] font-semibold">
                  What I Owned
                </h3>

                <p
                  className="
                    mt-5
                    text-[16px]
                    leading-[1.9]
                    text-black/58
                  "
                >
                  Led mobile systems, frontend architecture, creator workflows,
                  and product-focused execution while scaling toward real users.
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h3 className="text-[26px] tracking-[-0.05em] font-semibold">
                  The Challenge
                </h3>

                <p
                  className="
                    mt-5
                    text-[16px]
                    leading-[1.9]
                    text-black/58
                  "
                >
                  Building an AI-first interactive platform required balancing
                  rapid experimentation, scalable systems, smooth UX, and
                  creator engagement loops simultaneously.
                </p>
              </div>

              {/* Outcome */}
              <div>
                <h3 className="text-[26px] tracking-[-0.05em] font-semibold">
                  Outcome
                </h3>

                <p
                  className="
                    mt-5
                    text-[16px]
                    leading-[1.9]
                    text-black/58
                  "
                >
                  Built a fast-moving AI ecosystem combining mobile engineering,
                  creator-first product thinking, and growth-oriented execution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
