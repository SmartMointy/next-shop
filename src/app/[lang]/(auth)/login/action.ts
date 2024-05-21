"use server";

import { signIn } from "@/app/api/[...nextauth]/auth";
import { redirect } from "next/navigation";

export const login = async (values: any, callbackUrl?: string | null) => {
  try {
    await signIn("credentials", {
      username: values.email,
      password: values.password,
      redirectTo: callbackUrl || "/",
      redirect: true,
    });
  } catch (error: any) {
    if (error?.type === "CredentialsSignin") {
      return { error: "Invalid credentials!" };
    }

    return { error: "Something went wrong!" };
  } finally {
    redirect("/");
  }
};
