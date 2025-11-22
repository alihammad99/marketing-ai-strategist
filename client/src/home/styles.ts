// src/styles/homeClasses.js

export const styles = {
  layout: {
    page: "flex min-h-screen flex-col bg-zinc-950 text-white",
  },

  header: {
    wrapper:
      "border-b border-zinc-800 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60",
    container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
    inner: "flex h-16 items-center justify-between",
    brand: "flex items-center gap-2",
    nav: "hidden items-center gap-8 md:flex",
    navItem: "text-sm text-zinc-400 hover:text-white transition-colors",
    signButton:
      "px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors",
    ctaButton:
      "rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-100 transition-colors",
  },

  hero: {
    section: "relative overflow-hidden border-b border-zinc-800",
    grid: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]",
    container: "relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8",
    content: "mx-auto max-w-3xl text-center",
    badge:
      "mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm",
    title:
      "mb-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl font-[family-name:var(--font-orbitron)] bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient",
    description:
      "mb-10 text-pretty text-lg leading-relaxed text-zinc-400 sm:text-xl",
    startButton:
      "inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-medium text-zinc-950 hover:bg-zinc-100 transition-colors",
    sub: "mt-6 text-sm text-zinc-500",
  },

  socialProof: {
    section: "border-b border-zinc-800 bg-zinc-900/30 py-12",
    container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  },

  features: {
    section: "border-b border-zinc-800 py-24 sm:py-32",
    container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
    card: "rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:bg-zinc-800/80",
  },

  steps: {
    section: "border-b border-zinc-800 bg-zinc-900/30 py-24 sm:py-32",
    container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  },

  cta: {
    section: "py-24 sm:py-32",
    container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
    box: "rounded-lg border border-zinc-800 bg-zinc-900",
    inner: "px-6 py-16 text-center sm:px-16",
    primaryButton:
      "inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-medium text-zinc-950 hover:bg-zinc-100 transition-colors",
  },

  footer: {
    wrapper: "border-t border-zinc-800 bg-zinc-900/30 py-12",
    container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  },
};
