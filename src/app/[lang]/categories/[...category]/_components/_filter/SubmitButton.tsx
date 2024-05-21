"use client";

import Loader2 from "@/components/loader-2";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ hasFormChanged }: any) {
  const { pending } = useFormStatus();

  return (
    <div
      className={`pointer-events-none sticky bottom-0 bg-gradient-to-t from-white to-transparent pb-4 pt-12 transition-opacity duration-300 ${pending || hasFormChanged ? "opacity-100" : "opacity-0"}`}
    >
      <div className="rounded-md bg-white">
        <button
          type="submit"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="pointer-events-auto flex h-12 w-full items-center justify-center gap-2 rounded-md bg-os px-4 text-sm font-medium hover:opacity-90"
        >
          {pending ? <Loader2 className="animate-spin text-stone-800" /> : null}
          Filter Anwenden
        </button>
      </div>
    </div>
  );
}
