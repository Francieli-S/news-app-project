import dotenv from 'dotenv';

dotenv.config();

export const configs = {
  PORT: process.env.PORT || 5000,
  auth: { JWT_SECRET: process.env.JWT_SECRET || 'news_app' },
  db: {
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'postgres',
    POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT || '5432'),
    POSTGRES_USER: process.env.POSTGRES_USER || 'news_admin',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'news_admin',
    POSTGRES_DB: process.env.POSTGRES_DB || 'news_app_db',
  },
};
