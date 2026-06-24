import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MATRIX // Mental Coach Terminal",
  description:
    "A Matrix-style terminal interface for your AI mental coach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="scanlines crt-flicker">{children}</body>
    </html>
  );
}
