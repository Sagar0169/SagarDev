"use client";

import { motion } from "framer-motion";
import MediaShowcase from "../common/media-showcase";

export default function WorkflowSection() {
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
            Workflow Systems
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
            Building operational systems powered by AI and automation.
          </h2>
        </motion.div>

        {/* Intro */}
        <div className="mt-16 max-w-[720px]">
          <p
            className="
              text-[17px]
              leading-[1.9]
              text-black/60
            "
          >
            Beyond apps, I build automation systems and AI-powered workflows
            focused on creator operations, content pipelines, scheduling,
            publishing, and scalable execution.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="mt-24 grid lg:grid-cols-2 gap-8">
          <MediaShowcase
            category="N8N WORKFLOW"
            title="AI Content Scheduler"
            description="Built an automated creator pipeline that generates captions, schedules posts, optimizes publishing time, and distributes content across platforms."
          />

          <MediaShowcase
            category="AUTOMATION SYSTEM"
            title="AI Caption Engine"
            description="Created AI-assisted workflows for generating short-form captions, hooks, hashtags, and platform-specific formatting."
          />

          <MediaShowcase
            category="CREATOR SYSTEM"
            title="Publishing Infrastructure"
            description="Designed scalable workflows integrating AI generation, scheduling systems, content management, and automation pipelines."
          />

          <MediaShowcase
            category="AI WORKFLOW"
            title="Cross-Platform Distribution"
            description="Built systems for distributing creator content efficiently across multiple platforms with automated optimization."
          />
        </div>
      </div>
    </section>
  );
}
