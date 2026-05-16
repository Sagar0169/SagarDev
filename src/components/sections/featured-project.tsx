"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Chaotix AI",
    description:
      "Realtime AI storytelling engine built for immersive multiplayer gameplay and procedural experiences.",
    tags: ["AI Systems", "Realtime", "React Native"],
    type: "Mobile Experience",
  },
  {
    number: "02",
    title: "Pikoo AI",
    description:
      "Creator automation ecosystem for content workflows, growth systems and monetization.",
    tags: ["Automation", "n8n", "AI"],
    type: "Automation Platform",
  },
  {
    number: "03",
    title: "Creator Outreach",
    description:
      "AI-powered outreach infrastructure replacing repetitive agency operations.",
    tags: ["CRM", "AI Agents", "Growth"],
    type: "Internal System",
  },
  {
    number: "04",
    title: "Primebook App",
    description:
      "Android ecosystem improvements and scalable architecture optimizations.",
    tags: ["Android", "Architecture", "Performance"],
    type: "Mobile Engineering",
  },
  {
    number: "05",
    title: "Social AI Scheduler",
    description:
      "AI content scheduling platform for creators with automated publishing workflows.",
    tags: ["SaaS", "AI", "Automation"],
    type: "Creator Tooling",
  },
];

function DeviceMockup() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* soft glow */}
      <div
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.06)",
          filter: "blur(80px)",
        }}
      />

      {/* device */}
      <motion.div
        whileHover={{
          y: -8,
          rotate: -2,
        }}
        transition={{ duration: 0.4 }}
        style={{
          width: "clamp(180px, 22vw, 240px)",
          aspectRatio: "9 / 19",
          borderRadius: 34,
          background: "#111111",
          border: "1px solid rgba(0,0,0,0.08)",
          padding: 10,
          overflow: "hidden",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 26,
            background: "linear-gradient(180deg, #181818 0%, #0f0f0f 100%)",
            overflow: "hidden",
          }}
        >
          {/* top */}
          <div
            style={{
              padding: 18,
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                width: 80,
                height: 10,
                borderRadius: 999,
                background: "rgba(255,255,255,0.82)",
                marginBottom: 14,
              }}
            />

            <div
              style={{
                width: "70%",
                height: 12,
                borderRadius: 999,
                background: "rgba(255,255,255,0.14)",
                marginBottom: 10,
              }}
            />

            <div
              style={{
                width: "45%",
                height: 9,
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
              }}
            />
          </div>

          {/* content */}
          <div
            style={{
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  padding: 12,
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    height: 10,
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.14)",
                    marginBottom: 10,
                  }}
                />

                <div
                  style={{
                    width: "100%",
                    height: 64,
                    borderRadius: 14,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.03))",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[0];
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
      }}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 34,
        background: "rgba(255,255,255,0.7)",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 20px 80px rgba(0,0,0,0.04)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* subtle glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(0,0,0,0.03), transparent 35%)",
          pointerEvents: "none",
        }}
      />

      {/* grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className={`grid ${
          featured ? "xl:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-2"
        }`}
      >
        {/* LEFT */}
        <div
          style={{
            padding: featured ? "54px" : "34px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {/* top */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.62)",
                }}
              >
                {project.number}
              </span>

              <span
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "rgba(0,0,0,0.32)",
                }}
              >
                {project.type}
              </span>
            </div>

            {/* title */}
            <h2
              style={{
                fontSize: featured
                  ? "clamp(48px,5vw,84px)"
                  : "clamp(30px,3vw,46px)",
                lineHeight: 0.9,
                letterSpacing: "-0.08em",
                color: "#0a0a0a",
                marginBottom: 22,
                fontWeight: 700,
              }}
            >
              {project.title}
            </h2>

            {/* desc */}
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "rgba(0,0,0,0.58)",
                maxWidth: 480,
              }}
            >
              {project.description}
            </p>

            {/* tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 30,
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 999,
                    background: "rgba(0,0,0,0.03)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    color: "rgba(0,0,0,0.55)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ x: 4 }}
            style={{
              marginTop: 44,
              background: "transparent",
              border: "none",
              width: "fit-content",
              color: "rgba(0,0,0,0.82)",
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              cursor: "pointer",
              padding: 0,
            }}
          >
            View Case Study →
          </motion.button>
        </div>

        {/* RIGHT */}
        <div
          style={{
            position: "relative",
            minHeight: featured ? 640 : 420,
            borderLeft: "1px solid rgba(0,0,0,0.05)",
            overflow: "hidden",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.015), rgba(0,0,0,0.01))",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 30,
            }}
          >
            <DeviceMockup />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#f5f5f3",
      }}
    >
      {/* ambient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top center, rgba(0,0,0,0.04), transparent 40%)",
          pointerEvents: "none",
        }}
      />

      {/* texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          paddingTop: "8rem",
          paddingBottom: "8rem",
        }}
      >
        {/* header */}
        <div className="px-6 md:px-12 mb-20">
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.55)",
              marginBottom: 22,
            }}
          >
            02 — Featured Projects
          </p>

          <h2
            style={{
              fontSize: "clamp(56px,8vw,130px)",
              lineHeight: 0.88,
              letterSpacing: "-0.08em",
              color: "#0a0a0a",
              fontWeight: 700,
              maxWidth: 1100,
            }}
          >
            Products designed for
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(0,0,0,0.18)",
              }}
            >
              {" "}
              scale,
            </span>{" "}
            execution and impact.
          </h2>
        </div>

        {/* separator */}
        <div className="px-6 md:px-12 mb-14">
          <div
            style={{
              height: 1,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.18), transparent 70%)",
            }}
          />
        </div>

        {/* dynamic layout */}
        <div className="px-6 md:px-12">
          <div
            style={{
              display: "grid",
              gap: 24,
            }}
          >
            {/* featured */}
            {featuredProject && (
              <ProjectCard project={featuredProject} featured />
            )}

            {/* remaining */}
            {remainingProjects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                {remainingProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
