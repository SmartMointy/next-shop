import React from "react";

export default function H2(props: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 {...props} className={`text-xl font-semibold ${props.className}`}>
      {props.children}
    </h2>
  );
}
