import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function OutlineButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center py-2 px-2 leading-none rounded-full border-2 border-dashed border-zinc-900 text-sm outline-none transition-all duration-300",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
