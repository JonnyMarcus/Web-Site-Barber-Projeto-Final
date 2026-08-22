export default ({ env }: { env: any }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "someSecretKey"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "someSaltKey"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "someTransferSaltKey"),
    },
  },
});
