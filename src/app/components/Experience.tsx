import Section from "./Section";
import { profile } from "@/app/data/profile";

export default function Experience() {
  return (
    <Section id="experiencias" title="Experiências" subtitle="Ligas, monitorias, extensão e atividades.">
      <div className="grid gap-4">
        {profile.experiences.map((x) => (
          <div key={x.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold">{x.title}</h3>
              <span className="text-xs text-neutral-600">{x.period}</span>
            </div>
            <p className="mt-1 text-sm text-neutral-700">{x.org}</p>
            <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700">
              {x.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
