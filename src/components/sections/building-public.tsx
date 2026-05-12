"use client";

import { motion } from "framer-motion";

const content = [
  {
    title: "Building AI Systems in Public",
    category: "AI WORKFLOWS",
    views: "1.2M Views",
  },
  {
    title: "React Native Performance Architecture",
    category: "MOBILE SYSTEMS",
    views: "420K Views",
  },
  {
    title: "AI Creator Automation Pipelines",
    category: "AUTOMATION",
    views: "860K Views",
  },
  {
    title: "Shipping Consumer AI Products Fast",
    category: "PRODUCT BUILDING",
    views: "600K Views",
  },
];

export default function BuildingPublicSection() {
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
            Building In Public
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
            Documenting the process behind AI products and systems.
          </h2>
        </motion.div>

        {/* Main Layout */}
        <div className="mt-28 grid lg:grid-cols-[1fr_420px] gap-20 items-start">
          {/* LEFT CONTENT GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {content.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="
                  group
                  border border-black/10
                  rounded-[24px]
                  overflow-hidden
                  bg-[#f8f6f4]
                "
              >
                {/* Image Area */}
                <div className="aspect-[1.15/1] bg-[#ece8e4] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-black/25">
                      CONTENT PREVIEW
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                    {item.category}
                  </p>

                  <h3
                    className="
                      mt-4
                      text-[24px]
                      tracking-[-0.05em]
                      leading-[1.05]
                      font-semibold
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-black/35">
                    {item.views}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            {/* Intro */}
            <p
              className="
                text-[18px]
                leading-[1.8]
                text-black/60
              "
            >
              Alongside building products, I document the process publicly —
              sharing AI workflows, mobile engineering systems, creator
              automation, and lessons from shipping consumer products fast.
            </p>

            {/* Stats */}
            <div className="mt-16 border-t border-black/10">
              {[
                {
                  value: "10M+",
                  label: "CONTENT VIEWS",
                },
                {
                  value: "50K+",
                  label: "AUDIENCE",
                },
                {
                  value: "100",
                  label: "DAY CHALLENGE",
                },
                {
                  value: "ORGANIC",
                  label: "GROWTH",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    py-8
                    border-b border-black/10
                    flex items-end justify-between
                  "
                >
                  <p className="text-[34px] tracking-[-0.05em] font-semibold">
                    {item.value}
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div className="mt-14">
              <button
                className="
                  h-11
                  px-6
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
                Explore Content
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
