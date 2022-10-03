import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  database_test: process.env.POSTGRES_DB_TEST,
  host: process.env.POSTGRES_HOST,
  token_secret: process.env.TOKEN_SECRET,
  bcrypt_password: process.env.BCRYPT_PASSWORD
};
