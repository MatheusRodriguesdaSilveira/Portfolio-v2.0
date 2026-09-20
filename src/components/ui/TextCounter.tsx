import { useEffect, useRef } from "react";
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
  // Plain damping/stiffness only: mixing that model with duration/bounce
  // (as this used to) leaves Framer Motion to guess which config wins, and
  // for a small target like 2 the spring could settle "at rest" on an
  // overshoot before ever reaching the real value, so no further "change"
  // events fired and the number stayed blank.
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // The rendered number is never allowed to depend on the animation
  // succeeding: it starts correct and the spring only animates on top of it.
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = Intl.NumberFormat("en-US").format(value);
    }
  }, [value]);

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [isInView, motionValue, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            Math.round(latest)
          );
        }
      }),
    [springValue]
  );

  return <span ref={ref}>{Intl.NumberFormat("en-US").format(value)}</span>;
}

export const TextTicker = () => {
  return (
    <div className="text-2xl font-semibold tabular-nums tracking-tight">
      <Counter value={1000} direction="up" />
    </div>
  );
};
