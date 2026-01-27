import { profile } from "@/app/data/profile";

export default function Hero() {
  // remover duplicados (se tiver repetido em interests)
  const uniqueInterests = Array.from(new Set(profile.interests));

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

          <p className="mt-4 text-lg text-neutral-700">{profile.headline}</p>

          <p className="mt-6 text-sm leading-relaxed text-neutral-600">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
           <a
  href="#experiencias"
  className="rounded-full bg-rose-200 px-5 py-2.5 text-sm font-medium text-rose-800 hover:bg-rose-300 transition"
>
  Ver experiências
</a>


            <a
              href="#contato"
              className="rounded-full border border-rose-200 bg-white px-5 py-2.5 text-sm font-medium text-rose-700 hover:bg-rose-50 transition"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 overflow-hidden rounded-2xl border border-rose-200">
              {/* coloque a foto em /public/profile.jpg */}
              <img
                src="/profile.jpg"
                alt="Foto de perfil"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-xs text-neutral-600">Áreas de interesse:</p>

              <div className="mt-2 flex flex-wrap gap-2">
                {uniqueInterests.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs text-rose-700"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-rose-50 p-4">
            <h3 className="text-sm font-semibold text-rose-800">Destaques</h3>

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







