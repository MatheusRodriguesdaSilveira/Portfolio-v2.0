import React from "react";

const Hr = ({ width = "90%", className = "" }) => {
  return (
    <hr
      className={`my-14 px-1 h-0.5 border-t-0 bg-neutral-700 mx-auto ${className}`}
      style={{ width }}
    />
  );
};

export default Hr;
