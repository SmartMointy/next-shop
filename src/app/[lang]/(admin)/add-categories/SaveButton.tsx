"use client";

import Loader2 from "@/components/loader-2";
import { useFormStatus } from "react-dom";

export default function SaveButton({
  ...props
}: {} & React.ComponentPropsWithRef<"button">) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      {...props}
      className={`h-12 w-32 rounded-md bg-emerald-500 px-4 text-sm font-medium text-emerald-950 outline-none ring-amber-200 hover:opacity-90 focus:ring-2 ${props.className}`}
    >
      {pending ? (
        <div className="flex justify-center">
          <Loader2 className="text-ember-950" />
        </div>
      ) : (
        "Save"
      )}
    </button>
  );
}
