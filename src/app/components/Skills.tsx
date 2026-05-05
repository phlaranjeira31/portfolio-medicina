
import Section from "./Section";
import { profile } from "@/app/data/profile";
import { Brain, Wrench, CheckCircle2 } from "lucide-react";

function Pill({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs text-rose-700">
      <CheckCircle2 size={12} />
      {text}
    </span>
  );
}

export default function Skills() {
  return (
    <Section
      id="habilidades"
      title="Habilidades"
      subtitle="Técnicas e interpessoais (em evolução)."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {/* Técnicas */}
        <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
            <Wrench size={16} className="text-rose-700" />
            Técnicas
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.technical.map((s) => (
              <Pill key={s} text={s} />
            ))}
          </div>
        </div>

        {/* Interpessoais */}
        <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
            <Brain size={16} className="text-rose-700" />
            Interpessoais
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.interpersonal.map((s) => (
              <Pill key={s} text={s} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}