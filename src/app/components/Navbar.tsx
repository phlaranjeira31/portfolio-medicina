"use client";

import { useEffect, useState } from "react";
import { profile } from "@/app/data/profile";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Formação", href: "#formacao" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Interesses", href: "#interesses" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // trava o scroll quando menu mobile abre
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // fecha menu ao apertar ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const initials =
    profile?.name
      ?.split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("") || "ML";

  return (
    <header className="sticky top-0 z-50 border-b border-rose-200/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-sm font-semibold text-white">
            {initials}
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold text-neutral-900">
              Portfólio <span className="text-rose-500">• Medicina</span>
            </p>
            <p className="text-xs text-neutral-500">
              {profile.university} • {profile.location}
            </p>
          </div>
        </a>

        {/* LINKS DESKTOP */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.slice(0, 5).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-600 hover:text-rose-600 transition"
            >
              {l.label}
            </a>
          ))}

          {/* BOTÃO CONTATO */}
          <a
            href="#contato"
            className="rounded-full bg-rose-500 px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Contato
          </a>
        </nav>

        {/* BOTÃO MENU MOBILE */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-xl border border-rose-200 bg-white p-2 text-rose-600 hover:bg-rose-50 transition md:hidden"
          aria-label="Abrir menu"
        >
          {/* ícone hambúrguer */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>

      {/* OVERLAY + MENU MOBILE */}
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* overlay */}
          <button
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          />

          {/* painel */}
          <div className="absolute right-3 top-3 w-[92%] max-w-sm rounded-2xl border border-rose-200 bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-neutral-900">Menu</p>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-rose-200 bg-white p-2 text-rose-600 hover:bg-rose-50 transition"
                aria-label="Fechar"
              >
                {/* X */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-rose-100 bg-white px-4 py-3 text-sm text-neutral-700 hover:bg-rose-50 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-rose-500 px-5 py-3 text-center text-sm font-medium text-white hover:opacity-90 transition"
            >
              Ir para contato
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}









