"use client";

import cognitoRegister from "@/utils/cognitoRegister";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const registerdata = {
      username: username,
      password: password,
    };
    try {
      const result = cognitoRegister(registerdata);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input
          type={"text"}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>password:</label>
        <input
          type={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type={"submit"}>Register</button>
      </form>
    </div>
  );
}
