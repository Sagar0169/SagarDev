"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

const stats = [
  { value: "3+", label: "Years Building" },
  { value: "10+", label: "Systems Shipped" },
  { value: "10M+", label: "Content Views" },
  { value: "50K+", label: "Audience" },
];

const pillars = [
  {
    index: "01",
    title: "Approach",
    body: "Combining engineering precision, product thinking, AI workflows, and automation systems to create scalable digital products focused on real-world usage and rapid iteration.",
  },
  {
    index: "02",
    title: "Beyond Code",
    body: "Alongside building products, I document the process publicly through creator-focused content around AI systems, mobile engineering, growth strategy, and building in public.",
  },
];

// Social card data for the marquee
const instagramPosts = [
  {
    id: 1,
    platform: "instagram",
    label: "@the.sagarpathak",
    caption: "Building in public — every system, every iteration.",
    color: "#E1306C",
    gradient: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #833AB4 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    url: "https://www.instagram.com/the.sagarpathak/",
  },
  {
    id: 2,
    platform: "linkedin",
    label: "Sagar Pathak",
    caption: "Product meets engineering — sharing the journey.",
    color: "#0A66C2",
    gradient: "linear-gradient(135deg, #0077B5 0%, #0A66C2 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    url: "https://www.linkedin.com/in/sagarpathak/",
  },
  {
    id: 3,
    platform: "instagram",
    label: "@the.sagarpathak",
    caption: "AI workflows & automation — simplicity at scale.",
    color: "#E1306C",
    gradient: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #833AB4 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    url: "https://www.instagram.com/the.sagarpathak/",
  },
  {
    id: 4,
    platform: "linkedin",
    label: "Sagar Pathak",
    caption: "Mobile engineering insights from the trenches.",
    color: "#0A66C2",
    gradient: "linear-gradient(135deg, #0077B5 0%, #0A66C2 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    url: "https://www.linkedin.com/in/sagarpathak/",
  },
  {
    id: 5,
    platform: "instagram",
    label: "@the.sagarpathak",
    caption: "Growth strategy & building an audience online.",
    color: "#E1306C",
    gradient: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #833AB4 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    url: "https://www.instagram.com/the.sagarpathak/",
  },
  {
    id: 6,
    platform: "linkedin",
    label: "Sagar Pathak",
    caption: "10M+ content views. The compounding effect of consistency.",
    color: "#0A66C2",
    gradient: "linear-gradient(135deg, #0077B5 0%, #0A66C2 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    url: "https://www.linkedin.com/in/sagarpathak/",
  },
];

