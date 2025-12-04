import "./globals.css";

export const metadata = {
  title: "JavaAI Labs – AI for Enterprise Java & Spring Boot",
  description:
    "JavaAI Labs helps enterprises modernize Java & Spring Boot systems using AI. Launching Q1 2026. Now onboarding early pilot partners.",
  icons: {
    icon: [
      "/favicons/favicon.ico",
      { url: "/favicons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bgDark text-textMain antialiased">
        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-indigo-700/25 blur-3xl" />
          <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
