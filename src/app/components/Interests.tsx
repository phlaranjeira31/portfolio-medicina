
import Section from "./Section";
import { profile } from "@/app/data/profile";
import { HeartPulse, Stethoscope } from "lucide-react";

export default function Interests() {
  return (
    <Section
      id="interesses"
      title={
        <span className="flex items-center gap-2">
          <HeartPulse size={18} className="text-rose-700" />
          Interesses
        </span>
      }
      subtitle="Áreas que ela pretende explorar com profundidade."
    >
      <div className="flex flex-wrap gap-2">
        {profile.interests.map((i) => (
          <span
            key={i}
            className="flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-700"
          >
            <Stethoscope size={14} />
            {i}
          </span>
        ))}
      </div>
    </Section>
  );
}