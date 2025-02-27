import { Sequelize } from "sequelize";
import configData from "../config/connections.js";

const env = process.env.NODE_ENV || "development";
const config = configData[env];

if (!config) {
  console.error(`❌ Database configuration missing for environment: ${env}`);
  throw new Error(`Database configuration missing for '${env}'.`);
}

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

export default sequelize;
