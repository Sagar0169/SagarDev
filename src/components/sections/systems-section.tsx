"use client";

import { motion } from "framer-motion";

const items = [
  {
    index: "01",
    title: "AI Consumer Apps",
    description:
      "Building AI-native mobile experiences focused on usability, engagement, and real-world adoption.",
  },
  {
    index: "02",
    title: "Mobile Systems",
    description:
      "Architecting scalable React Native and Android applications with performance-first foundations.",
  },
  {
    index: "03",
    title: "Growth Infrastructure",
    description:
      "Combining content systems, experimentation, and distribution to drive sustainable product growth.",
  },
  {
    index: "04",
    title: "Automation Workflows",
    description:
      "Designing creator pipelines, AI workflows, and operational systems that scale execution.",
  },
];

export default function SystemsSection() {
  return (
    <section className="relative py-40 md:py-52 px-6">
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
          className="max-w-[820px]"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-black/35">
            Capabilities
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
            Building scalable systems across AI, mobile, and growth.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="mt-28 border-t border-black/10">
          {items.map((item, index) => (
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
                grid
                md:grid-cols-[120px_1fr_420px]
                gap-10
                py-14
                border-b border-black/10
                group
              "
            >
              {/* Number */}
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-black/30">
                  {item.index}
                </p>
              </div>

              {/* Title */}
              <div>
                <h3
                  className="
                    text-[30px]
                    md:text-[38px]
                    tracking-[-0.05em]
                    leading-[1]
                    font-semibold
                  "
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p
                  className="
                    text-[16px]
                    leading-[1.9]
                    text-black/58
                    max-w-[420px]
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
