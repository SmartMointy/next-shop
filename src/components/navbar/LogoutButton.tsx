"use client";

import { logout } from "@/app/[lang]/(auth)/actions";

export default function LogoutButton() {
  return <p onClick={() => logout()}>Closed</p>;
}
