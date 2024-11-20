import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { configs } from './env.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: configs.db.POSTGRES_HOST,
  port: configs.db.POSTGRES_PORT,
  username: configs.db.POSTGRES_USER,
  password: configs.db.POSTGRES_PASSWORD,
  database: configs.db.POSTGRES_DB,
  // entities
  synchronize: true,
  logging: true,
});

// it is not a config, 
// TODO: move from here 
export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Connected to database');
  } catch (error) {
    console.log('Error in connecting to database', error);
  }
};
