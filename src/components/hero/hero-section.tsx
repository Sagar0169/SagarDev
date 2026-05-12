"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen px-6 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl" />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.03]
            [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="pt-36 pb-24">
          {/* Small Meta */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-black/70" />

            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.24em]
                text-black/40
              "
            >
              SAGAR PATHAK / MOBILE ENGINEER
            </p>
          </motion.div>

          {/* Hero Layout */}
          <div className="mt-14 grid lg:grid-cols-[1fr_320px] gap-20 items-start">
            {/* LEFT */}
            <div>
              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="
                  text-[54px]
                  md:text-[92px]
                  tracking-[-0.08em]
                  leading-[0.88]
                  font-semibold
                  max-w-[920px]
                "
              >
                I build AI-powered mobile products and scalable automation
                systems.
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.12,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="mt-14 max-w-[760px]"
              >
                <p
                  className="
                    text-[20px]
                    leading-[1.9]
                    text-black/62
                  "
                >
                  Mobile Engineer focused on AI-first consumer products, React
                  Native systems, creator infrastructure, and automation
                  workflows.
                </p>

                <p
                  className="
                    mt-8
                    text-[20px]
                    leading-[1.9]
                    text-black/62
                  "
                >
                  Currently building{" "}
                  <span className="text-black font-medium">Chaotix</span> — an
                  AI-powered text-to-game platform reinventing interactive
                  experiences for creators and Gen Z audiences.
                </p>

                <p
                  className="
                    mt-8
                    text-[20px]
                    leading-[1.9]
                    text-black/62
                  "
                >
                  Built systems reaching{" "}
                  <span className="text-black font-medium">2.5K+ users</span>,
                  generating{" "}
                  <span className="text-black font-medium">10M+ views</span>,
                  while developing AI-driven creator workflows and automation
                  infrastructure.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.18,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="mt-16 flex flex-wrap gap-4"
              >
                <button
                  className="
                    h-12
                    px-7
                    rounded-full
                    bg-black
                    text-white
                    text-[11px]
                    uppercase
                    tracking-[0.18em]
                    hover:scale-[1.02]
                    transition-all duration-300
                  "
                >
                  View Projects
                </button>

                <button
                  className="
                    h-12
                    px-7
                    rounded-full
                    border border-black/10
                    text-[11px]
                    uppercase
                    tracking-[0.18em]
                    hover:bg-black
                    hover:text-white
                    transition-all duration-300
                  "
                >
                  Resume
                </button>
              </motion.div>

              {/* Bottom Meta */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.24,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="
                  mt-24
                  pt-8
                  border-t border-black/10
                  flex flex-wrap gap-10
                "
              >
                {[
                  "React Native",
                  "AI Systems",
                  "Automation Workflows",
                  "Mobile Architecture",
                  "Consumer AI",
                ].map((item) => (
                  <p
                    key={item}
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.22em]
                      text-black/35
                    "
                  >
                    {item}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* RIGHT SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                lg:sticky lg:top-28
                border border-black/10
                rounded-[28px]
                bg-[#f8f6f4]/80
                backdrop-blur-sm
                overflow-hidden
              "
            >
              {/* Top */}
              <div className="p-6 border-b border-black/10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  CURRENTLY BUILDING
                </p>

                <h3
                  className="
                    mt-5
                    text-[34px]
                    tracking-[-0.06em]
                    leading-[0.95]
                    font-semibold
                  "
                >
                  Chaotix
                </h3>

                <p
                  className="
                    mt-5
                    text-[15px]
                    leading-[1.8]
                    text-black/58
                  "
                >
                  AI-powered text-to-game platform focused on interactive
                  storytelling and creator experiences.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2">
                {[
                  {
                    value: "2.5K+",
                    label: "USERS",
                  },
                  {
                    value: "10M+",
                    label: "VIEWS",
                  },
                  {
                    value: "200+",
                    label: "DAUS",
                  },
                  {
                    value: "50K+",
                    label: "AUDIENCE",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                      p-6
                      border-b border-r border-black/10
                      last:border-r-0
                    "
                  >
                    <p className="text-[24px] tracking-[-0.05em] font-semibold">
                      {item.value}
                    </p>

                    <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-black/35">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                    BUILDING IN PUBLIC
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                    100 DAY CHALLENGE
                  </p>
                </div>

                {/* Animated Line */}
                <div className="mt-6 h-[2px] w-full bg-black/6 overflow-hidden rounded-full">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "linear",
                    }}
                    className="h-full w-1/3 bg-black"
                  />
                </div>

                <p
                  className="
                    mt-6
                    text-[14px]
                    leading-[1.8]
                    text-black/55
                  "
                >
                  Sharing experiments around AI systems, mobile engineering,
                  creator workflows, and automation infrastructure.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, 8, 0],
            }}
            transition={{
              delay: 0.5,
              opacity: {
                duration: 0.8,
              },
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              },
            }}
            className="
              mt-24
              flex items-center gap-4
            "
          >
            <div className="w-10 h-[1px] bg-black/20" />

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.24em]
                text-black/35
              "
            >
              Scroll to explore
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
