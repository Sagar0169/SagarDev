"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const projects = [
  {
    number: "01",
    title: "Chaotix AI",
    tagline: "Text to game. Instantly.",
    description:
      "AI-powered text-to-game platform for interactive storytelling and content creation. Scaled from 0 to 10K users with 400+ DAUs.",
    tags: ["React Native", "AI", "TypeScript"],
    type: "Mobile Experience",
    year: "2024",
    role: "CTO & Builder",
    accent: "#00C97B",
    stats: [
      { label: "Users", value: "10K+" },
      { label: "DAUs", value: "400+" },
      { label: "Growth", value: "0→10K" },
    ],
    // App screen content
    screen: {
      header: "Chaotix AI",
      sub: "Text to game",
      bars: [40, 60, 45, 80, 55, 90, 70, 100],
      cards: [
        "Chapter 1: The Forest",
        "Chapter 2: The Tower",
        "Chapter 3: The Void",
      ],
    },
  },
  {
    number: "02",
    title: "Pikoo AI",
    tagline: "Your AI copilot for teaching and creating.",
    description:
      "AI tool lab for creators & educators. Automations, outreach & monetization — built for the next generation of online creators.",
    tags: ["AI", "Automation", "n8n", "SaaS"],
    type: "Automation Platform",
    year: "2024",
    role: "Mobile Engineer",
    accent: "#4F8EF7",
    stats: [
      { label: "Stack", value: "n8n + AI" },
      { label: "Type", value: "SaaS" },
      { label: "Target", value: "Creators" },
    ],
    screen: {
      header: "Pikoo AI",
      sub: "Creator copilot",
      bars: [30, 50, 35, 65, 48, 78, 60, 88],
      cards: ["AI Writing", "Auto Schedule", "Monetize"],
    },
  },
  {
    number: "03",
    title: "Creator Outreach Engine",
    tagline: "Replaced a $200/mo agency.",
    description:
      "AI-powered outreach infrastructure replacing a $200/mo agency. Fully automated creator acquisition for an AI startup.",
    tags: ["Automation", "n8n", "CRM", "AI Agents"],
    type: "Internal System",
    year: "2023",
    role: "Systems Builder",
    accent: "#F7A94F",
    stats: [
      { label: "Replaced", value: "$200/mo" },
      { label: "Workflow", value: "Full auto" },
      { label: "Stack", value: "n8n + CRM" },
    ],
    screen: {
      header: "Outreach",
      sub: "Automated pipeline",
      bars: [55, 70, 60, 85, 65, 92, 75, 95],
      cards: ["Find leads", "Enrich data", "Send & track"],
    },
  },
  {
    number: "04",
    title: "Primebook App",
    tagline: "Android at scale.",
    description:
      "Scalable architecture overhaul for the Primebook Android ecosystem. Performance-first engineering serving millions of sessions.",
    tags: ["Android", "Architecture", "Performance"],
    type: "Mobile Engineering",
    year: "2022",
    role: "Software Engineer",
    accent: "#C084FC",
    stats: [
      { label: "Platform", value: "Android" },
      { label: "Focus", value: "Performance" },
      { label: "Scale", value: "Enterprise" },
    ],
    screen: {
      header: "Primebook",
      sub: "Android ecosystem",
      bars: [50, 65, 55, 75, 60, 85, 70, 90],
      cards: ["Core OS", "App Layer", "Performance"],
    },
  },
  {
    number: "05",
    title: "Social AI Scheduler",
    tagline: "Post smarter, not harder.",
    description:
      "AI content scheduling platform for creators with automated publishing workflows and optimal timing intelligence.",
    tags: ["SaaS", "AI", "Automation"],
    type: "Creator Tooling",
    year: "2024",
    role: "Builder",
    accent: "#F472B6",
    stats: [
      { label: "Type", value: "SaaS" },
      { label: "Model", value: "AI-first" },
      { label: "Target", value: "Creators" },
    ],
    screen: {
      header: "Scheduler",
      sub: "AI-powered posts",
      bars: [35, 52, 40, 68, 52, 80, 65, 88],
      cards: ["Draft with AI", "Best time", "Auto publish"],
    },
  },
];

