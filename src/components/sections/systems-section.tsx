"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

interface SystemItem {
  title: string;
  description: string;
  number: string;
  icon: ReactNode;
}

interface SystemCardProps {
  system: SystemItem;
  index: number;
}

const systems = [
  {
    title: "AI Automations",
    description: "End-to-end workflows using n8n, OpenAI APIs & vector DBs.",
    number: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="4" cy="14" r="2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="24" cy="14" r="2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="14" cy="24" r="2" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M6 14h5M17 14h5M14 6v5M14 17v5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Data Pipelines",
    description: "Scalable data processing and automation pipelines.",
    number: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <ellipse
          cx="14"
          cy="7"
          rx="8"
          ry="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M6 7v7c0 1.66 3.58 3 8 3s8-1.34 8-3V7"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M6 14v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
  {
    title: "Creator Systems",
    description: "Systems for content, distribution, monetization and growth.",
    number: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <circle
          cx="14"
          cy="9"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle
          cx="5"
          cy="10"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle
          cx="23"
          cy="10"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M8 22c0-3.31 2.69-6 6-6s6 2.69 6 6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M1 23c0-2.5 1.79-4 4-4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M27 23c0-2.5-1.79-4-4-4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "AI Agents",
    description: "Intelligent agents for research, outreach and operations.",
    number: "04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <rect
          x="6"
          y="9"
          width="16"
          height="13"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M10 9V7a4 4 0 018 0v2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="11" cy="15" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="17" cy="15" r="1.5" fill="currentColor" opacity="0.6" />
        <path
          d="M11 19h6"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Mobile Architecture",
    description: "Performant, scalable and maintainable app architecture.",
    number: "05",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <rect
          x="8"
          y="2"
          width="12"
          height="24"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M12 5h4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="14" cy="22" r="1" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
];

function SystemCard({ system, index }: SystemCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className="relative group cursor-default"
    >
      {/* Gold shimmer border on hover */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          background:
            "linear-gradient(135deg, rgba(212,175,55,0.25) 0%, transparent 60%)",
          boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.3)",
        }}
      />

      <div
        className="relative h-full rounded-2xl p-7 flex flex-col gap-6 transition-all duration-500"
        style={{
          background: hovered
            ? "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)"
            : "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: hovered
            ? "0 24px 60px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05) inset"
            : "0 4px 24px rgba(0,0,0,0.2)",
        }}
      >
        {/* Number */}
        <span
          className="text-[11px] font-medium tracking-[0.25em] transition-colors duration-300"
          style={{
            color: hovered ? "rgba(212,175,55,0.8)" : "rgba(255,255,255,0.18)",
          }}
        >
          {system.number}
        </span>

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: hovered
              ? "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))"
              : "rgba(255,255,255,0.04)",
            border: hovered
              ? "1px solid rgba(212,175,55,0.25)"
              : "1px solid rgba(255,255,255,0.06)",
            color: hovered ? "rgba(212,175,55,0.9)" : "rgba(255,255,255,0.35)",
          }}
        >
          {system.icon}
        </div>

        {/* Title */}
        <h3
          className="text-[15px] font-semibold tracking-[-0.03em] leading-snug transition-colors duration-300"
          style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.75)" }}
        >
          {system.title}
        </h3>

        {/* Description */}
        <p
          className="text-[13px] leading-[1.8] mt-auto"
          style={{ color: "rgba(255,255,255,0.32)" }}
        >
          {system.description}
        </p>

        {/* Arrow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-1.5 text-[12px] tracking-[0.1em] uppercase font-medium"
          style={{ color: "rgba(212,175,55,0.7)" }}
        >
          <span>Explore</span>
          <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SystemsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Ambient radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "60vh",
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, #080808, transparent)" }}
      />

      <div className="relative z-10 py-28 md:py-36">
        {/* Header row */}
        <div className="px-6 md:px-12 flex items-end justify-between mb-16">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.3em] font-medium mb-4"
              style={{ color: "rgba(212,175,55,0.6)" }}
            >
              03 — Systems I Build
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-[13px] leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Precision-engineered solutions built for leverage, automation, and
              lasting scale.
            </motion.h2>
          </div>

          <motion.button
            whileHover={{ x: 3 }}
            className="hidden md:flex items-center gap-2.5 text-[12px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 group"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            <span className="group-hover:text-white/60 transition-colors">
              View all
            </span>
            <span
              className="w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-amber-400/40"
              style={{ borderColor: "rgba(255,255,255,0.12)", fontSize: 11 }}
            >
              →
            </span>
          </motion.button>
        </div>

        {/* Thin gold separator */}
        <div className="px-6 md:px-12 mb-12">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(212,175,55,0.5), rgba(212,175,55,0.05) 60%, transparent)",
              transformOrigin: "left",
            }}
          />
        </div>

        {/* Cards grid */}
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
            {systems.map((system, index) => (
              <SystemCard key={system.title} system={system} index={index} />
            ))}
          </div>
        </div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="px-6 md:px-12 mt-24 md:mt-32"
        >
          {/* Thin rule */}
          <div
            className="mb-10 w-12"
            style={{ height: "1px", background: "rgba(212,175,55,0.4)" }}
          />

          <h2
            className="font-semibold tracking-[-0.07em] leading-[0.88] max-w-[1100px]"
            style={{
              fontSize: "clamp(42px, 7vw, 108px)",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Systems designed{" "}
            <em
              className="not-italic"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.18)",
              }}
            >
              for scale,
            </em>{" "}
            <span style={{ color: "rgba(212,175,55,0.85)" }}>automation,</span>{" "}
            <em
              className="not-italic"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.18)",
              }}
            >
              and
            </em>{" "}
            execution.
          </h2>

          {/* Sub-label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-[13px] tracking-[0.15em] uppercase font-medium"
            style={{ color: "rgba(212,175,55,0.45)" }}
          >
            Built to compound. Designed to last.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
