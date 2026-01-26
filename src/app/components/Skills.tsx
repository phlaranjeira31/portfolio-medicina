import Section from "./Section";
import { profile } from "@/app/data/profile";


function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
      {text}
    </span>
  );
}

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades" subtitle="Técnicas e interpessoais (em evolução).">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold">Técnicas</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.technical.map((s) => <Pill key={s} text={s} />)}
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold">Interpessoais</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.interpersonal.map((s) => <Pill key={s} text={s} />)}
          </div>
        </div>
      </div>
    </Section>
  );
}
