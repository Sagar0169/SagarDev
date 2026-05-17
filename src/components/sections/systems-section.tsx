"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

interface SystemItem {
  title: string;
  description: string;
  number: string;
  accent: string;
  tag: string;
  icon: ReactNode;
  preview: { bars: number[]; label: string; value: string };
}

const systems: SystemItem[] = [
  {
    title: "Mobile Architecture",
    description:
      "Performant, scalable React Native systems. Clean code, fast iteration, built to grow.",
    number: "01",
    accent: "#00C97B",
    tag: "Core · Primary",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <rect
          x="8"
          y="2"
          width="12"
          height="24"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 5h4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="14" cy="22" r="1" fill="currentColor" opacity="0.7" />
        <path
          d="M11 10h6M11 13h4"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    preview: {
      bars: [40, 60, 45, 80, 58, 92, 70, 100],
      label: "App perf",
      value: "98ms",
    },
  },
  {
    title: "AI Automations",
    description:
      "End-to-end workflows using n8n, OpenAI APIs & vector DBs. Set it and compound.",
    number: "02",
    accent: "#4F8EF7",
    tag: "AI · Workflows",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
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
    preview: {
      bars: [30, 50, 38, 68, 52, 80, 62, 88],
      label: "Runs today",
      value: "1.2K",
    },
  },
  {
    title: "Creator Systems",
    description:
      "Onboarding, outreach, monetization loops — infrastructure that compounds for creators.",
    number: "03",
    accent: "#F7A94F",
    tag: "Creator · Growth",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
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
          d="M1 23c0-2.5 1.79-4 4-4M27 23c0-2.5-1.79-4-4-4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
    preview: {
      bars: [55, 70, 58, 82, 65, 88, 72, 95],
      label: "Creators",
      value: "10K+",
    },
  },
  {
    title: "AI Agents",
    description:
      "Intelligent agents for research, outreach and operations. Autonomous, auditable, fast.",
    number: "04",
    accent: "#C084FC",
    tag: "Agents · Ops",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
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
    preview: {
      bars: [35, 52, 42, 70, 55, 82, 65, 90],
      label: "Tasks auto",
      value: "94%",
    },
  },
  {
    title: "Data Pipelines",
    description:
      "Scalable data processing and automation pipelines. Raw inputs into actionable insight.",
    number: "05",
    accent: "#F472B6",
    tag: "Data · Scale",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
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
    preview: {
      bars: [42, 58, 48, 72, 58, 85, 68, 92],
      label: "Records/s",
      value: "50K",
    },
  },
];

