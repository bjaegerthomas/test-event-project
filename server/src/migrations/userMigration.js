// Import Sequelize and DataTypes
import { Sequelize, DataTypes } from 'sequelize';

// Define the migration for creating the Users table
export const up = async (queryInterface) => {
  await queryInterface.createTable('Users', {
    id: { 
      type: DataTypes.UUID, // Use DataTypes instead of Sequelize
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true 
    },
    name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    email: { 
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true 
    },
    username: { 
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true 
    },
    password: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    createdAt: { 
      type: DataTypes.DATE, 
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: { 
      type: DataTypes.DATE, 
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
  });
};

// Define the migration for dropping the Users table (rollback)
export const down = async (queryInterface) => {
  await queryInterface.dropTable('Users');
};
