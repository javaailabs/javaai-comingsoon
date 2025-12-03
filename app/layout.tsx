import "./globals.css";

export const metadata = {
  title: "JavaAI Labs – Coming Soon",
  description: "Enterprise AI for Java & Spring Boot systems.",
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
