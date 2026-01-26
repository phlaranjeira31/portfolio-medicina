import Section from "./Section";

export default function Objective() {
  return (
    <Section
      id="objetivo"
      title="Objetivo"
      subtitle="Direcionamento acadêmico e desenvolvimento profissional."
    >
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <p className="text-sm leading-relaxed text-neutral-700">
          Buscar uma formação médica sólida, aprendendo o máximo possível ao longo da graduação e aproveitando todas as oportunidades que contribuam para meu desenvolvimento profissional e pessoal. Quero ser uma médica capacitada e humana.
        </p>
      </div>
    </Section>
  );
}
