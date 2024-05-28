"use client";

import { useEffect, useState } from "react";

const animationDuration = 500;
const animationDelay = 100;
const animationTime = 5000;

const calculateDelayByIndex = (i: number) => {
  return i * (animationDuration + animationTime) + animationDelay;
};

const calculateTotalTime = (count: number) => {
  return (
    count * (animationDuration + animationTime) +
    animationDelay +
    animationDuration
  );
};

export default function Slogan({ slogans }: { slogans: string[] }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) {
      setVisible(true);
      return;
    }

    const timeout = setTimeout(() => {
      setVisible(false);
    }, calculateTotalTime(slogans.length));

    return () => {
      clearTimeout(timeout);
    };
  }, [visible]);

  return (
    <div className="flex items-center overflow-hidden">
      <div className="h-14">
        <p className="py-2 text-4xl font-bold text-stone-700">Schick&nbsp;</p>
      </div>
      <div className="relative h-14 w-full">
        {visible
          ? slogans.map((slogan, i) => (
              <p
                key={slogan}
                className={`slogan-animation absolute w-full translate-y-full py-2 text-4xl font-bold text-gold-600`}
                style={{
                  "--animation-delay":
                    i === 0
                      ? `${animationDelay}ms`
                      : `${calculateDelayByIndex(i)}ms`,
                  "--animation-duration": `${animationDuration}ms`,
                  "--animation-time": `${animationTime}ms`,
                }}
              >
                {slogan}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}
