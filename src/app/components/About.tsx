import Section from "./Section";
import { profile } from "@/app/data/profile";


export default function About() {
  return (
    <Section
      id="sobre"
      title="Sobre"
      subtitle="Uma apresentação breve e profissional."
    >
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <p className="text-sm leading-relaxed text-neutral-700">{profile.bio}</p>
      </div>
    </Section>
  );
}
