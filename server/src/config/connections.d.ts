declare module '../config/connections' {
    import { Sequelize } from 'sequelize';
  
    const sequelize: Sequelize;
    export default sequelize;
  }