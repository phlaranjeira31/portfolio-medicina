"use client";

import { useEffect, useState } from "react";
import BotaoPDF from "@/app/components/BotaoPDF";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Formação", href: "#formacao" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Interesses", href: "#interesses" },
  { label: "Habilidades", href: "#habilidades" },
  // Removido "Contato" daqui pra não duplicar com o CTA
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // trava o scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-200/70 bg-rose-50/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3">
        {/* Brand */}
        <a href="#topo" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-200 text-sm font-semibold text-rose-800">
            MC
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold text-neutral-900">
              Portfólio <span className="text-rose-700">• Medicina</span>
            </div>
            <div className="text-xs text-neutral-500">Unifase • Petrópolis - RJ</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-600 hover:text-rose-700 transition"
            >
              {l.label}
            </a>
          ))}

          {/* ✅ ÚNICO botão de contato (desktop) */}
          <a
            href="#contato"
            className="rounded-full bg-rose-200 px-5 py-2 text-sm font-medium text-rose-800 hover:bg-rose-300 transition"
          >
            Contato
          </a>

          <BotaoPDF />
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-rose-200 bg-white px-3 py-2 text-rose-700 shadow-sm hover:bg-rose-50 transition"
          aria-label="Abrir menu"
        >
          {/* ícone hamburguer */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Fechar menu"
            onClick={close}
          />

          {/* panel */}
          <div className="absolute right-3 top-3 w-[calc(100%-24px)] max-w-sm rounded-3xl border border-rose-200 bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-neutral-900">Menu</div>

              <button
                type="button"
                onClick={close}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-700 hover:bg-rose-50 transition"
                aria-label="Fechar"
              >
                {/* X */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block rounded-2xl border border-rose-200 bg-white px-4 py-3 text-sm text-neutral-700 hover:bg-rose-50 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* ✅ ÚNICO CTA (mobile) */}
            <a
              href="#contato"
              onClick={close}
              className="mt-5 block rounded-full bg-rose-200 px-5 py-3 text-center text-sm font-medium text-rose-800 hover:bg-rose-300 transition"
            >
              Ir para contato
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}










