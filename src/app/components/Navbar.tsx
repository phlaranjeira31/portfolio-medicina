"use client";

import { useEffect, useState } from "react";
import { profile } from "@/app/data/profile";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#formacao", label: "Formação" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#interesses", label: "Interesses" },
  { href: "#habilidades", label: "Habilidades" },
  
];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "M";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "C";
  return (first + last).toUpperCase();
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // trava o scroll quando o menu está aberto
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // fecha com ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const initials = getInitials(profile.name || "Maria Clara");

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-rose-200/60 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-5">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-rose-600 text-sm font-semibold text-white shadow-sm sm:h-10 sm:w-10">
              {initials}
            </div>

            <div className="leading-tight">
              <p className="text-sm font-semibold text-neutral-900">
                Portfólio • <span className="text-rose-600">Medicina</span>
              </p>
              <p className="text-xs text-neutral-500">
                {profile.university} • {profile.location}
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-1 transition hover:text-rose-700"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <a
              href="#contato"
              className="hidden rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 md:inline-flex"
            >
              Contato
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-rose-200 bg-white shadow-sm transition hover:bg-rose-50 active:scale-[0.98] md:hidden"
              aria-label="Abrir menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="text-rose-700"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          />

          {/* Panel */}
          <aside className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-rose-200/60 px-4 py-4">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-rose-600 text-sm font-semibold text-white">
                  {initials}
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-neutral-900">
                    Menu
                  </p>
                  <p className="text-xs text-neutral-500">
                    {profile.university} • {profile.location}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-rose-200 bg-white transition hover:bg-rose-50"
                aria-label="Fechar menu"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-rose-700"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="px-4 py-4">
              <div className="rounded-2xl border border-rose-200/60 bg-rose-50/30 p-2">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-neutral-800 transition hover:bg-white"
                  >
                    {l.label}
                    <span className="text-rose-600">›</span>
                  </a>
                ))}
              </div>

              {/* CTA mobile */}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700"
              >
                Contato
              </a>

              <p className="mt-4 text-xs text-neutral-500">
                © {new Date().getFullYear()} • Portfólio acadêmico.
              </p>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}








