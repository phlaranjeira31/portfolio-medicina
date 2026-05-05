
"use client";

import { profile } from "@/app/data/profile";
import {
  MapPin,
  GraduationCap,
  Stethoscope,
  Sparkles,
  FileText,
  HeartPulse,
  Users,
  ArrowRight,
  Mail,
} from "lucide-react";

export default function Hero() {
  const uniqueInterests = Array.from(new Set(profile.interests));

  return (
    <section className="border-b border-rose-200/60 bg-gradient-to-b from-rose-50 to-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        {/* COLUNA ESQUERDA */}
        <div>
          {/* Localização + faculdade */}
          <div className="flex items-center gap-2 text-sm text-rose-600">
            <GraduationCap size={16} />
            <span>{profile.university}</span>
            <span>•</span>
            <MapPin size={16} />
            <span>{profile.location}</span>
          </div>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-4 flex items-center gap-2 text-lg text-neutral-700">
            <Stethoscope size={18} />
            {profile.headline}
          </p>

          <p className="mt-6 text-sm leading-relaxed text-neutral-600">
            {profile.bio}
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experiencias"
              className="flex items-center gap-2 rounded-full bg-rose-200 px-5 py-2.5 text-sm font-medium text-rose-800 hover:bg-rose-300 transition"
            >
              <ArrowRight size={16} />
              Ver experiências
            </a>

            <a
              href="#contato"
              className="flex items-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-2.5 text-sm font-medium text-rose-700 hover:bg-rose-50 transition"
            >
              <Mail size={16} />
              Entrar em contato
            </a>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 overflow-hidden rounded-2xl border border-rose-200">
              <img
                src="/profile.jpg"
                alt="Foto de perfil"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="flex items-center gap-2 text-xs text-neutral-600">
                <Sparkles size={14} />
                Áreas de interesse:
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {uniqueInterests.map((i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs text-rose-700"
                  >
                    <Stethoscope size={12} />
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Destaques */}
          <div className="mt-6 rounded-2xl bg-rose-50 p-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-rose-800">
              <Sparkles size={16} />
              Destaques
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2">
                <FileText size={14} />
                Portfólio acadêmico (atualizável)
              </li>

              <li className="flex items-center gap-2">
                <HeartPulse size={14} />
                Foco em formação, ética e desenvolvimento clínico
              </li>

              <li className="flex items-center gap-2">
                <Users size={14} />
                Interesse em ligas, monitorias e pesquisa
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}






