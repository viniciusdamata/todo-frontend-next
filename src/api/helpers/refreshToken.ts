import {
  COGNITO_CLIENT_ID,
  COGNITO_CLIENT_SECRET,
  COGNITO_DOMAIN,
} from "../settings";

interface RefreshTokenProps {
  refreshToken: string;
  accessTokenExpires: number;
  idToken: string;
}

export const refreshAccessToken = async (token: RefreshTokenProps) => {
  try {
    const { refreshToken: refresh_token } = token;

    const queryParams = new URLSearchParams({
      grant_type: "refresh_token",
      client_id: COGNITO_CLIENT_ID,
      client_secret: COGNITO_CLIENT_SECRET,
      refresh_token,
    });

    const url = `${COGNITO_DOMAIN}/oauth2/token?${queryParams}`;

    const headerString = `${COGNITO_CLIENT_ID}:${COGNITO_CLIENT_SECRET}`;
    const buff = Buffer.from(headerString, "utf-8");
    const authHeader = buff.toString("base64");

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authHeader}`,
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
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
};
