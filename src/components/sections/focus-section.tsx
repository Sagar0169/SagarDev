"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const focuses = [
  {
    num: "01",
    label: "Building Chaotix AI",
    sub: "0 → 10K users",
    accent: "#00C97B",
    tag: "Product · Live",
  },
  {
    num: "02",
    label: "Exploring advanced AI agents",
    sub: "Research & deploy",
    accent: "#4F8EF7",
    tag: "AI · Agents",
  },
  {
    num: "03",
    label: "Scaling creator infrastructure",
    sub: "Systems that compound",
    accent: "#F7A94F",
    tag: "Creator · Growth",
  },
  {
    num: "04",
    label: "Sharing learnings through writing",
    sub: "Build in public",
    accent: "#C084FC",
    tag: "Writing · Public",
  },
];

const marqueeItems = [
  "React Native",
  "TypeScript",
  "AI Systems",
  "n8n",
  "OpenAI",
  "Node.js",
  "Mobile Architecture",
  "Creator Tools",
  "Automation",
];

function PhoneSculpture() {
  const bars = [40, 55, 35, 70, 50, 85, 60, 90, 75, 100];

  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="relative"
    >
      <div
        style={{
          width: 180,
          height: 360,
          borderRadius: 44,
          background: "#080808",
          boxShadow:
            "0 80px 160px rgba(0,0,0,0.5), 0 0 0 1.5px rgba(255,255,255,0.07), 0 0 60px rgba(0,201,123,0.1)",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 3,
            borderRadius: 41,
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
              paddingTop: 10,
            }}
          >
            <div
              style={{
                width: 68,
                height: 22,
                borderRadius: 999,
                background: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
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
                  height: 9,
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

          {/* Screen content */}
          <div
            style={{
              flex: 1,
              padding: "10px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <p
              style={{
                fontSize: 8,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.22)",
              }}
            >
              Chaotix AI
            </p>

            <div>
              <p
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                10K+
              </p>
              <p
                style={{
                  fontSize: 7,
                  color: "rgba(255,255,255,0.28)",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  marginTop: 3,
                }}
              >
                Users
              </p>
            </div>

            {/* Bars */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 2,
                height: 44,
              }}
            >
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    delay: 0.6 + i * 0.05,
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
                        : "rgba(0,201,123,0.18)",
                    transformOrigin: "bottom",
                  }}
                />
              ))}
            </div>

            {/* Skeleton rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[100, 80, 60].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: 5,
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.06)",
                    width: `${w}%`,
                  }}
                />
              ))}
            </div>

            {/* Focus items list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                marginTop: 4,
              }}
            >
              {["Mobile Architecture", "AI Agents", "Creator Tools"].map(
                (item, i) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
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
                    <p style={{ fontSize: 7, color: "rgba(255,255,255,0.38)" }}>
                      {item}
                    </p>
                  </div>
                ),
              )}
            </div>

            {/* Bottom pill */}
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                alignItems: "center",
                gap: 6,
                borderRadius: 14,
                background: "rgba(0,201,123,0.07)",
                border: "1px solid rgba(0,201,123,0.15)",
                padding: "6px 9px",
              }}
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#00C97B",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontSize: 7,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.06em",
                }}
              >
                Building in public
              </p>
            </div>
          </div>

          {/* Home bar */}
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
                background: "rgba(255,255,255,0.12)",
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
            width: 2,
            height: 32,
            borderRadius: 1,
            background: "#1e1e1e",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -2,
            top: 66,
            width: 2,
            height: 22,
            borderRadius: 1,
            background: "#1e1e1e",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -2,
            top: 96,
            width: 2,
            height: 36,
            borderRadius: 1,
            background: "#1e1e1e",
          }}
        />
      </div>

      {/* Shadow blob */}
      <div
        style={{
          position: "absolute",
          bottom: -16,
          left: "50%",
          transform: "translateX(-50%)",
          width: 120,
          height: 20,
          borderRadius: "50%",
          background: "rgba(0,201,123,0.12)",
          filter: "blur(12px)",
        }}
      />
    </motion.div>
  );
}

