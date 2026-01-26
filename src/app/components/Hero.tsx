import Image from "next/image";
import { profile } from "@/app/data/profile";

export default function Hero() {
  return (
    <section className="border-b border-rose-200/60 bg-gradient-to-b from-rose-50 to-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        
        {/* COLUNA ESQUERDA */}
        <div>
          <p className="text-sm text-rose-600">
            {profile.university} • {profile.location}
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-lg text-neutral-700">
            {profile.headline}
          </p>

          <p className="mt-6 text-sm leading-relaxed text-neutral-600">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experiencias"
              className="rounded-full bg-rose-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-rose-700"
            >
              Ver experiências
            </a>

            <a
              href="#contato"
              className="rounded-full border border-rose-300 px-6 py-3 text-sm font-medium text-rose-600 transition hover:bg-rose-50"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
          
          {/* FOTO + INTERESSES */}
          <div className="flex items-start gap-4">
            <div className="h-24 w-24 overflow-hidden rounded-2xl border border-rose-300">
              <Image
                src="/profile.jpg"
                alt="Foto de perfil"
                width={96}
                height={96}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <p className="text-xs font-medium text-neutral-700">
                Áreas de interesse:
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {Array.from(new Set(profile.interests)).map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-rose-300 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* DESTAQUES */}
          <div className="mt-6 rounded-2xl bg-rose-50 p-4">
            <h3 className="text-sm font-semibold text-rose-700">
              Destaques
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• Portfólio acadêmico (atualizável)</li>
              <li>• Foco em formação, ética e desenvolvimento clínico</li>
              <li>• Organização para ligas, monitorias e pesquisa</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}






