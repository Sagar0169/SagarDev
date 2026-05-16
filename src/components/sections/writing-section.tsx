"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

type Article = {
  title: string;
  date: string;
  readTime: string;
  tag: "Mobile" | "AI" | "Indie" | "Systems";
  featured?: boolean;
};

const writings: Article[] = [
  {
    title: "Scaling React Native apps to millions",
    date: "May 5, 2026",
    readTime: "7 min read",
    tag: "Mobile",
    featured: true,
  },
  {
    title: "Building AI Agents that actually work",
    date: "May 12, 2026",
    readTime: "5 min read",
    tag: "AI",
  },
  {
    title: "My learnings from building in public",
    date: "Apr 28, 2026",
    readTime: "4 min read",
    tag: "Indie",
  },
  {
    title: "The creator economy is an infrastructure play",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    tag: "Systems",
  },
];

const TAG_COLORS = {
  Mobile: {
    bg: "rgba(212,175,55,0.12)",
    border: "rgba(212,175,55,0.3)",
    text: "rgba(212,175,55,0.9)",
  },
  AI: {
    bg: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.1)",
    text: "rgba(255,255,255,0.45)",
  },
  Indie: {
    bg: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.1)",
    text: "rgba(255,255,255,0.45)",
  },
  Systems: {
    bg: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.1)",
    text: "rgba(255,255,255,0.45)",
  },
};

