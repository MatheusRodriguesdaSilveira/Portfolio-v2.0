import React from "react";

export default function ButtonScroll({ onClick, children }: any) {
  return (
    <div className="fixed items-end justify-end right-4 xl:right-[50px] 2xl:right-[40px] bottom-5 z-50">
      <button
        onClick={onClick}
        className="backdrop-blur-sm rounded-full p-3 cursor-pointer border-2 border-dashed border-zinc-500 hover:scale-95 duration-500 shadow hover:shadow-yellow-400 hover:shadow-lg"
      >
        {children}
      </button>
    </div>
  );
}
