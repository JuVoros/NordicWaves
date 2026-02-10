"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
}

export function TeamCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-white shadow-sm p-6 flex flex-col items-center text-center">
      {/* Portrait */}
      <Image
        src={member.img}
        alt={member.name}
        width={140}
        height={140}
        className="rounded-full object-cover mb-4"
      />

      {/* Name & Role */}
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-sm text-neutral-600 mb-4">{member.role}</p>

      {/* Bio */}
      <AnimatePresence initial={false}>
        <motion.p
          key={open ? "open" : "closed"}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`text-sm text-neutral-700 leading-relaxed overflow-hidden ${
            !open ? "line-clamp-3" : ""
          }`}
        >
          {member.bio}
        </motion.p>
      </AnimatePresence>

      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
      >
        {open ? "Show less" : "Click to Read more"}
      </button>
    </div>
  );
}
