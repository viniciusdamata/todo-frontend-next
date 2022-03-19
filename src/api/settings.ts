const COGNITO_CLIENT_ID: string = String(process.env.COGNITO_CLIENT_ID);
const COGNITO_CLIENT_SECRET: string = String(process.env.COGNITO_CLIENT_SECRET);
const COGNITO_ISSUER: string = String(process.env.COGNITO_ISSUER);
const COGNITO_DOMAIN: string = String(process.env.COGNITO_DOMAIN);

export {
  COGNITO_CLIENT_ID,
  COGNITO_CLIENT_SECRET,
  COGNITO_ISSUER,
  COGNITO_DOMAIN,
};
