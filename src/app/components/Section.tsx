import { ReactNode } from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: React.ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-rose-100 bg-rose-50/30 py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-5">
        {/* Cabeçalho da seção */}
        <div className="mb-10">

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-rose-900">
            {title}
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-rose-400" />

          {subtitle ? (
            <p className="mt-4 max-w-2xl text-sm text-rose-700">
              {subtitle}
            </p>
          ) : null}
        </div>

        {/* Conteúdo */}
        {children}
      </div>
    </section>
  );
}


