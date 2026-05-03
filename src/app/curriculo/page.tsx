"use client";

<main id="topo">
  ...
</main>

import { profile } from "@/app/data/profile";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold tracking-tight text-neutral-900">
      {children}
    </h2>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      {children}
    </div>
  );
}

export default function CurriculoPage() {
  return (
    <main className="bg-neutral-50 py-10">
      <div className="mx-auto w-full max-w-4xl px-5">
        {/* Topo */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                {profile.name}
              </h1>
              <p className="mt-2 text-sm text-neutral-700">{profile.headline}</p>
              <p className="mt-2 text-sm text-neutral-600">
                {profile.university} • {profile.location}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/"
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
              >
                Voltar ao site
              </a>
              <button
                onClick={() => window.print()}
                className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:opacity-90"
              >
                Imprimir / Salvar PDF
              </button>
            </div>
          </div>

          <div className="mt-6 border-t border-neutral-200 pt-6">
            <p className="text-sm leading-relaxed text-neutral-700">
              {profile.bio}
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="mt-6 grid gap-6">
          {/* Formação */}
          <Card>
            <SectionTitle>Formação</SectionTitle>
            <div className="mt-4 grid gap-4">
              {profile.education.map((e) => (
                <div key={e.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-medium text-neutral-900">{e.title}</p>
                    <p className="text-xs text-neutral-600">{e.period}</p>
                  </div>
                  <p className="text-sm text-neutral-700">{e.org}</p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700">
                    {e.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          

          {/* Certificações */}
          <Card>
            <SectionTitle>Certificações & Congressos</SectionTitle>
            <div className="mt-4 grid gap-4">
              {profile.certifications.map((c) => (
                <div key={c.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-medium text-neutral-900">{c.title}</p>
                    <p className="text-xs text-neutral-600">{c.period}</p>
                  </div>
                  <p className="text-sm text-neutral-700">{c.org}</p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700">
                    {c.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          {/* Habilidades + Contato */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <SectionTitle>Habilidades</SectionTitle>

              <p className="mt-4 text-xs font-medium text-neutral-600">Técnicas</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {profile.skills.technical.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-xs font-medium text-neutral-600">
                Interpessoais
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {profile.skills.interpersonal.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Card>

            <Card>
              <SectionTitle>Contato</SectionTitle>
              <div className="mt-4 space-y-3 text-sm">
                <p className="text-neutral-700">
                  <span className="text-neutral-500">Email: </span>
                  {profile.contact.email}
                </p>

                <p className="text-neutral-700">
                  <span className="text-neutral-500">LinkedIn: </span>
                  {profile.contact.linkedin}
                </p>

                {profile.contact.lattes ? (
                  <p className="text-neutral-700">
                    <span className="text-neutral-500">Lattes: </span>
                    {profile.contact.lattes}
                  </p>
                ) : (
                  <p className="text-xs text-neutral-500">
                    (opcional) Adicione o Lattes quando tiver.
                  </p>
                )}
              </div>
            </Card>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-neutral-500">
          Dica: clique em “Imprimir / Salvar PDF” para gerar um PDF do currículo.
        </p>
      </div>
    </main>
  );
}
