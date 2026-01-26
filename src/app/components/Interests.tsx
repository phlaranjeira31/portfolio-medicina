import Section from "./Section";
import { profile } from "@/app/data/profile";


export default function Interests() {
  return (
    <Section id="interesses" title="Interesses" subtitle="Áreas que ela pretende explorar com profundidade.">
      <div className="flex flex-wrap gap-2">
        {profile.interests.map((i) => (
          <span key={i} className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700">
            {i}
          </span>
        ))}
      </div>
    </Section>
  );
}
