import React, { ReactNode } from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  { children: ReactNode; className?: string }
>(({ className, children, ...props }, ref) => {
  return (
    <button className={className} ref={ref} {...props}>
      {children}
    </button>
  );
});

export { Button };
