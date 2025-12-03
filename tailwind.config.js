/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "var(--color-bgDark)",
        bgCard: "var(--color-bgCard)",
        accent: "var(--color-accent)",
        accentSoft: "var(--color-accentSoft)",
        textMain: "var(--color-textMain)",
        textMuted: "var(--color-textMuted)",
        borderSoft: "var(--color-borderSoft)",
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
      }
    },
  },
  plugins: [],
};
