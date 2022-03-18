import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

const clientId = String(process.env.COGNITO_CLIENT_ID);
const clientSecret = String(process.env.COGNITO_CLIENT_SECRET);
const issuer = String(process.env.COGNITO_ISSUER);

async function refreshAccessToken(token: any) {
  console.log(token);
  try {
    const url =
      "https://" +
      process.env.COGNITO_DOMAIN +
      "/oauth2/token?" +
      new URLSearchParams({
        grant_type: "refresh_token",
        client_id: process.env.COGNITO_CLIENT_ID,
        client_secret: process.env.COGNITO_SECRET,
        refresh_token: token.refreshToken,
      } as any);

    const headerString = String(process.env.COGNITO_CLIENT_ID);
    ":" + String(process.env.COGNITO_SECRET);
    const buff = Buffer.from(headerString, "utf-8");
    const authHeader = buff.toString("base64");

    const refreshedTokensResponse = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + authHeader,
      },
      method: "POST",
    });

    const refreshedTokens = await refreshedTokensResponse.json();

    if (!refreshedTokensResponse.ok) {
      throw refreshedTokens;
    }
    const res = {
      ...token,
      idToken: refreshedTokens.id_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
    return res;
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
      clientId,
      clientSecret,
      issuer,
      idToken: true,
      version: "2.0",
    }),

    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      //   console.log({ token, user, account });
      if (account && user) {
        return {
          idToken: account?.id_token,
          accessTokenExpires: Date.now() + Number(account?.expires_at) * 1000,
          refreshToken: account?.refreshToken,
        };
      }
      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      if (token) {
        session.idToken = token.idToken;
        session.error = token.error;
      }
      return session;
    },
  },
});
