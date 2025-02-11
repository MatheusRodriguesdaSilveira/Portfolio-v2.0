import { motion } from "framer-motion";
import { File } from "lucide-react";

const ButtonCv = () => {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-indigo-400 to-blue-900 text-white duration-300"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Efeito de brilho */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(120deg,#6366f1_calc(var(--shimmer-x)-25%),#1e3a8a_var(--shimmer-x),#6366f1_calc(var(--shimmer-x)+25%))] [--shimmer-x:0%] rounded-full opacity-40"
        initial={{ "--shimmer-x": "-100%" } as any}
        animate={{ "--shimmer-x": "200%" } as any}
        transition={{
          "--shimmer-x": {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Link do botão */}
      <a
        href="/CV-MatheusRodrigues.pdf"
        download="CV-MatheusRodrigues.pdf"
        target="_blank"
        className="flex items-center text-nowrap relative xl:px-10 xl:py-3.5 px-6 py-2.5 transition-all ease-in duration-300 bg-zinc-900 rounded-full group-hover:bg-opacity-0"
      >
        Meu Currículo
        <File className="ml-1 size-4" />
      </a>
    </motion.button>
  );
};

export default ButtonCv;