/* ─────────────────────────────────────────
   PHONE MOCKUP — real app UI inside
───────────────────────────────────────── */
function PhoneMockup({
  project,
  size = "lg",
}: {
  project: (typeof projects)[0];
  size?: "lg" | "sm";
}) {
  const w = size === "lg" ? 220 : 160;
  const h = size === "lg" ? 440 : 320;
  const radius = size === "lg" ? 40 : 32;

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 5.5 + Math.random(),
        ease: "easeInOut",
      }}
      style={{ width: w, flexShrink: 0 }}
    >
      {/* Shell */}
      <div
        style={{
          width: w,
          height: h,
          borderRadius: radius,
          background: "#0a0a0a",
          boxShadow: `0 60px 120px rgba(0,0,0,0.35), 0 0 0 1.5px rgba(255,255,255,0.07), 0 0 60px ${project.accent}22`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Screen */}
        <div
          style={{
            position: "absolute",
            inset: 4,
            borderRadius: radius - 4,
            background: "#0f0f0f",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Dynamic island */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 14,
              paddingBottom: 8,
            }}
          >
            <div
              style={{
                width: size === "lg" ? 80 : 60,
                height: size === "lg" ? 22 : 16,
                borderRadius: 999,
                background: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: project.accent,
                }}
              />
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                }}
              />
            </div>
          </div>

          {/* App header */}
          <div
            style={{
              padding: size === "lg" ? "10px 16px" : "8px 12px",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <p
              style={{
                fontSize: size === "lg" ? 9 : 7,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 4,
              }}
            >
              {project.screen.header}
            </p>
            <p
              style={{
                fontSize: size === "lg" ? 16 : 12,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "#fff",
              }}
            >
              {project.screen.sub}
            </p>
          </div>

          {/* Mini bar chart */}
          <div
            style={{
              padding: size === "lg" ? "12px 16px 8px" : "8px 12px 6px",
              display: "flex",
              alignItems: "flex-end",
              gap: 3,
              height: size === "lg" ? 52 : 40,
            }}
          >
            {project.screen.bars.map((b, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 0.5 + i * 0.05,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  flex: 1,
                  height: `${b}%`,
                  borderRadius: 2,
                  background:
                    i === project.screen.bars.length - 1
                      ? project.accent
                      : "rgba(255,255,255,0.08)",
                  transformOrigin: "bottom",
                }}
              />
            ))}
          </div>

          {/* Cards */}
          <div
            style={{
              flex: 1,
              padding: size === "lg" ? "8px 12px" : "6px 10px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              overflow: "hidden",
            }}
          >
            {project.screen.cards.map((card, i) => (
              <motion.div
                key={card}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                style={{
                  padding: size === "lg" ? "10px 12px" : "7px 9px",
                  borderRadius: size === "lg" ? 14 : 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: project.accent,
                    opacity: 0.7,
                  }}
                />
                <p
                  style={{
                    fontSize: size === "lg" ? 9 : 7,
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {card}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Home indicator */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 0 8px",
            }}
          >
            <div
              style={{
                width: size === "lg" ? 60 : 44,
                height: 3,
                borderRadius: 999,
                background: "rgba(255,255,255,0.15)",
              }}
            />
          </div>
        </div>

        {/* Side buttons */}
        <div
          style={{
            position: "absolute",
            right: -2,
            top: 80,
            width: 2.5,
            height: 44,
            borderRadius: 2,
            background: "#2a2a2a",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -2,
            top: 64,
            width: 2.5,
            height: 30,
            borderRadius: 2,
            background: "#2a2a2a",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -2,
            top: 102,
            width: 2.5,
            height: 30,
            borderRadius: 2,
            background: "#2a2a2a",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -2,
            top: 140,
            width: 2.5,
            height: 30,
            borderRadius: 2,
            background: "#2a2a2a",
          }}
        />
      </div>

      {/* Drop shadow */}
      <div
        style={{
          margin: "0 auto",
          marginTop: 16,
          width: "60%",
          height: 16,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.18)",
          filter: "blur(12px)",
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   STAT CHIP
───────────────────────────────────────── */
function StatChip({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div
      style={{
        padding: "10px 16px",
        borderRadius: 16,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(8px)",
      }}
    >
      <p
        style={{
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "rgba(255,255,255,0.25)",
          marginBottom: 4,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          color: accent,
        }}
      >
        {value}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   FEATURED CARD — full-width hero
───────────────────────────────────────── */
function FeaturedCard({ project }: { project: (typeof projects)[0] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative rounded-[36px] overflow-hidden border border-white/[0.06] bg-[#0c0c0c]"
      style={{ minHeight: 560 }}
    >
      {/* Accent ambient glow */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: project.accent,
          filter: "blur(140px)",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: project.accent,
          filter: "blur(100px)",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />

      {/* Grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="grid xl:grid-cols-[1fr_420px] h-full relative z-10">
        {/* LEFT */}
        <div
          style={{
            padding: "52px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {/* Meta row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 40,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 999,
                  border: `1px solid ${project.accent}50`,
                  background: `${project.accent}14`,
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: project.accent,
                }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: project.accent,
                    display: "inline-block",
                  }}
                />
                Featured · {project.type}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.1em",
                }}
              >
                {project.number}
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: "clamp(52px, 6vw, 92px)",
                fontWeight: 800,
                letterSpacing: "-0.07em",
                lineHeight: 0.88,
                color: "#fff",
                marginBottom: 24,
              }}
            >
              {project.title}
            </h2>

            <p
              style={{
                fontSize: "clamp(16px, 1.4vw, 19px)",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.38)",
                maxWidth: 480,
                marginBottom: 32,
              }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 40,
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stat chips */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {project.stats.map((s) => (
                <StatChip key={s.label} {...s} accent={project.accent} />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: 24,
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "rgba(255,255,255,0.2)",
                  marginBottom: 6,
                }}
              >
                Role
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {project.role}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.08, rotate: 12 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "transparent",
                color: "rgba(255,255,255,0.3)",
                fontSize: 16,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ↗
            </motion.button>
          </div>
        </div>

        {/* RIGHT — Phone showcase */}
        <div
          style={{
            borderLeft: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Radial glow behind phone */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at center, ${project.accent}18 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />
          <motion.div style={{ y: phoneY }}>
            <PhoneMockup project={project} size="lg" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   COMPACT CARD — grid items
───────────────────────────────────────── */
function CompactCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="group relative rounded-[28px] overflow-hidden border border-white/[0.06] bg-[#0c0c0c] cursor-pointer hover:border-white/[0.12] transition-all duration-500"
    >
      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 200,
          height: 200,
          background: project.accent,
          filter: "blur(80px)",
          opacity: 0.06,
          pointerEvents: "none",
          transition: "opacity 0.5s",
        }}
        className="group-hover:opacity-[0.12]"
      />

      {/* Accent top stripe */}
      <div
        style={{
          height: 2,
          background: `linear-gradient(to right, ${project.accent}, ${project.accent}30)`,
        }}
      />

      <div className="grid md:grid-cols-[1fr_180px] relative z-10">
        {/* Content */}
        <div style={{ padding: "32px 32px 32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.2)",
                  marginBottom: 8,
                }}
              >
                {project.number} · {project.year}
              </p>
              <h3
                style={{
                  fontSize: "clamp(22px, 2.4vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  color: "#fff",
                }}
              >
                {project.title}
              </h3>
            </div>
            <motion.div
              whileHover={{ scale: 1.08 }}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.2)",
                fontSize: 14,
                cursor: "pointer",
                flexShrink: 0,
              }}
              className="group-hover:text-white group-hover:border-white/25 transition-all"
            >
              ↗
            </motion.div>
          </div>

          <p
            style={{
              fontSize: 13,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.35)",
              marginBottom: 20,
            }}
          >
            {project.description}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "5px 11px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.38)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Key stat */}
          <div
            style={{
              marginTop: 20,
              paddingTop: 20,
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              gap: 16,
            }}
          >
            {project.stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: project.accent,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: 9,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.2)",
                    marginTop: 2,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Phone — small */}
        <div
          style={{
            borderLeft: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 20px",
            background: `radial-gradient(circle at center, ${project.accent}10 0%, transparent 70%)`,
          }}
        >
          <PhoneMockup project={project} size="sm" />
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────── */
export default function FeaturedProjects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section className="relative bg-[#080808] text-white overflow-hidden">
      {/* Global grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[350px] rounded-full bg-emerald-400/[0.035] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] rounded-full bg-blue-400/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 py-28 md:py-40 px-6 md:px-10 xl:px-16">
        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-8 mb-6">
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
                02
              </span>
              <span
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                Featured Projects
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(48px, 7.5vw, 110px)",
                fontWeight: 800,
                letterSpacing: "-0.08em",
                lineHeight: 0.87,
                color: "#fff",
              }}
            >
              Products I've
              <br />
              <span style={{ color: "rgba(255,255,255,0.18)" }}>shipped.</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ x: 4 }}
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.28)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              paddingBottom: 8,
            }}
            className="hidden md:flex hover:text-white transition-colors"
          >
            View all <span>→</span>
          </motion.button>
        </div>

        {/* ── Projects ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Featured hero */}
          <FeaturedCard project={featured} />

          {/* Remaining in 2-col grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {rest.map((p, i) => (
              <CompactCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.15)",
            }}
          >
            {projects.length} projects · React Native first
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {projects.map((p) => (
              <div
                key={p.title}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: p.accent,
                  opacity: 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
