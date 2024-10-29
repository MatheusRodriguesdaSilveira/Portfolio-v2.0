"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  initialDelay?: number; // Adicione initialDelay ao tipo
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  initialDelay = 0, // Define o valor padrão para 0
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  return (
    <div className="flex justify-center space-x-1">
      {text.split("").map((char, i) => (
        <motion.h1
          key={i}
          initial="hidden"
          animate="visible"
          variants={framerProps}
          transition={{
            duration,
            delay: initialDelay + i * delayMultiple, // Inclui o delay inicial
          }}
          className={cn("drop-shadow-sm", className)}
        >
          {char === " " ? <span>&nbsp;</span> : char}
        </motion.h1>
      ))}
    </div>
  );
}
