import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const ShimmerButton = ({
  scrollToProjects,
}: {
  scrollToProjects: () => void;
}) => {
  return (
    <motion.button
      onClick={scrollToProjects}
      className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-yellow-300 to-[#fcf403] text-white duration-300"
      whileTap={{ scale: 0.9 }}
    >
      {/* Efeito de brilho */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(120deg,#fcf403(var(--shimmer-x)-25%),#1e3a8a_var(--shimmer-x),#6366f1_calc(var(--shimmer-x)+25%))] [--shimmer-x:0%] rounded-full opacity-40"
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

      {/* Conteúdo do botão */}
      <span className="group/button relative inline-flex h-12 w-12 xl:px-[26px] xl:py-[26px] md:h-[50px] md:w-[50px] lg:h-10 lg:w-10 items-center justify-center overflow-hidden ease-in bg-zinc-900 rounded-full group-hover:bg-opacity-0 duration-150 font-medium text-white hover:text-zinc-900 transition-all hover:w-[135px] xl:hover:w-[150px]">
        <span className="justify-center items-center flex">
          <a className="text-zinc-900 text-sm md:text-md font-bold flex ml-2 mb-0.5 gap-2 items-center whitespace-nowrap opacity-0 transition-all duration-150 group-hover/button:-translate-x-4 group-hover/button:opacity-100">
            See my works
          </a>
          <div className="absolute right-3.5 lg:right-5 xl:right-4">
            <MoveRight className="size-5 xl:size-5" />
          </div>
        </span>
      </span>
    </motion.button>
  );
};

export default ShimmerButton;
