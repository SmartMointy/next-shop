"use server";

import { signOut } from "@/app/api/[...nextauth]/auth";

export const logout = async () => {
  await signOut({
    redirectTo: "/",
  });
};
