declare module '../config/connections' {
    import { Sequelize } from 'sequelize';
  
    const sequelize: Sequelize;
    export default sequelize;
  }

  declare const configData: {
    [key: string]: {
      database: string;
      username: string;
      password: string;
      host: string;
      dialect: dialect;
    };
  };
  
  export default configData;
  