import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  value,
  direction = "up",
}: {
  value: number;
  direction?: "up" | "down";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
    restSpeed: 0.01,
    restDelta: 0.01,
    bounce: 0.5,
    velocity: 0.5,
    duration: 2000,
    mass: 1,
  });

  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setStartAnimation(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  useEffect(() => {
    if (startAnimation) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, startAnimation]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0) as any
          );
        }
      }),
    [springValue]
  );

  return <span ref={ref} />;
}

export const TextTicker = () => {
  return (
    <div className="text-2xl font-semibold tabular-nums tracking-tight">
      <Counter value={1000} direction="up" />
    </div>
  );
};
