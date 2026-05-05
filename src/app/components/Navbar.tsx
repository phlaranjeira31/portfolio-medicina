"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  UserRound,
  GraduationCap,
  BriefcaseMedical,
  HeartPulse,
  Brain,
  Mail,
  Stethoscope,
} from "lucide-react";
import BotaoPDF from "@/app/components/BotaoPDF";

const links = [
  { label: "Sobre", href: "#sobre", icon: UserRound },
  { label: "Formação", href: "#formacao", icon: GraduationCap },
  { label: "Experiências", href: "#experiencias", icon: BriefcaseMedical },
  { label: "Interesses", href: "#interesses", icon: HeartPulse },
  { label: "Habilidades", href: "#habilidades", icon: Brain },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-rose-200/70 bg-rose-50/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3">
        {/* Brand */}
        <a href="#topo" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-200 text-rose-800 shadow-sm">
            <Stethoscope size={22} />
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold text-neutral-900">
              Portfólio <span className="text-rose-700">• Medicina</span>
            </div>
            <div className="text-xs text-neutral-500">
              Unifase • Petrópolis - RJ
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 md:flex">
          {links.map((l) => {
            const Icon = l.icon;

            return (
              <a
                key={l.href}
                href={l.href}
                className="flex items-center gap-1.5 text-sm text-neutral-600 transition hover:text-rose-700"
              >
                <Icon size={15} />
                {l.label}
              </a>
            );
          })}

          <a
            href="#contato"
            className="flex items-center gap-2 rounded-full bg-rose-200 px-5 py-2 text-sm font-medium text-rose-800 transition hover:bg-rose-300"
          >
            <Mail size={16} />
            Contato
          </a>

          <BotaoPDF />
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-xl border border-rose-200 bg-white px-3 py-2 text-rose-700 shadow-sm transition hover:bg-rose-50 md:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile overlay */}
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Fechar menu"
            onClick={close}
          />

          <div className="absolute right-3 top-3 w-[calc(100%-24px)] max-w-sm rounded-3xl border border-rose-200 bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                <Stethoscope size={18} className="text-rose-700" />
                Menu
              </div>

              <button
                type="button"
                onClick={close}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-700 transition hover:bg-rose-50"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {links.map((l) => {
                const Icon = l.icon;

                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="flex items-center gap-3 rounded-2xl border border-rose-200 bg-white px-4 py-3 text-sm text-neutral-700 transition hover:bg-rose-50 hover:text-rose-700"
                  >
                    <Icon size={18} className="text-rose-700" />
                    {l.label}
                  </a>
                );
              })}
            </div>

            <a
              href="#contato"
              onClick={close}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-rose-200 px-5 py-3 text-center text-sm font-medium text-rose-800 transition hover:bg-rose-300"
            >
              <Mail size={17} />
              Ir para contato
            </a>

            <div className="mt-3 flex justify-center">
              <BotaoPDF />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}










