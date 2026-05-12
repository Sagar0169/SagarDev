"use client";

import { motion } from "framer-motion";
import MediaShowcase from "../common/media-showcase";

export default function ProjectsWall() {
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
            Code & Experiments
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
            Building products, systems, and tools that actually ship.
          </h2>
        </motion.div>

        {/* Intro */}
        <div className="mt-16 max-w-[760px]">
          <p
            className="
              text-[17px]
              leading-[1.9]
              text-black/60
            "
          >
            A collection of AI tools, automation systems, mobile products,
            creator infrastructure, and engineering experiments focused on
            solving real operational and user problems.
          </p>
        </div>

        {/* Top Featured */}
        <div className="mt-28">
          <MediaShowcase
            category="AI PRODUCT"
            title="Chaotix"
            description="AI-powered text-to-game platform focused on creator engagement, interactive storytelling, and AI-native consumer experiences."
          />
        </div>

        {/* Grid */}
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <MediaShowcase
            category="AUTOMATION"
            title="AI Scheduling System"
            description="Workflow infrastructure for AI caption generation, creator scheduling, and cross-platform publishing."
          />

          <MediaShowcase
            category="MOBILE ENGINEERING"
            title="React Native Systems"
            description="Performance-focused mobile architectures built for scalability, UX quality, and rapid iteration."
          />

          <MediaShowcase
            category="AI WORKFLOW"
            title="Content Automation Engine"
            description="Built creator pipelines integrating AI generation, optimization systems, and distribution workflows."
          />

          <MediaShowcase
            category="EXPERIMENT LAB"
            title="AI Product Experiments"
            description="Rapidly prototyped AI-native product concepts focused on interaction, creator tooling, and workflow optimization."
          />
        </div>
      </div>
    </section>
  );
}
