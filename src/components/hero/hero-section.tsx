"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10K+", label: "Users" },
  { value: "400+", label: "DAUs" },
  { value: "0→10K", label: "Growth" },
  { value: "3+", label: "Years" },
];

const stack = ["React Native", "TypeScript", "OpenAI", "Node.js", "n8n"];

/* ─────────────────────────────────────────
   LIVE PHONE
───────────────────────────────────────── */
function LivePhone() {
  const bars = [28, 42, 35, 60, 48, 74, 58, 82, 70, 100];

  return (
    <div
      style={{
        width: 248,
        height: 504,
        borderRadius: 48,
        background: "#080808",
        boxShadow:
          "0 80px 160px rgba(0,0,0,0.4), 0 0 0 1.5px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.04)",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Screen glass */}
      <div
        style={{
          position: "absolute",
          inset: 4,
          borderRadius: 44,
          background: "#0f0f0f",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 16 }}
        >
          <div
            style={{
              width: 96,
              height: 28,
              borderRadius: 999,
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <motion.div
              animate={{ opacity: [1, 0.2, 1], scale: [1, 1.25, 1] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#00C97B",
              }}
            />
            <div
              style={{
                width: 1,
                height: 12,
                background: "rgba(255,255,255,0.08)",
              }}
            />
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
              }}
            />
          </div>
        </div>

        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 20px 0",
          }}
        >
          <span
            style={{
              fontSize: 9,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.04em",
            }}
          >
            9:41
          </span>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {[3, 5, 7, 5].map((h, i) => (
              <div
                key={i}
                style={{
                  width: 3,
                  height: h,
                  borderRadius: 1,
                  background:
                    i < 3 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
            <div
              style={{
                width: 14,
                height: 7,
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.2)",
                marginLeft: 2,
                display: "flex",
                alignItems: "center",
                padding: "0 2px",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 4,
                  borderRadius: 1,
                  background: "#00C97B",
                }}
              />
            </div>
          </div>
        </div>

        {/* App content */}
        <div
          style={{
            flex: 1,
            padding: "12px 16px 0",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 8,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.28)",
                  marginBottom: 3,
                }}
              >
                Chaotix AI
              </p>
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  color: "#fff",
                }}
              >
                Dashboard
              </p>
            </div>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.15)",
                }}
              />
            </div>
          </div>

          {/* Main stat card */}
          <div
            style={{
              padding: "14px 14px 12px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, rgba(0,201,123,0.16) 0%, rgba(0,201,123,0.06) 100%)",
              border: "1px solid rgba(0,201,123,0.2)",
            }}
          >
            <p
              style={{
                fontSize: 7,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "rgba(0,201,123,0.6)",
                marginBottom: 6,
              }}
            >
              Total Users
            </p>
            <p
              style={{
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "-0.06em",
                color: "#fff",
                lineHeight: 1,
              }}
            >
              10,247
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                marginTop: 6,
              }}
            >
              <span style={{ fontSize: 9, color: "#00C97B", fontWeight: 600 }}>
                ↑ 12.4%
              </span>
              <span style={{ fontSize: 8, color: "rgba(255,255,255,0.25)" }}>
                vs last month
              </span>
            </div>
            {/* Bar chart */}
            <div
              style={{
                marginTop: 10,
                display: "flex",
                alignItems: "flex-end",
                gap: 2.5,
                height: 32,
              }}
            >
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    delay: 0.8 + i * 0.04,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: 2,
                    background:
                      i === bars.length - 1
                        ? "#00C97B"
                        : "rgba(0,201,123,0.22)",
                    transformOrigin: "bottom",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Secondary stats */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
          >
            {[
              { label: "DAUs", value: "427", change: "+8.2%" },
              { label: "Retention", value: "68%", change: "+3.1%" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "11px 12px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  style={{
                    fontSize: 7,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "rgba(255,255,255,0.25)",
                    marginBottom: 5,
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p style={{ fontSize: 8, color: "#00C97B", marginTop: 3 }}>
                  {s.change}
                </p>
              </div>
            ))}
          </div>

          {/* Activity feed */}
          <div>
            <p
              style={{
                fontSize: 8,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.2)",
                marginBottom: 7,
              }}
            >
              Recent
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {["New user joined", "Story published", "AI session started"].map(
                (item, i) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 10px",
                      borderRadius: 11,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#00C97B",
                        flexShrink: 0,
                      }}
                    />
                    <p style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>
                      {item}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div
          style={{
            padding: "10px 16px 12px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {["▦", "◎", "◈", "⊕"].map((icon, i) => (
            <div
              key={i}
              style={{
                width: 36,
                height: 28,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: i === 0 ? "rgba(0,201,123,0.15)" : "transparent",
                fontSize: 13,
                color: i === 0 ? "#00C97B" : "rgba(255,255,255,0.18)",
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Home indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 10,
          }}
        >
          <div
            style={{
              width: 70,
              height: 4,
              borderRadius: 999,
              background: "rgba(255,255,255,0.18)",
            }}
          />
        </div>
      </div>

      {/* Physical buttons */}
      <div
        style={{
          position: "absolute",
          right: -3,
          top: 110,
          width: 3,
          height: 52,
          borderRadius: 2,
          background: "#1e1e1e",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -3,
          top: 88,
          width: 3,
          height: 34,
          borderRadius: 2,
          background: "#1e1e1e",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -3,
          top: 130,
          width: 3,
          height: 64,
          borderRadius: 2,
          background: "#1e1e1e",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -3,
          top: 204,
          width: 3,
          height: 64,
          borderRadius: 2,
          background: "#1e1e1e",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   FLOATING CHIP
───────────────────────────────────────── */
function Chip({
  label,
  value,
  delay,
  style,
}: {
  label: string;
  value: string;
  delay: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "absolute", ...style }}
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 4.5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: 16,
          padding: "10px 16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.05)",
          whiteSpace: "nowrap",
        }}
      >
        <p
          style={{
            fontSize: 9,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "rgba(0,0,0,0.35)",
            marginBottom: 3,
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#0a0a0a",
          }}
        >
          {value}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────── */
export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const phoneY = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#F4F2EE] overflow-hidden border-b border-black/6"
    >
      {/* ── Textures & Glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.065) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-60 -right-60 w-[800px] h-[800px] rounded-full bg-amber-100/50 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-sky-100/40 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-white/25 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 xl:px-20">
        <div className="min-h-screen grid xl:grid-cols-[1fr_520px] items-center pt-24 pb-20 gap-0">
          {/* ════ LEFT ════ */}
          <div className="flex flex-col justify-center max-w-[680px]">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(8px)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.45)",
                }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#00C97B",
                    display: "inline-block",
                  }}
                />
                Available for work
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.06,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontSize: 11,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.3)",
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              Engineering · AI Systems · Products
            </motion.p>

            {/* THE IDENTITY */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontSize: "clamp(64px, 9.5vw, 136px)",
                fontWeight: 800,
                letterSpacing: "-0.075em",
                lineHeight: 0.87,
                color: "#0a0a0a",
                marginBottom: 6,
              }}
            >
              Mobile
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.16,
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontSize: "clamp(64px, 9.5vw, 136px)",
                fontWeight: 800,
                letterSpacing: "-0.075em",
                lineHeight: 0.87,
                color: "rgba(0,0,0,0.16)",
                marginBottom: 8,
              }}
            >
              Engineer.
            </motion.h1>

            {/* Rule */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                height: 1,
                background: "rgba(0,0,0,0.08)",
                margin: "36px 0",
              }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.46,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontSize: "clamp(16px, 1.5vw, 19px)",
                lineHeight: 1.85,
                color: "rgba(0,0,0,0.5)",
                maxWidth: 520,
                marginBottom: 28,
              }}
            >
              Mobile engineer with 3+ years building AI-powered products and
              scalable systems. Currently CTO at{" "}
              <span style={{ color: "#0a0a0a", fontWeight: 600 }}>
                Chaotix AI
              </span>{" "}
              — scaled from 0 to 10K users with 400+ DAUs.
            </motion.p>

            {/* Stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.52,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 40,
              }}
            >
              {stack.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.55 + i * 0.05,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  style={{
                    padding: "6px 13px",
                    borderRadius: 999,
                    border: "1px solid rgba(0,0,0,0.09)",
                    background: "rgba(255,255,255,0.65)",
                    backdropFilter: "blur(8px)",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    color: "rgba(0,0,0,0.48)",
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.58,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "flex",
                gap: 0,
                marginBottom: 44,
                width: "fit-content",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    position: "relative",
                    paddingRight: 32,
                    marginRight: i < stats.length - 1 ? 32 : 0,
                    borderRight:
                      i < stats.length - 1
                        ? "1px solid rgba(0,0,0,0.08)"
                        : "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(20px, 2.2vw, 28px)",
                      fontWeight: 700,
                      letterSpacing: "-0.05em",
                      color: "#0a0a0a",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "rgba(0,0,0,0.35)",
                      marginTop: 5,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.64,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 16,
              }}
            >
              <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  height: 48,
                  padding: "0 28px",
                  borderRadius: 16,
                  background: "#0a0a0a",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                View my work
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ x: 4 }}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  color: "rgba(0,0,0,0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
                className="hover:text-black transition-colors"
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

          {/* ════ RIGHT — Phone + chips ════ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.22,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden xl:block relative"
            style={{ height: 620 }}
          >
            {/* Ambient glow */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 320,
                height: 500,
                borderRadius: "50%",
                background: "rgba(0,201,123,0.07)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            {/* Phone with parallax */}
            <motion.div
              style={{
                y: phoneY,
                position: "absolute",
                top: "50%",
                left: "50%",
                x: "-50%",
                marginTop: -252,
              }}
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              >
                <LivePhone />
              </motion.div>
            </motion.div>

            {/* Floating chips */}
            <Chip
              label="Primary stack"
              value="React Native"
              delay={0.9}
              style={{ top: "12%", left: "0%" }}
            />
            <Chip
              label="Experience"
              value="3+ Years"
              delay={1.05}
              style={{ top: "8%", right: "2%" }}
            />
            <Chip
              label="Current role"
              value="CTO, Chaotix"
              delay={1.2}
              style={{ bottom: "22%", right: "0%" }}
            />
            <Chip
              label="Users scaled"
              value="0 → 10K"
              delay={1.35}
              style={{ bottom: "18%", left: "2%" }}
            />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            delay: 1.4,
            opacity: { duration: 0.8 },
            y: { repeat: Infinity, duration: 2.4, ease: "easeInOut" },
          }}
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{ width: 48, height: 1, background: "rgba(0,0,0,0.1)" }}
          />
          <p
            style={{
              fontSize: 9,
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              color: "rgba(0,0,0,0.22)",
            }}
          >
            Scroll to explore
          </p>
          <div
            style={{ width: 48, height: 1, background: "rgba(0,0,0,0.1)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
