import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

/**
 * PostgreSQL Database Configuration with TypeORM
 * This configuration file sets up the connection to PostgreSQL database
 */
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'allova_db',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.DB_LOGGING === 'true',
  logger: 'advanced-console',
  entities: [
    'src/entities/**/*.ts',
  ],
  migrations: [
    'src/migrations/**/*.ts',
  ],
  subscribers: [
    'src/subscribers/**/*.ts',
  ],
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  poolSize: parseInt(process.env.DB_POOL_SIZE || '10'),
  maxQueryExecutionTime: parseInt(process.env.DB_MAX_QUERY_TIME || '5000'),
  extra: {
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
  },
});

/**
 * Initialize the database connection
 * Call this function in your application bootstrap code
 */
export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('✓ Database connection established successfully');
  } catch (error) {
    console.error('✗ Error during database connection initialization:', error);
    throw error;
  }
};

/**
 * Disconnect from database
 * Call this function during application shutdown
 */
export const disconnectDatabase = async () => {
  try {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
      console.log('✓ Database connection closed');
    }
  } catch (error) {
    console.error('✗ Error during database disconnection:', error);
    throw error;
  }
};

/**
 * Get the database connection instance
 */
export const getDatabase = () => {
  if (!AppDataSource.isInitialized) {
    throw new Error('Database is not initialized. Call initializeDatabase() first.');
  }
  return AppDataSource;
};

export default AppDataSource;