function FocusRow({
  item,
  index,
}: {
  item: (typeof focuses)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.09,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="relative group cursor-default"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "22px 0",
        borderBottom:
          index < focuses.length - 1
            ? "1px solid rgba(255,255,255,0.06)"
            : "none",
      }}
    >
      {/* Hover fill */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          inset: "0 -12px",
          borderRadius: 16,
          background: `${item.accent}08`,
          border: `1px solid ${item.accent}18`,
          pointerEvents: "none",
        }}
      />

      {/* Number */}
      <span
        style={{
          fontSize: 11,
          color: hovered ? item.accent : "rgba(255,255,255,0.18)",
          fontWeight: 600,
          width: 24,
          flexShrink: 0,
          letterSpacing: "0.08em",
          transition: "color 0.3s",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {item.num}
      </span>

      {/* Pulse dot */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: hovered ? item.accent : "rgba(255,255,255,0.3)",
            transition: "background 0.3s",
          }}
        />
        <motion.div
          animate={{ scale: hovered ? 2.8 : 1, opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: hovered ? item.accent : "rgba(255,255,255,0.15)",
          }}
        />
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "clamp(18px, 2.6vw, 34px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: hovered ? "#fff" : "rgba(255,255,255,0.72)",
            transition: "color 0.3s",
          }}
        >
          {item.label}
        </p>
        <p
          style={{
            marginTop: 5,
            fontSize: 10,
            color: hovered ? item.accent : "rgba(255,255,255,0.28)",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            transition: "color 0.3s",
          }}
        >
          {item.sub}
        </p>
      </div>

      {/* Tag pill */}
      <motion.span
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 6 }}
        transition={{ duration: 0.25 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          padding: "3px 10px",
          borderRadius: 999,
          background: `${item.accent}12`,
          border: `1px solid ${item.accent}30`,
          fontSize: 9,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: item.accent,
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        {item.tag}
      </motion.span>

      {/* Arrow */}
      <motion.span
        animate={{
          x: hovered ? 4 : 0,
          color: hovered ? "#fff" : "rgba(255,255,255,0.15)",
        }}
        transition={{ duration: 0.25 }}
        style={{ fontSize: 16, flexShrink: 0 }}
      >
        →
      </motion.span>
    </motion.div>
  );
}

export default function FocusSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const duplicated = [...marqueeItems, ...marqueeItems];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.12,
        }}
      />

      {/* Top glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "40vh",
          background:
            "radial-gradient(ellipse, rgba(0,201,123,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #080808, transparent)" }}
      />

      <div className="relative z-10 px-6 md:px-10 xl:px-16 py-28 md:py-36">
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 64,
          }}
        >
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.18)" }}>
            05
          </span>
          <span
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.32)",
            }}
          >
            What I'm focused on
          </span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px 5px 8px",
              borderRadius: 999,
              background: "rgba(0,201,123,0.08)",
              border: "1px solid rgba(0,201,123,0.2)",
              marginBottom: 20,
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
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00C97B",
                fontWeight: 600,
              }}
            >
              Mobile engineer first
            </span>
          </motion.div>

          <h2
            style={{
              fontSize: "clamp(38px, 6vw, 88px)",
              fontWeight: 800,
              letterSpacing: "-0.075em",
              lineHeight: 0.9,
              color: "#fff",
            }}
          >
            Currently{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.18)",
              }}
            >
              building.
            </span>
          </h2>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            height: 1,
            background:
              "linear-gradient(to right, rgba(0,201,123,0.5), rgba(0,201,123,0.06) 50%, transparent)",
            transformOrigin: "left",
            marginBottom: 48,
          }}
        />

        {/* Main grid */}
        <div className="grid xl:grid-cols-[1fr_320px] gap-12 xl:gap-20 items-start">
          {/* Left — Focus list */}
          <div>
            {focuses.map((item, i) => (
              <FocusRow key={item.num} item={item} index={i} />
            ))}

            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              style={{
                marginTop: 48,
                paddingLeft: 20,
                borderLeft: "2px solid rgba(0,201,123,0.3)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(17px, 2.2vw, 28px)",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  lineHeight: 1.15,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                "I like building things that live on the internet and make
                people's lives better."
              </p>
              <p
                style={{
                  marginTop: 14,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.3)",
                  fontStyle: "italic",
                }}
              >
                — Sagar Pathak
              </p>
            </motion.div>
          </div>

          {/* Right — Phone */}
          <motion.div
            style={{ y: phoneY }}
            className="hidden xl:flex flex-col items-center gap-6"
          >
            <PhoneSculpture />

            {/* Stat chips */}
            <div style={{ display: "flex", gap: 8, width: "100%" }}>
              {[
                { label: "Stack", value: "React Native" },
                { label: "DAUs", value: "400+" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "10px 12px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 9,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.28)",
                    }}
                  >
                    {chip.label}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#fff",
                      marginTop: 3,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {chip.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ marginTop: 80 }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              background: "rgba(0,201,123,0.5)",
              marginBottom: 24,
            }}
          />
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 76px)",
              fontWeight: 800,
              letterSpacing: "-0.075em",
              lineHeight: 0.9,
              maxWidth: 900,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Focused on{" "}
            <em
              className="not-italic"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
              }}
            >
              mobile,
            </em>{" "}
            <span style={{ color: "#00C97B" }}>AI,</span>{" "}
            <em
              className="not-italic"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
              }}
            >
              and
            </em>{" "}
            things that scale.
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: 16,
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(0,201,123,0.45)",
              fontWeight: 600,
            }}
          >
            React Native first · AI-augmented · Built to ship
          </motion.p>
        </motion.div>

        {/* Marquee */}
        <div
          style={{
            marginTop: 64,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", gap: 40, whiteSpace: "nowrap" }}
          >
            {[...duplicated, ...duplicated].map((item, i) => (
              <span
                key={i}
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.18)",
                  fontWeight: 500,
                  flexShrink: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 40,
                }}
              >
                {item}
                <span
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    display: "inline-block",
                  }}
                />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
