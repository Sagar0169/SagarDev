"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "10K+", label: "Users" },
  { value: "400+", label: "DAUs" },
  { value: "0→10K", label: "Growth" },
  { value: "3+", label: "Years" },
];

const tags = ["React Native", "TypeScript", "AI Systems", "Node.js", "OpenAI"];

/* Stagger helper */
const stagger = (i: number, base = 0.06) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: i * base, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F7F6F3] overflow-hidden border-b border-black/6">
      {/* ── Background texture ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#000 1px,transparent 1px),linear-gradient(to bottom,#000 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Radial warm glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-100/60 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky-100/40 blur-[100px]" />
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16">
        <div className="min-h-screen grid xl:grid-cols-[1fr_380px] gap-0 items-center pt-28 pb-16">
          {/* ════════════════ LEFT ════════════════ */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              {...stagger(0)}
              className="flex items-center gap-3 mb-10"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-white/70 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-black/50 font-medium">
                  Available for work
                </span>
              </span>
            </motion.div>

            {/* ── THE IDENTITY ── big, proud, unmissable */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] uppercase tracking-[0.28em] text-black/35 font-medium mb-6"
            >
              Engineering • AI Systems • Products
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.05,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-semibold tracking-[-0.07em] leading-[0.88] text-black pb-1"
              style={{ fontSize: "clamp(52px, 8.5vw, 120px)" }}
            >
              Mobile
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-semibold tracking-[-0.07em] leading-[0.88] text-black/20 pb-2"
              style={{ fontSize: "clamp(52px, 8.5vw, 120px)" }}
            >
              Engineer.
            </motion.h1>

            {/* Thin rule */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.35,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full h-px bg-black/10 my-10"
            />

            {/* Description + skills row */}
            <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">
              <motion.div {...stagger(6)}>
                <p className="text-[17px] md:text-[19px] leading-[1.85] text-black/55 max-w-[520px]">
                  Mobile engineer with 3+ years building AI-powered products and
                  scalable systems. Currently CTO at{" "}
                  <span className="text-black font-medium">Chaotix AI</span> —
                  scaled it from 0 to 10K users with 400–500 DAUs.
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-7">
                  {tags.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.45 + i * 0.05,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="px-3 py-1 rounded-full text-[11px] tracking-wide border border-black/10 bg-white/60 backdrop-blur-sm text-black/50"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Metrics — compact 2×2 */}
              <motion.div
                {...stagger(7)}
                className="hidden md:grid grid-cols-2 gap-x-8 gap-y-5 flex-shrink-0"
              >
                {metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-[26px] font-semibold tracking-[-0.05em] text-black leading-none">
                      {m.value}
                    </p>
                    <p className="text-[11px] text-black/38 mt-1.5 uppercase tracking-[0.1em]">
                      {m.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* CTA row */}
            <motion.div
              {...stagger(9)}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                className="h-12 px-7 rounded-2xl bg-black text-white text-[13px] font-medium tracking-[-0.01em] hover:opacity-85 transition-opacity flex items-center gap-2"
              >
                View my work
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ x: 3 }}
                className="text-[13px] text-black/45 hover:text-black transition-colors flex items-center gap-1.5"
              >
                Read my writing
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </div>

          {/* ════════════════ RIGHT — Phone sculpture ════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden xl:flex justify-center items-center relative"
          >
            {/* Floating phone */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5.5,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Phone shell */}
              <div className="relative w-[220px] h-[460px] rounded-[40px] bg-black shadow-[0_60px_120px_rgba(0,0,0,0.22),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden">
                {/* Screen */}
                <div className="absolute inset-[3px] rounded-[37px] bg-[#0a0a0a] overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80px] h-[26px] rounded-full bg-black z-20 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400/80 animate-pulse" />
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                  </div>

                  {/* Screen content — Chaotix card */}
                  <div className="absolute inset-0 flex flex-col pt-16 px-5 pb-6">
                    {/* App header */}
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                        Chaotix AI
                      </p>
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white/40" />
                      </div>
                    </div>

                    {/* Content area */}
                    <div className="flex-1 rounded-2xl bg-white/5 border border-white/8 p-4 mb-4">
                      <p className="text-[8px] uppercase tracking-[0.15em] text-white/25 mb-3">
                        Currently building
                      </p>
                      <p className="text-[20px] font-semibold tracking-[-0.05em] text-white leading-tight mb-2">
                        Chaotix AI
                      </p>
                      <p className="text-[9px] leading-[1.7] text-white/40">
                        Reinventing how Gen Z creates interactive content with
                        AI.
                      </p>

                      {/* Mini metrics — 3 stats that tell the growth story */}
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {[
                          { value: "10K+", label: "Users" },
                          { value: "400+", label: "DAUs" },
                          { value: "0→10K", label: "Growth" },
                        ].map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl bg-white/5 p-2"
                          >
                            <p className="text-[11px] font-semibold tracking-[-0.04em] text-white leading-tight">
                              {m.value}
                            </p>
                            <p className="text-[7px] text-white/30 mt-0.5 uppercase tracking-[0.08em]">
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-8 rounded-xl bg-white/8 flex items-center px-3 gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <p className="text-[8px] text-white/35 tracking-wide">
                          Building in public
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-white/8 flex items-center justify-center text-white/30">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Home indicator */}
                    <div className="flex justify-center mt-4">
                      <div className="w-20 h-1 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>

                {/* Side buttons */}
                <div className="absolute -right-[3px] top-24 w-[3px] h-12 rounded-r bg-zinc-700" />
                <div className="absolute -left-[3px] top-20 w-[3px] h-8 rounded-l bg-zinc-700" />
                <div className="absolute -left-[3px] top-32 w-[3px] h-8 rounded-l bg-zinc-700" />
                <div className="absolute -left-[3px] top-44 w-[3px] h-8 rounded-l bg-zinc-700" />
              </div>

              {/* Shadow underneath */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[140px] h-[20px] rounded-full bg-black/20 blur-xl" />

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, x: 16, y: -8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
                className="absolute -top-4 -right-16 bg-white rounded-2xl border border-black/8 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              >
                <p className="text-[9px] uppercase tracking-[0.15em] text-black/35">
                  Stack
                </p>
                <p className="text-[12px] font-medium text-black mt-0.5">
                  React Native
                </p>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.85, duration: 0.7, ease: "easeOut" }}
                className="absolute -bottom-2 -left-20 bg-white rounded-2xl border border-black/8 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              >
                <p className="text-[9px] uppercase tracking-[0.15em] text-black/35">
                  Experience
                </p>
                <p className="text-[12px] font-medium text-black mt-0.5">
                  3+ Years
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Scroll hint ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 7, 0] }}
          transition={{
            delay: 1,
            opacity: { duration: 0.8 },
            y: { repeat: Infinity, duration: 2.2, ease: "easeInOut" },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
        >
          <div className="w-12 h-px bg-black/12" />
          <p className="text-[9px] uppercase tracking-[0.28em] text-black/25">
            Scroll to explore
          </p>
          <div className="w-12 h-px bg-black/12" />
        </motion.div>
      </div>
    </section>
  );
}
