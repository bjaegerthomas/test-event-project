import { Sequelize } from 'sequelize';
import configData from '../config/connections.js';

const env = process.env.NODE_ENV || 'development'; // Ensure a default environment
const config = configData[env]; // Get environment-specific config

// Validate config exists
if (!config) {
  console.error('Config Data:', configData); // Debugging
  console.error('Current Environment:', env);
  throw new Error(`Database configuration for '${env}' not found.`);
}

// Initialize Sequelize connection
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

export default sequelize;
