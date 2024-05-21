"use server";

import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import createUserPool from "./cognitoUserPool";

interface cognitoRegisterProps {
  username: string;
  password: string;
}
export default async function cognitoRegister({ username, password }: cognitoRegisterProps) {
  return new Promise(async (resolve, reject) => {
    const UserPool = await createUserPool();
    const attributeList = [new CognitoUserAttribute({ Name: "email", Value: username })];

    UserPool.signUp(username, password, attributeList, [], (err, result) => {
      if (err) {
        console.log("Cognito Register Error", err);
        reject(new Error(err.message) || "Cognito Register Failed!");
      }
      console.log("Cognito registration result: ", result);
      const response = {
        userConfirmed: result?.userConfirmed,
        userSub: result?.userSub,
      };
      //OWN DATABASE
      resolve(response);
    });
  });
}
