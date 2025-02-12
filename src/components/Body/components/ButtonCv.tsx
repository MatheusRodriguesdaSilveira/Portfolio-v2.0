import { ArrowDownToLine, Download } from "lucide-react";
import React from "react";

const ButtonCv = () => {
  return (
    <button
      type="submit"
      className="flex text-white justify-center gap-2 items-center mx-auto shadow-xl bg-zinc-900 isolation-auto border-indigo-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-indigo-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
    >
      <a
        className="flex gap-1 items-center text-sm text-nowrap lg:text-base font-semibold"
        href="/CV-MatheusRodrigues.pdf"
        download="CV-MatheusRodrigues.pdf"
        target="_blank"
      >
        Download currículo
        <ArrowDownToLine className="w-9 h-9 p-1.5 justify-end rotate-90 group-hover:-rotate-0 group-hover:bg-gray-50 group-hover:text-indigo-900 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none" />
      </a>
    </button>
  );
};

export default ButtonCv;
