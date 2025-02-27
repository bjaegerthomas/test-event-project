const configData = {
  development: {
    database: process.env.DB_NAME || "dev_db",
    username: process.env.DB_USER || "dev_user",
    password: process.env.DB_PASSWORD || "dev_pw",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  },
  production: {
    database: process.env.DB_NAME || "prod_db",
    username: process.env.DB_USER || "prod_user",
    password: process.env.DB_PASSWORD || "prod_pw",
    host: process.env.DB_HOST || "production_host",
    dialect: "postgres",
  },
};

export default configData;
