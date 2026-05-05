
import Section from "./Section";
import { Target, HeartPulse } from "lucide-react";

export default function Objective() {
  return (
    <Section
      id="objetivo"
      title={
        <span className="flex items-center gap-2">
          <Target size={18} className="text-rose-700" />
          Objetivo
        </span>
      }
      subtitle="Direcionamento acadêmico e desenvolvimento profissional."
    >
      <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-xl bg-rose-100 p-2 text-rose-700">
            <HeartPulse size={18} />
          </div>

          <p className="text-sm leading-relaxed text-neutral-700">
            Buscar uma formação médica sólida, aprendendo o máximo possível ao
            longo da graduação e aproveitando todas as oportunidades que
            contribuam para meu desenvolvimento profissional e pessoal. Quero ser
            uma médica capacitada e humana.
          </p>
        </div>
      </div>
    </Section>
  );
}