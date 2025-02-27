import { DataTypes } from 'sequelize';
import sequelize from './database';
import User from './UserModel';

// Define Event Model
const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
    references: { model: 'Users', key: 'id' },
  },
}, { timestamps: true });

// Define Relationships
User.hasMany(Event, { foreignKey: 'createdBy', onDelete: 'CASCADE' });
Event.belongsTo(User, { foreignKey: 'createdBy', onDelete: 'CASCADE' });

export default Event;