/* ── Detailed phone illustration ── */
function PhoneIllustration() {
  return (
    <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block select-none">
      <motion.div
        initial={{ opacity: 0, x: 40, rotate: 6 }}
        whileInView={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        viewport={{ once: true }}
        style={{ rotate: 6 }}
      >
        {/* Phone shell */}
        <div
          className="relative"
          style={{
            width: 180,
            height: 360,
            borderRadius: 40,
            border: "1.5px solid rgba(212,175,55,0.25)",
            background:
              "linear-gradient(145deg, rgba(212,175,55,0.06) 0%, rgba(0,0,0,0.4) 100%)",
            boxShadow:
              "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,175,55,0.15)",
          }}
        >
          {/* Screen */}
          <div
            className="absolute"
            style={{
              inset: 8,
              borderRadius: 32,
              background: "#0d0d0d",
              border: "1px solid rgba(255,255,255,0.05)",
              overflow: "hidden",
            }}
          >
            {/* Dynamic island */}
            <div
              className="absolute"
              style={{
                top: 14,
                left: "50%",
                transform: "translateX(-50%)",
                width: 58,
                height: 18,
                borderRadius: 12,
                background: "#000",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />

            {/* Status bar dots */}
            <div
              className="absolute"
              style={{ top: 17, left: 16, display: "flex", gap: 4 }}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: `rgba(212,175,55,${0.2 + i * 0.12})`,
                  }}
                />
              ))}
            </div>

            {/* App content lines */}
            <div className="absolute" style={{ top: 48, left: 14, right: 14 }}>
              {/* Header bar */}
              <div
                style={{
                  height: 24,
                  borderRadius: 6,
                  background: "rgba(212,175,55,0.12)",
                  marginBottom: 10,
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              />
              {/* Content lines */}
              {[90, 65, 80, 55, 72, 48, 60].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: 5,
                    borderRadius: 3,
                    background:
                      i === 0
                        ? "rgba(255,255,255,0.18)"
                        : "rgba(255,255,255,0.07)",
                    width: `${w}%`,
                    marginBottom: 9,
                  }}
                />
              ))}

              {/* Card block */}
              <div
                style={{
                  marginTop: 14,
                  height: 80,
                  borderRadius: 12,
                  border: "1px solid rgba(212,175,55,0.18)",
                  background: "rgba(212,175,55,0.05)",
                  padding: 10,
                }}
              >
                <div
                  style={{
                    height: 5,
                    borderRadius: 3,
                    background: "rgba(212,175,55,0.35)",
                    width: "60%",
                    marginBottom: 8,
                  }}
                />
                {[75, 50].map((w, i) => (
                  <div
                    key={i}
                    style={{
                      height: 4,
                      borderRadius: 3,
                      background: "rgba(255,255,255,0.1)",
                      width: `${w}%`,
                      marginBottom: 6,
                    }}
                  />
                ))}
              </div>

              {/* Bottom nav */}
              <div
                style={{
                  position: "absolute",
                  bottom: -108,
                  left: 0,
                  right: 0,
                  height: 44,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.03)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: "0 8px",
                }}
              >
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: 4,
                        background:
                          i === 1
                            ? "rgba(212,175,55,0.4)"
                            : "rgba(255,255,255,0.08)",
                      }}
                    />
                    <div
                      style={{
                        width: 20,
                        height: 3,
                        borderRadius: 2,
                        background: "rgba(255,255,255,0.06)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Home bar */}
            <div
              className="absolute"
              style={{
                bottom: 8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 52,
                height: 4,
                borderRadius: 2,
                background: "rgba(255,255,255,0.2)",
              }}
            />
          </div>

          {/* Side buttons */}
          <div
            style={{
              position: "absolute",
              right: -2,
              top: 64,
              width: 2,
              height: 36,
              borderRadius: "0 2px 2px 0",
              background: "rgba(212,175,55,0.2)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: -2,
              top: 52,
              width: 2,
              height: 24,
              borderRadius: "2px 0 0 2px",
              background: "rgba(212,175,55,0.15)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: -2,
              top: 84,
              width: 2,
              height: 24,
              borderRadius: "2px 0 0 2px",
              background: "rgba(212,175,55,0.15)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ── Article row ── */
type ArticleRowProps = {
  article: Article;
  index: number;
};

function ArticleRow({ article, index }: ArticleRowProps) {
  const [hovered, setHovered] = useState(false);
  const tagStyle =
    TAG_COLORS[article.tag as keyof typeof TAG_COLORS] || TAG_COLORS.AI;

  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.65,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer relative"
      style={{
        padding: "28px 36px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: hovered ? "rgba(255,255,255,0.025)" : "transparent",
        transition: "background 0.3s ease",
      }}
    >
      {/* Gold left accent on hover */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 2,
          background: "rgba(212,175,55,0.7)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
        {/* Arrow */}
        <motion.span
          animate={{ x: hovered ? 3 : 0, opacity: hovered ? 1 : 0.25 }}
          transition={{ duration: 0.2 }}
          style={{
            color: "rgba(212,175,55,0.8)",
            fontSize: 15,
            paddingTop: 3,
            flexShrink: 0,
          }}
        >
          ↗
        </motion.span>

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Tag */}
          <span
            style={{
              display: "inline-block",
              marginBottom: 10,
              padding: "3px 10px",
              borderRadius: 100,
              background: tagStyle.bg,
              border: `1px solid ${tagStyle.border}`,
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: tagStyle.text,
              fontWeight: 500,
            }}
          >
            {article.tag}
          </span>

          <h3
            style={{
              fontSize: "clamp(18px, 2.5vw, 22px)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.2,
              color: hovered
                ? "rgba(255,255,255,0.95)"
                : "rgba(255,255,255,0.65)",
              transition: "color 0.3s ease",
              margin: 0,
            }}
          >
            {article.title}
          </h3>

          <div
            style={{
              marginTop: 12,
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 12,
              color: "rgba(255,255,255,0.25)",
            }}
          >
            <span>{article.date}</span>
            <div
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
              }}
            />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WritingSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Ambient glow — bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          left: "-5%",
          width: "50vw",
          height: "60vh",
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.035) 0%, transparent 70%)",
        }}
      />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.15,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 pt-28 md:pt-36 pb-28 md:pb-36">
        {/* Section label */}
        <div className="px-6 md:px-12 flex items-center justify-between mb-14">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.3em] font-medium mb-3"
              style={{ color: "rgba(212,175,55,0.6)" }}
            >
              04 — Latest Writing
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.28)",
                lineHeight: 1.7,
                maxWidth: 300,
              }}
            >
              Thoughts on mobile engineering, AI systems, and building in
              public.
            </p>
          </div>

          <motion.button
            whileHover={{ x: 3 }}
            className="hidden md:flex items-center gap-2.5 group"
            style={{
              color: "rgba(255,255,255,0.22)",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span className="group-hover:text-white/50 transition-colors">
              All posts
            </span>
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
              }}
            >
              →
            </span>
          </motion.button>
        </div>

        {/* Gold rule */}
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

        {/* ── Main split ── */}
        <div className="px-6 md:px-12 grid xl:grid-cols-[1.15fr_1fr] gap-6">
          {/* ═══ LEFT — Featured card (Mobile engineer identity) ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
            style={{
              borderRadius: 24,
              minHeight: 520,
              background:
                "linear-gradient(145deg, rgba(212,175,55,0.07) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)",
              border: "1px solid rgba(212,175,55,0.18)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.12)",
            }}
          >
            {/* Inner dark base */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(8,8,8,0.7)", borderRadius: 24 }}
            />

            {/* Radial web decoration */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: -100,
                top: "50%",
                transform: "translateY(-50%)",
                opacity: 0.12,
              }}
            >
              <div style={{ position: "relative", width: 380, height: 380 }}>
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transformOrigin: "left",
                      transform: `rotate(${i * 20}deg)`,
                    }}
                  >
                    <div
                      style={{
                        width: 190,
                        height: 1,
                        background: "rgba(212,175,55,0.3)",
                      }}
                    />
                  </div>
                ))}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      border: "1px solid rgba(212,175,55,0.12)",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 70 + i * 58,
                      height: 70 + i * 58,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Phone illustration */}
            <PhoneIllustration />

            {/* Content */}
            <div
              className="relative z-10 h-full flex flex-col justify-end"
              style={{ padding: "44px 48px", minHeight: 520 }}
            >
              {/* Identity badge — Mobile engineer first */}
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  width: "fit-content",
                  padding: "5px 14px",
                  borderRadius: 100,
                  border: "1px solid rgba(212,175,55,0.35)",
                  background: "rgba(212,175,55,0.08)",
                  marginBottom: 28,
                }}
              >
                {/* Pulsing dot */}
                <span style={{ position: "relative", width: 7, height: 7 }}>
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background: "rgba(212,175,55,0.5)",
                      animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      inset: 1,
                      borderRadius: "50%",
                      background: "rgb(212,175,55)",
                    }}
                  />
                </span>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: "rgba(212,175,55,0.9)",
                  }}
                >
                  Mobile Engineer
                </span>
              </motion.span>

              <h3
                style={{
                  maxWidth: 460,
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 700,
                  letterSpacing: "-0.06em",
                  lineHeight: 0.95,
                  color: "#fff",
                  margin: "0 0 24px",
                }}
              >
                Scaling React Native apps to millions
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.38)",
                  lineHeight: 1.75,
                  maxWidth: 400,
                  margin: "0 0 28px",
                }}
              >
                Architecture patterns, performance wins, and hard lessons from
                shipping to production at scale.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 32,
                }}
              >
                <span>May 5, 2026</span>
                <div
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                  }}
                />
                <span>7 min read</span>
              </div>

              {/* CTA row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: 24,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Read article
                </span>
                <motion.button
                  whileHover={{ x: 4, scale: 1.05 }}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    border: "1px solid rgba(212,175,55,0.3)",
                    background: "rgba(212,175,55,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(212,175,55,0.8)",
                    fontSize: 16,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* ═══ RIGHT — Article list ═══ */}
          <div
            style={{
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(255,255,255,0.015)",
              overflow: "hidden",
            }}
          >
            {/* Right header */}
            <div
              style={{
                padding: "24px 36px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.2)",
                  fontWeight: 500,
                }}
              >
                More articles
              </span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.15)" }}>
                {writings.length}
              </span>
            </div>

            {writings.map((article, index) => (
              <ArticleRow key={article.title} article={article} index={index} />
            ))}
          </div>
        </div>

        {/* ── Statement ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="px-6 md:px-12 mt-24 md:mt-32"
        >
          <div
            style={{
              height: 1,
              width: 48,
              background: "rgba(212,175,55,0.4)",
              marginBottom: 40,
            }}
          />

          <h2
            style={{
              fontSize: "clamp(40px, 6.5vw, 96px)",
              fontWeight: 700,
              letterSpacing: "-0.07em",
              lineHeight: 0.9,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 1000,
            }}
          >
            Crafting{" "}
            <em
              style={{
                fontStyle: "normal",
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
              }}
            >
              mobile-first
            </em>{" "}
            <span style={{ color: "rgba(212,175,55,0.85)" }}>systems</span>{" "}
            <em
              style={{
                fontStyle: "normal",
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.18)",
              }}
            >
              that ship.
            </em>
          </h2>

          <p
            style={{
              marginTop: 28,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(212,175,55,0.45)",
              fontWeight: 500,
            }}
          >
            From architecture to production — mobile at the core.
          </p>
        </motion.div>
      </div>

      {/* Ping animation */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
