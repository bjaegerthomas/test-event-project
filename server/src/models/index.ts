import sequelize from './database';
import User from './UserModel';
import Event from './EventModel';

// Sync Database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('✅ Database synchronized successfully.');
  } catch (error) {
    console.error('❌ Error syncing database:', error);
  }
};

// Export models & sync function
export { sequelize, User, Event, syncDatabase };