function MiniPhone({
  system,
  active,
}: {
  system: SystemItem;
  active: boolean;
}) {
  return (
    <div
      style={{
        width: 72,
        height: 130,
        borderRadius: 16,
        background: "#080808",
        boxShadow: active
          ? `0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07), 0 0 20px ${system.accent}30`
          : "0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
        position: "relative",
        flexShrink: 0,
        transition: "box-shadow 0.4s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 2,
          borderRadius: 14,
          background: "#0f0f0f",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 5 }}
        >
          <div
            style={{
              width: 24,
              height: 7,
              borderRadius: 999,
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              animate={{ opacity: active ? [1, 0.3, 1] : 0.3 }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: system.accent,
              }}
            />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            padding: "6px 5px 0",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 1.5,
              height: 30,
            }}
          >
            {system.preview.bars.map((h, i) => (
              <motion.div
                key={i}
                animate={{ scaleY: active ? 1 : 0.4 }}
                transition={{ delay: i * 0.03, duration: 0.4, ease: "easeOut" }}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: 1,
                  background:
                    i === system.preview.bars.length - 1
                      ? system.accent
                      : `${system.accent}30`,
                  transformOrigin: "bottom",
                }}
              />
            ))}
          </div>
          <div
            style={{
              padding: "4px 4px",
              borderRadius: 6,
              background: `${system.accent}12`,
              border: `1px solid ${system.accent}25`,
            }}
          >
            <p
              style={{
                fontSize: 6,
                color: `${system.accent}90`,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 1,
              }}
            >
              {system.preview.label}
            </p>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.03em",
              }}
            >
              {system.preview.value}
            </p>
          </div>
          {[100, 70].map((w, i) => (
            <div
              key={i}
              style={{
                height: 4,
                borderRadius: 2,
                background: "rgba(255,255,255,0.06)",
                width: `${w}%`,
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 4,
          }}
        >
          <div
            style={{
              width: 20,
              height: 2,
              borderRadius: 999,
              background: "rgba(255,255,255,0.15)",
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: -1.5,
          top: 22,
          width: 1.5,
          height: 14,
          borderRadius: 1,
          background: "#222",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -1.5,
          top: 18,
          width: 1.5,
          height: 10,
          borderRadius: 1,
          background: "#222",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -1.5,
          top: 32,
          width: 1.5,
          height: 18,
          borderRadius: 1,
          background: "#222",
        }}
      />
    </div>
  );
}

function SystemCard({ system, index }: { system: SystemItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const isFeatured = index === 0;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 22 });
  const sy = useSpring(my, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
        setHovered(false);
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.75,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 900,
      }}
      className="relative group cursor-default"
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 24,
          pointerEvents: "none",
          boxShadow: `inset 0 0 0 1px ${system.accent}50, 0 0 40px ${system.accent}18`,
        }}
      />

      <div
        style={{
          position: "relative",
          height: "100%",
          borderRadius: 24,
          padding: isFeatured ? "28px 24px" : "24px 20px",
          display: "flex",
          flexDirection: "column",
          gap: isFeatured ? 20 : 16,
          background: hovered
            ? `linear-gradient(145deg, ${system.accent}0a 0%, rgba(255,255,255,0.02) 100%)`
            : "rgba(255,255,255,0.025)",
          border: `1px solid ${hovered ? system.accent + "35" : "rgba(255,255,255,0.07)"}`,
          boxShadow: hovered
            ? `0 32px 80px rgba(0,0,0,0.6), 0 0 60px ${system.accent}12`
            : "0 4px 24px rgba(0,0,0,0.25)",
          transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.24em",
                fontWeight: 600,
                color: hovered ? system.accent : "rgba(255,255,255,0.2)",
                transition: "color 0.3s",
              }}
            >
              {system.number}
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "3px 9px",
                borderRadius: 999,
                background: hovered
                  ? `${system.accent}15`
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${hovered ? system.accent + "35" : "rgba(255,255,255,0.07)"}`,
                fontSize: 9,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: hovered ? system.accent : "rgba(255,255,255,0.28)",
                transition: "all 0.3s",
                whiteSpace: "nowrap" as const,
              }}
            >
              {isFeatured && (
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: system.accent,
                    display: "inline-block",
                  }}
                />
              )}
              {system.tag}
            </span>
          </div>
          <motion.div
            animate={{ y: hovered ? -4 : 0, scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <MiniPhone system={system} active={hovered} />
          </motion.div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: hovered
                ? `${system.accent}18`
                : "rgba(255,255,255,0.04)",
              border: `1px solid ${hovered ? system.accent + "30" : "rgba(255,255,255,0.07)"}`,
              color: hovered ? system.accent : "rgba(255,255,255,0.35)",
              transition: "all 0.35s",
            }}
          >
            {system.icon}
          </div>
          <h3
            style={{
              fontSize: isFeatured ? 17 : 15,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.15,
              color: hovered ? "#fff" : "rgba(255,255,255,0.75)",
              transition: "color 0.3s",
            }}
          >
            {system.title}
          </h3>
        </div>

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.32)",
            marginTop: "auto",
          }}
        >
          {system.description}
        </p>

        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.25 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            fontWeight: 600,
            color: system.accent,
          }}
        >
          Explore <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function HeroPhone() {
  const bars = [32, 48, 38, 64, 50, 76, 60, 88, 72, 100];
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      style={{
        width: 160,
        height: 320,
        borderRadius: 32,
        background: "#080808",
        boxShadow:
          "0 60px 120px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07), 0 0 80px rgba(0,201,123,0.15)",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 3,
          borderRadius: 29,
          background: "#0f0f0f",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 10 }}
        >
          <div
            style={{
              width: 56,
              height: 16,
              borderRadius: 999,
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <motion.div
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#00C97B",
              }}
            />
            <div
              style={{
                width: 1,
                height: 8,
                background: "rgba(255,255,255,0.1)",
              }}
            />
            <div
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
              }}
            />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            padding: "8px 10px",
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <p
            style={{
              fontSize: 7,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Systems Live
          </p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              color: "#fff",
              lineHeight: 1,
            }}
          >
            5 Active
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 2,
              height: 40,
            }}
          >
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 0.4 + i * 0.05,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: 2,
                  background:
                    i === bars.length - 1 ? "#00C97B" : "rgba(0,201,123,0.2)",
                  transformOrigin: "bottom",
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {["Mobile Architecture", "AI Automations", "Creator Systems"].map(
              (item, i) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "5px 7px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: ["#00C97B", "#4F8EF7", "#F7A94F"][i],
                      flexShrink: 0,
                    }}
                  />
                  <p style={{ fontSize: 7, color: "rgba(255,255,255,0.4)" }}>
                    {item}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 8,
          }}
        >
          <div
            style={{
              width: 44,
              height: 3,
              borderRadius: 999,
              background: "rgba(255,255,255,0.15)",
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: -2,
          top: 60,
          width: 2,
          height: 30,
          borderRadius: 1,
          background: "#1e1e1e",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -2,
          top: 48,
          width: 2,
          height: 20,
          borderRadius: 1,
          background: "#1e1e1e",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -2,
          top: 74,
          width: 2,
          height: 36,
          borderRadius: 1,
          background: "#1e1e1e",
        }}
      />
    </motion.div>
  );
}

export default function SystemsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.28) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.15,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70vw",
          height: "50vh",
          background:
            "radial-gradient(ellipse, rgba(0,201,123,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, #080808, transparent)" }}
      />

      <div className="relative z-10 py-28 md:py-36">
        <div className="px-6 md:px-10 xl:px-16 mb-16">
          <div className="flex items-end justify-between gap-8">
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  marginBottom: 16,
                }}
              >
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
                  03
                </span>
                <span
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  Systems I Build
                </span>
              </div>
              <div className="flex items-center gap-10 flex-wrap">
                <h2
                  style={{
                    fontSize: "clamp(44px, 7vw, 96px)",
                    fontWeight: 800,
                    letterSpacing: "-0.075em",
                    lineHeight: 0.88,
                    color: "#fff",
                  }}
                >
                  Mobile{" "}
                  <span
                    style={{
                      color: "rgba(255,255,255,0.18)",
                      WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                    }}
                  >
                    first.
                  </span>
                </h2>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="hidden lg:block"
                >
                  <HeroPhone />
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                style={{
                  marginTop: 20,
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.35)",
                  maxWidth: 520,
                }}
              >
                Everything else supports the product. Mobile architecture is the
                core. The rest stacks on top.
              </motion.p>
            </div>
            <motion.button
              whileHover={{ x: 4 }}
              className="hidden xl:flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-medium pb-4"
              style={{
                color: "rgba(255,255,255,0.2)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              View all
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
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
        </div>

        <div className="px-6 md:px-10 xl:px-16 mb-12">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{
              height: 1,
              background:
                "linear-gradient(to right, rgba(0,201,123,0.5), rgba(0,201,123,0.08) 50%, transparent)",
              transformOrigin: "left",
            }}
          />
        </div>

        <div className="px-6 md:px-10 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
            {systems.map((system, index) => (
              <SystemCard key={system.title} system={system} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="px-6 md:px-10 xl:px-16 mt-28"
        >
          <div
            style={{
              width: 40,
              height: 1,
              background: "rgba(0,201,123,0.5)",
              marginBottom: 32,
            }}
          />
          <h2
            style={{
              fontSize: "clamp(40px, 6.5vw, 100px)",
              fontWeight: 800,
              letterSpacing: "-0.075em",
              lineHeight: 0.88,
              maxWidth: 1100,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Systems designed{" "}
            <em
              className="not-italic"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
              }}
            >
              for scale,
            </em>{" "}
            <span style={{ color: "#00C97B" }}>automation,</span>{" "}
            <em
              className="not-italic"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
              }}
            >
              and
            </em>{" "}
            execution.
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: 20,
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(0,201,123,0.5)",
              fontWeight: 600,
            }}
          >
            React Native first · AI-augmented · Built to ship
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
