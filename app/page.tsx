"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom, ease: "easeOut" },
  }),
};

export default function ComingSoonPage() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-indigo-700/20 blur-3xl" />

      {/* Logo + Title */}
      <motion.div
        className="flex flex-col items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0.05}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-10 rounded-full bg-accent/10 blur-[120px] opacity-70" />

          <div className="rounded-3xl bg-bgCard p-5 shadow-[0_0_50px_rgba(56,189,248,0.45)]">
            <img
              src="/logo.png"
              alt="JavaAI Labs logo"
              className="w-32 h-32 md:w-36 md:h-36 rounded-2xl"
            />
          </div>
        </div>

        <div className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-textMain">
          JavaAI Labs
        </div>

        <div className="mt-3 text-lg sm:text-xl font-medium text-textMuted/90">
          Modern AI for Enterprise Java & Spring Boot Systems
        </div>

        {/* Coming Soon */}
        <motion.div
          className="mt-8 flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.18}
        >
          <div className="text-5xl sm:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
              Coming Soon
            </span>
          </div>

          <div className="mt-3 text-sm sm:text-base text-textMuted/80 tracking-wide">
            Launching Q1 2026
          </div>
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.p
        className="mt-4 max-w-xl text-sm sm:text-base text-textMuted leading-relaxed"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0.22}
      >
        Our full website is launching soon. We're onboarding early enterprise
        partners exploring how to bring modern AI into their Java & Spring Boot
        systems.
      </motion.p>

      {/* Contact */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0.32}
      >
        <div className="flex flex-col items-center mt-6">
          <a
            href={`mailto:hello@javaailabs.com?subject=${encodeURIComponent(
              "Enterprise Inquiry – <your-company-name>"
            )}&body=${encodeURIComponent(
              `Hello JavaAI Labs Team,

I came across your page and wanted to connect.

A few quick details:

• Your Name:
• Your Role:
• What you're exploring with AI + Java/Spring Boot:

Looking forward to hearing from you.

Regards,`
            )}`}
            className="rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:bg-accentSoft transition"
          >
            Contact the Founders
          </a>

          <p className="mt-3 text-center text-sm text-gray-400">
            Direct email to the founders — no forms, no bots.
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-12 text-xs text-textMuted"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0.45}
      >
        © {new Date().getFullYear()} JavaAI Labs. Built for Java enterprises.
      </motion.div>
    </div>
  );
}
