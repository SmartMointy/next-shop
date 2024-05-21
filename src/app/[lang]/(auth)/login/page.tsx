"use client";
import { useState } from "react";
import { login } from "./action";

export default function Login() {
  const [email, setEmail] = useState("asd@asd.asd");
  const [password, setPassword] = useState("Asdf@1234");

  const handleSubmit = async () => {
    login({
      email,
      password,
      callbackUrl: "/",
    }).catch((e) => {
      console.log(e);
    });

    console.log("SUCCESSFUL LOGN");
  };

  return (
    <div className="mx-8">
      <label className="flex flex-col">
        <span>E-Mail</span>
        <input
          className="p-2 mt-2 border-solid border-l-purple-500 border-2"
          name="username"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="flex flex-col">
        <span>Password</span>
        <input
          className="p-2 mt-2 border-solid border-l-purple-500 border-2"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        className="px-4 mt-6 h-10 rounded-md text-sm bg-os hover:opacity-90"
        type="submit"
        onClick={() => handleSubmit()}
      >
        Anmelden
      </button>
    </div>
  );
}
