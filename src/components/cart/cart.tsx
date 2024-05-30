"use client";

import { useEffect, useState } from "react";
import CartItem from "./cart-item";
import { Link } from "@/navigation";


export function CartOverlay({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  let scrollTop = 0;

  useEffect(() => {
    if (!show) return;

    const onPressEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShow(false);
      }
    };

    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const body = document.querySelector('body')!;
    body.style.position = 'fixed';
    body.style.overflowY = 'scroll';
    body.style.width = '100%';
    body.style.top = `-${scrollTop}px`;
    window.addEventListener("keydown", onPressEscape);

    return () => {
      const body = document.querySelector('body')!;
      body.style.position = '';
      body.style.overflowY = '';
      body.style.width = '';
      body.style.top = '';
      window.scrollTo({left: 0, top: scrollTop, behavior: "instant"});
      window.removeEventListener("keydown", onPressEscape);
    };
  }, [show]);

  return (
    <details open={show} className="relative">
      <summary
        onClick={(evt) => {
          evt.preventDefault();
          setShow((old) => !old);
        }}
        className="cursor-pointer list-none rounded-md p-2 hover:bg-amber-50"
      >
        {children}
      </summary>

      <div
        className={`absolute -right-16 z-50 w-[360px] rounded border border-stone-200 bg-white px-2 py-4 shadow-xl ${show ? "animate-slideInTop" : ""}`}
        style={{ maxHeight: "calc(100vh - 20px)", overflowY: "auto" }}
      >
        <div className="flex justify-between">
          <p className="px-4 text-sm">Warenkorb</p>

          <Link href={"/cart"}>
            <p className="px-4 text-xs underline">Alles</p>
          </Link>
        </div>
        <div className="mt-4 flex max-h-96 flex-col gap-3 overflow-auto px-4">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="mt-4 px-4">Gesamt: 300€</div>
      </div>

      {show ? (
        <div
          onClick={() => setShow(false)}
          className="fixed left-0 top-0 z-[49] h-full w-full cursor-default"
        ></div>
      ) : null}
    </details>
  );
}