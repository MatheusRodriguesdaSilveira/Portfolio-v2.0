"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
} from "framer-motion";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number; opacity: number };
    visible: { y: number; opacity: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
}

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 10,
  inView = false,
  inViewMargin = "-50px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { margin: inViewMargin, once: true });
  // hasBeenVisible is a belt-and-suspenders latch: once this section has been
  // shown, it stays shown forever, even if something else (a context update
  // elsewhere in the tree causing a reflow, for example) ever made Framer's
  // own `once` tracking re-evaluate isInView as false.
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const isInView = !inView || inViewResult || hasBeenVisible;

  useEffect(() => {
    if (isInView) setHasBeenVisible(true);
  }, [isInView]);

  // No `filter: blur()` here on purpose: combined with the Navbar's
  // backdrop-blur, animated CSS filters on other elements are a known
  // trigger for a Chromium/Edge GPU-compositing bug where content silently
  // disappears after a later re-render (works fine in headless/software
  // rendering, which is why it wasn't reproducible with automated testing).
  // Keeping the fade/slide, dropping the blur, removes that risk entirely.
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      style={{ willChange: "opacity, transform" }}
      className={`block ${className}`}
    >
      {children}
    </motion.div>
  );
}
