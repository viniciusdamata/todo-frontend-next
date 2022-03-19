import {
  COGNITO_CLIENT_ID,
  COGNITO_CLIENT_SECRET,
  COGNITO_ISSUER,
} from "@/api/settings";
import { refreshAccessToken } from "@/api/helpers/refreshToken";
import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
  providers: [
    CognitoProvider({
      clientId: COGNITO_CLIENT_ID,
      clientSecret: COGNITO_CLIENT_SECRET,
      issuer: COGNITO_ISSUER,
      idToken: true,
      version: "2.0",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log({ token, user, account });
      console.log("refreshToken", account?.refresh_token);
      if (account && user) {
        return {
          idToken: account?.id_token,
          accessTokenExpires: Number(account?.expires_at) * 1000,
          refreshToken: account?.refresh_token,
          user,
        };
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      return refreshAccessToken(token as any);
    },
    async session({ session, token }) {
      if (token) {
        session.idToken = token.idToken;
        session.error = token.error;
        session.user = token.user as any;
      }
      return session;
    },
  },
});