// ─── Marquee Social Strip ───────────────────────────────────────────────────
function SocialMarquee() {
  const items = [...instagramPosts, ...instagramPosts]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden py-2">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #f7f5f2, transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #f7f5f2, transparent)" }}
      />

      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        style={{ width: "max-content" }}
      >
        {items.map((post, i) => (
          <a
            key={`${post.id}-${i}`}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 w-[260px] rounded-2xl border border-black/8 bg-white/70 backdrop-blur-sm p-5 hover:border-black/16 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            {/* Top row: platform icon + handle */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                  style={{ background: post.gradient }}
                >
                  {post.icon}
                </div>
                <div>
                  <p
                    className="text-[10px] leading-none font-medium text-black/55"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {post.label}
                  </p>
                  <p
                    className="text-[8px] uppercase tracking-[0.18em] text-black/30 mt-0.5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {post.platform}
                  </p>
                </div>
              </div>
              {/* Arrow */}
              <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center group-hover:border-black/20 group-hover:bg-black/4 transition-all duration-200">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 8L8 2M8 2H4M8 2V6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black/35"
                  />
                </svg>
              </div>
            </div>

            {/* Caption */}
            <p
              className="text-[12.5px] leading-[1.7] text-black/50 group-hover:text-black/65 transition-colors duration-300"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
              }}
            >
              "{post.caption}"
            </p>

            {/* Bottom accent line */}
            <div
              className="mt-4 h-px w-full opacity-30 rounded-full"
              style={{ background: post.gradient }}
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-40 md:py-60 bg-[#f7f5f2] overflow-hidden"
    >
      {/* ── Background grain texture overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
        }}
      />

      {/* ── Ambient orbs ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-[-60px] right-[-80px] w-[560px] h-[560px] rounded-full pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-amber-200/18 blur-[140px]" />
      </motion.div>
      <div
        className="absolute bottom-20 left-[-120px] w-[400px] h-[400px] rounded-full bg-rose-100/15 blur-[100px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-stone-300/10 blur-[160px] pointer-events-none"
        aria-hidden
      />

      {/* ─────────────────────────────── MAIN CONTENT ── */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[260px_1fr] gap-16 xl:gap-28">
          {/* LEFT — sticky label column */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-36 h-fit"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                style={{ scaleY: lineScale, originY: 0 }}
                className="w-px h-12 bg-black/15"
              />
              <p
                className="text-[9px] uppercase tracking-[0.28em] text-black/35"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Philosophy
              </p>
            </div>

            <p
              className="text-[90px] leading-none tracking-[-0.08em] font-semibold text-black/[0.035] select-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              02
            </p>

            {/* Social quick-links */}
            <div className="mt-10 flex flex-col gap-3">
              {[
                {
                  label: "Instagram",
                  handle: "@the.sagarpathak",
                  url: "https://www.instagram.com/the.sagarpathak/",
                  color: "#E1306C",
                  gradient:
                    "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #833AB4 100%)",
                },
                {
                  label: "LinkedIn",
                  handle: "Sagar Pathak",
                  url: "https://www.linkedin.com/in/sagarpathak/",
                  color: "#0A66C2",
                  gradient: "linear-gradient(135deg, #0077B5 0%, #0A66C2 100%)",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-black/8 bg-white/50 px-4 py-3 hover:border-black/16 hover:bg-white/80 transition-all duration-300"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex-shrink-0"
                    style={{ background: s.gradient }}
                  />
                  <div className="min-w-0">
                    <p
                      className="text-[9px] uppercase tracking-[0.2em] text-black/30"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {s.label}
                    </p>
                    <p className="text-[11px] text-black/55 font-medium truncate mt-0.5">
                      {s.handle}
                    </p>
                  </div>
                  <svg
                    className="ml-auto flex-shrink-0 text-black/20 group-hover:text-black/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M2 8L8 2M8 2H4M8 2V6"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — main content */}
          <div>
            {/* ── Main heading ── */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[820px]"
            >
              {/* Section eyebrow */}
              <motion.p
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 text-[10px] uppercase tracking-[0.3em] text-black/30 flex items-center gap-3"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <span className="w-5 h-px bg-black/20 inline-block" />
                About
              </motion.p>

              <h2
                className="text-[40px] md:text-[56px] xl:text-[64px] tracking-[-0.055em] leading-[0.92] font-semibold text-[#111]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Building systems that{" "}
                <em
                  className="not-italic"
                  style={{ color: "rgba(17,17,17,0.2)" }}
                >
                  scale with clarity
                </em>{" "}
                and restraint.
              </h2>

              <p className="mt-9 text-[15px] leading-[1.95] text-black/48 max-w-[640px]">
                My work sits at the intersection of AI systems, mobile
                engineering, product execution, and audience-driven growth —
                building experiences that feel effortlessly simple externally
                while operating on deeply optimised workflows underneath.
              </p>
            </motion.div>

            {/* ── Animated divider ── */}
            <div className="relative mt-16">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px bg-black/7"
              />
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute top-0 left-0 h-px w-16 bg-black/30"
              />
            </div>

            {/* ── Pillar cards ── */}
            <div className="mt-14 grid md:grid-cols-2 gap-3.5">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative rounded-2xl border border-black/7 bg-white/55 backdrop-blur-md p-7 hover:border-black/13 hover:bg-white/80 transition-all duration-400 overflow-hidden"
                >
                  {/* card ambient glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(0,0,0,0.015) 0%, transparent 70%)",
                    }}
                  />

                  <div className="flex items-start justify-between mb-5">
                    <p
                      className="text-[9px] uppercase tracking-[0.26em] text-black/28"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {p.title}
                    </p>
                    <span
                      className="text-[11px] tracking-[-0.02em] text-black/13 font-medium"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {p.index}
                    </span>
                  </div>
                  <p className="text-[13.5px] leading-[1.9] text-black/48 group-hover:text-black/62 transition-colors duration-300">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ── Stats grid ── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3.5 rounded-2xl border border-black/7 bg-white/40 backdrop-blur-md p-8 relative overflow-hidden"
            >
              {/* Subtle top-right ornament */}
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-[0.025]">
                <svg viewBox="0 0 128 128" fill="none">
                  <circle
                    cx="128"
                    cy="0"
                    r="96"
                    stroke="black"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="128"
                    cy="0"
                    r="64"
                    stroke="black"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="128"
                    cy="0"
                    r="32"
                    stroke="black"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/7">
                {stats.map((item, i) => (
                  <div key={item.label} className="px-6 first:pl-0 last:pr-0">
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.65,
                        delay: 0.08 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-[38px] md:text-[44px] tracking-[-0.07em] font-semibold text-[#111]"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {item.value}
                    </motion.p>
                    <p
                      className="mt-1.5 text-[8.5px] uppercase tracking-[0.24em] text-black/30"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Closing quote ── */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25 }}
              className="mt-9 flex items-center gap-5"
            >
              <div className="w-7 h-px bg-black/13 shrink-0" />
              <p
                className="text-[12px] italic leading-relaxed text-black/32"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                "Simple on the outside. Ruthlessly optimised underneath."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── SOCIAL MARQUEE STRIP ─── full bleed, outside max-width container ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-24 w-full"
      >
        {/* Strip header — still constrained to align with content above */}
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between mb-7">
          <div className="flex items-center gap-3">
            <span
              className="text-[9px] uppercase tracking-[0.28em] text-black/30"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Find me online
            </span>
            <span className="w-8 h-px bg-black/12 inline-block" />
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400" />
            </span>
            <span
              className="text-[9px] uppercase tracking-[0.22em] text-black/25"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Active
            </span>
          </div>
        </div>

        {/* The marquee — truly full width, no padding clipping */}
        <div className="w-full">
          <SocialMarquee />
        </div>
      </motion.div>

      {/* ─── Bottom edge decoration ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/6" />
    </section>
  );
}
