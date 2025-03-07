import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TectrixMC",
  description: "An unique Minecraft server",
  keywords: [
    "Tectrix",
    "TectrixMC",
    "minecraft server",
    "minecraft",
    "server",
    "SMP",
    "SMP minecraft",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="/jsm-logo.png"
          sizes="any"
        />
        <meta
          property="og:url"
          content="https://tectrixdev.github.io/TectrixWebsite/"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content="TectrixMC Website"
        />
        <meta
          property="og:description"
          content="An unique Minecraft server"
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/cb857973-a9ad-4a60-b760-01982b1c3eb1.png?token=dgHcYV8kki-ku5vioNPJh0ziV3cx5CN1ckWW58zqsrg&height=600&width=1200&expires=33275128201"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:domain"
          content="tectrixdev.github.io"
        />
        <meta
          property="twitter:url"
          content="https://tectrixdev.github.io/TectrixWebsite/"
        />
        <meta
          name="twitter:title"
          content="TectrixMC"
        />
        <meta
          name="twitter:description"
          content="An unique Minecraft server"
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/cb857973-a9ad-4a60-b760-01982b1c3eb1.png?token=dgHcYV8kki-ku5vioNPJh0ziV3cx5CN1ckWW58zqsrg&height=600&width=1200&expires=33275128201"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
