"use client";

import { motion } from "framer-motion";

interface MediaShowcaseProps {
  title: string;
  category: string;
  description: string;
  image?: string;
}

export default function MediaShowcase({
  title,
  category,
  description,
  image,
}: MediaShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="
        group
        border border-black/10
        rounded-[28px]
        overflow-hidden
        bg-[#f8f6f4]
      "
    >
      {/* Media */}
      <div
        className="
          relative
          aspect-[1.2/1]
          overflow-hidden
          bg-[#ece8e4]
        "
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="
              w-full h-full
              object-cover
              transition-transform duration-700
              group-hover:scale-[1.03]
            "
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/25">
              MEDIA PREVIEW
            </p>
          </div>
        )}

        {/* Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/10
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
          "
        />
      </div>

      {/* Content */}
      <div className="p-7">
        <p className="text-[10px] uppercase tracking-[0.22em] text-black/35">
          {category}
        </p>

        <h3
          className="
            mt-4
            text-[28px]
            tracking-[-0.05em]
            leading-[1]
            font-semibold
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-6
            text-[15px]
            leading-[1.8]
            text-black/58
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
