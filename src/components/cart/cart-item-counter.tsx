import { useState } from "react";

import ChevronLeftSVG from "@/assets/icons/cheveron-left.svg";
import ChevronRightSVG from "@/assets/icons/cheveron-right.svg";

export default function CartItemCounter({
  initialCount,
}: {
  initialCount: number;
}) {
  const [counter, setCounter] = useState(initialCount);

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((old) => old - 1);
    }
  };

  return (
    <div className="flex w-fit grow-0 rounded text-xs">
      <button
        onClick={decreaseCounter}
        className="rounded bg-stone-100 px-1 hover:bg-stone-200"
      >
        <ChevronLeftSVG width={12} height={12} viewBox="0 0 24 24" />
      </button>
      <div className="w-8 text-center">{counter}</div>
      <button
        onClick={() => setCounter((old) => old + 1)}
        className="rounded bg-stone-100 px-1 hover:bg-stone-200"
      >
        <ChevronRightSVG width={12} height={12} viewBox="0 0 24 24" />
      </button>
    </div>
  );
}
