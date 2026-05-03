"use client";

import { FileDown } from "lucide-react";

export default function BotaoPDF() {
  function gerarPDF() {
    window.print();
  }

  return (
    <button
      onClick={gerarPDF}
      className="
        rounded-full
        bg-pink-500
        px-6
        py-3
        text-sm
        font-semibold
        text-white
        shadow-sm
        transition
        hover:bg-pink-600
        flex
        items-center
        gap-2
      "
    >
      <FileDown size={18} />
      Baixar PDF
    </button>
  );
}