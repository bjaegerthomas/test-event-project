// Import Sequelize, which provides data types and database interaction methods
import { Sequelize, DataTypes } from 'sequelize';


// Define the migration for creating the Events table
export const up = async (queryInterface) => {
  await queryInterface.createTable('Events', {
    id: { 
      type: DataTypes.UUID, // Use DataTypes for data types
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true
    },
    title: { 
      type: DataTypes.STRING, // DataTypes for strings
      allowNull: false
    },
    description: { 
      type: DataTypes.TEXT, // DataTypes for TEXT
      allowNull: false
    },
    date: { 
      type: DataTypes.STRING, // DataTypes for strings
      allowNull: false
    },
    location: { 
      type: DataTypes.STRING, 
      allowNull: false
    },
    createdBy: { 
      type: DataTypes.UUID, 
      allowNull: false,
      references: { 
        model: 'Users', 
        key: 'id'
      }
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

export const down = async (queryInterface) => {
  await queryInterface.dropTable('Events');
};
