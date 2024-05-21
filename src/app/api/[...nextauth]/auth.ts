import createUserPool from "@/utils/cognitoUserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { allowedNodeEnvironmentFlags } from "process";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  cookies: {
    sessionToken: {
      name: `session-token`,
      options: {
        path: "/",
      },
    },
    callbackUrl: {
      name: `callback-url`,
      options: {
        path: "/",
      },
    },
    csrfToken: {
      name: `csrf-token`,
      options: {
        path: "/",
      },
    },
  },
  callbacks: {
    // Type errors because of next-auth beta
    // @ts-ignore: Does not exist on type
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials?) {
        if (!credentials || !credentials.username || !credentials.password) {
          throw new Error("Username and password are not defined correctly");
        }
        const Userpool = await createUserPool();
        const cognitoUser = new CognitoUser({
          Username: credentials.username as string,
          Pool: Userpool,
        });

        const authenticationDetails = new AuthenticationDetails({
          Username: credentials.username as string,
          Password: credentials.password as string,
        });
        return new Promise((resolve, reject) => {
          cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
              //console.log("Cognito Login Success: ", result);
              //console.log(result.getIdToken().payload);
              resolve({
                id: result.getIdToken().payload["sub"] || "hans",
                email: result.getIdToken().payload["email"] || "han",
              });
            },
            onFailure: (err) => {
              console.log("Cognito Login Failed: ", err);
              if (err.code === "UserNotConfirmedException") {
                resolve({
                  id: credentials.username as any,
                  email: "NOTVERFIED",
                });
              }
              reject(new Error(err.message) || "Cognito Email Auth Failed!");
            },
          });
        });
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
