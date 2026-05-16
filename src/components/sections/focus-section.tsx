"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const focuses = [
  { num: "01", label: "Building Chaotix AI", sub: "0 → 10K users" },
  {
    num: "02",
    label: "Exploring advanced AI agents",
    sub: "Research & deploy",
  },
  {
    num: "03",
    label: "Scaling creator infrastructure",
    sub: "Systems that compound",
  },
  {
    num: "04",
    label: "Sharing learnings through writing",
    sub: "Build in public",
  },
];

/* Animated orbit ring */
function OrbitRing({
  radius,
  duration,
  delay = 0,
  dotSize = 4,
  color = "rgba(0,0,0,0.12)",
}: {
  radius: number;
  duration: number;
  delay?: number;
  dotSize?: number;
  color?: string;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
      style={{
        width: radius * 2,
        height: radius * 2,
        borderColor: color,
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
        className="absolute inset-0"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            background: color,
            marginTop: -(dotSize / 2),
          }}
        />
      </motion.div>
    </div>
  );
}

/* Floating phone with screen */
function PhoneSculpture() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="relative"
    >
      {/* Phone shell */}
      <div className="relative w-[200px] h-[400px] rounded-[44px] bg-[#0a0a0a] shadow-[0_80px_160px_rgba(0,0,0,0.35),0_0_0_1.5px_rgba(255,255,255,0.08)]">
        {/* Screen */}
        <div className="absolute inset-[4px] rounded-[40px] bg-[#0f0f0f] overflow-hidden">
          {/* Dynamic island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[68px] h-[22px] rounded-full bg-black z-20" />

          {/* Screen content */}
          <div className="absolute inset-0 flex flex-col pt-14 px-4 pb-5">
            {/* App label */}
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/25 mb-2">
              Chaotix AI
            </p>

            {/* Big stat */}
            <div className="mb-5">
              <p className="text-[36px] font-semibold tracking-[-0.06em] text-white leading-none">
                10K+
              </p>
              <p className="text-[8px] text-white/30 uppercase tracking-[0.12em] mt-1">
                Users
              </p>
            </div>

            {/* Mini chart bars */}
            <div className="flex items-end gap-1 mb-5 h-[40px]">
              {[40, 55, 35, 70, 50, 85, 60, 90, 75, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    delay: 0.6 + i * 0.05,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="flex-1 rounded-sm origin-bottom"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 9
                        ? "rgba(255,255,255,0.7)"
                        : "rgba(255,255,255,0.12)",
                  }}
                />
              ))}
            </div>

            {/* Rows */}
            <div className="space-y-2 flex-1">
              {[100, 80, 65].map((w, i) => (
                <div
                  key={i}
                  className="h-[6px] rounded-full bg-white/8"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>

            {/* Bottom pill */}
            <div className="mt-auto flex items-center gap-2 rounded-2xl bg-white/5 border border-white/8 px-3 py-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-[8px] text-white/40 tracking-wide">
                Building in public
              </p>
            </div>

            {/* Home indicator */}
            <div className="flex justify-center mt-3">
              <div className="w-14 h-[3px] rounded-full bg-white/15" />
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute -right-[3px] top-[90px] w-[3px] h-10 rounded-r bg-zinc-600" />
        <div className="absolute -left-[3px] top-[76px] w-[3px] h-7 rounded-l bg-zinc-600" />
        <div className="absolute -left-[3px] top-[112px] w-[3px] h-7 rounded-l bg-zinc-600" />
        <div className="absolute -left-[3px] top-[148px] w-[3px] h-7 rounded-l bg-zinc-600" />
      </div>

      {/* Drop shadow blob */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[120px] h-[24px] rounded-full bg-black/20 blur-xl" />
    </motion.div>
  );
}

export default function FocusSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Subtle parallax on the phone */
  const phoneY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F4F2EE] text-black border-t border-black/8"
    >
      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top warm glow */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-amber-100/50 blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-10 xl:px-16 py-28 md:py-36">
        {/* ── Section label ── */}
        <div className="flex items-center gap-8 mb-20">
          <span className="text-[13px] text-black/35">05</span>
          <span className="text-[11px] uppercase tracking-[0.22em] text-black/45 font-medium">
            What I'm focused on
          </span>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid xl:grid-cols-[1fr_440px] gap-16 xl:gap-24 items-center">
          {/* ════ LEFT — Numbered focus list ════ */}
          <div>
            {focuses.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.09,
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="group relative flex items-center gap-6 py-8 border-b border-black/8 last:border-0 cursor-default"
              >
                {/* Hover fill */}
                <div className="absolute inset-0 -mx-4 rounded-2xl bg-black/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number */}
                <span className="relative text-[12px] text-black/25 font-medium tabular-nums w-6 flex-shrink-0">
                  {item.num}
                </span>

                {/* Pulse dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-black/50 group-hover:bg-black transition-colors duration-300" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-black/20 group-hover:scale-[2.5] group-hover:opacity-0 transition-all duration-500" />
                </div>

                {/* Label */}
                <div className="relative flex-1">
                  <p
                    className="font-semibold tracking-[-0.04em] leading-none text-black group-hover:text-black/80 transition-colors"
                    style={{ fontSize: "clamp(22px, 3.2vw, 42px)" }}
                  >
                    {item.label}
                  </p>
                  <p className="mt-2 text-[12px] text-black/35 uppercase tracking-[0.15em]">
                    {item.sub}
                  </p>
                </div>

                {/* Arrow — appears on hover */}
                <motion.span
                  className="relative text-black/20 group-hover:text-black/60 transition-colors text-lg"
                  whileHover={{ x: 3 }}
                >
                  →
                </motion.span>
              </motion.div>
            ))}

            {/* ── Pull quote below the list ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="mt-16 pl-14 border-l-2 border-black/15"
            >
              <p
                className="font-semibold tracking-[-0.05em] leading-[1.1] text-black"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)" }}
              >
                "I like building things that live on the internet and make
                people's lives better."
              </p>
              <p className="mt-6 text-[13px] text-black/40 italic">
                — Sagar Pathak
              </p>
            </motion.div>
          </div>

          {/* ════ RIGHT — Phone with orbits ════ */}
          <motion.div
            style={{ y: phoneY }}
            className="hidden xl:flex items-center justify-center relative"
          >
            {/* Orbit system */}
            <div className="relative w-[420px] h-[420px] flex items-center justify-center">
              <OrbitRing
                radius={195}
                duration={28}
                color="rgba(0,0,0,0.06)"
                dotSize={5}
              />
              <OrbitRing
                radius={155}
                duration={20}
                delay={3}
                color="rgba(0,0,0,0.08)"
                dotSize={4}
              />
              <OrbitRing
                radius={115}
                duration={14}
                delay={1}
                color="rgba(0,0,0,0.1)"
                dotSize={3}
              />

              {/* Floating stat chips on outer orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white border border-black/8 rounded-2xl px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)] whitespace-nowrap">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-black/35">
                      Stack
                    </p>
                    <p className="text-[13px] font-semibold text-black mt-0.5">
                      React Native
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 3,
                }}
                className="absolute inset-[40px]"
              >
                <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
                  <div className="bg-white border border-black/8 rounded-2xl px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)] whitespace-nowrap">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-black/35">
                      DAUs
                    </p>
                    <p className="text-[13px] font-semibold text-black mt-0.5">
                      400+
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Center phone */}
              <div className="relative z-10">
                <PhoneSculpture />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom marquee strip ── */}
        <div className="mt-24 border-t border-black/8 pt-8 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[
              "React Native",
              "TypeScript",
              "AI Systems",
              "n8n",
              "OpenAI",
              "Node.js",
              "Mobile Architecture",
              "Creator Tools",
              "Automation",
              "React Native",
              "TypeScript",
              "AI Systems",
              "n8n",
              "OpenAI",
              "Node.js",
              "Mobile Architecture",
              "Creator Tools",
              "Automation",
            ].map((item, i) => (
              <span
                key={i}
                className="text-[12px] uppercase tracking-[0.2em] text-black/25 font-medium flex-shrink-0 flex items-center gap-12"
              >
                {item}
                <span className="w-1 h-1 rounded-full bg-black/15 inline-block" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
