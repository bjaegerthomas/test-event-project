// Import necessary modules from Sequelize for defining the model
import { DataTypes } from 'sequelize';

// Import the Sequelize instance for database connection
import sequelize from '../models/database.js';

// Import the User model to establish relationships
import User from './User.js'; 

// Define the Event model using Sequelize ORM
const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.UUID, // Use UUID as the unique identifier for each event
    defaultValue: DataTypes.UUIDV4, // Automatically generate a UUID for new events
    primaryKey: true, // Mark this field as the primary key
  },
  title: {
    type: DataTypes.STRING, // Store the event title as a string
    allowNull: false, // Title is required
  },
  description: {
    type: DataTypes.TEXT, // Store a detailed description of the event
    allowNull: false, // Description is required
  },
  date: {
    type: DataTypes.STRING, // Store the event date as a string (consider changing to DATE type for better validation)
    allowNull: false, // Date is required
  },
  location: {
    type: DataTypes.STRING, // Store the event location as a string
    allowNull: false, // Location is required
  },
  createdBy: {
    type: DataTypes.UUID, // Store the ID of the user who created the event
    allowNull: false, // A user must be associated with the event
    references: { model: 'Users', key: 'id' }, // Establish a foreign key relationship with Users table
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Define associations between User and Event models
User.hasMany(Event, { foreignKey: 'createdBy', onDelete: 'CASCADE' }); 
// A user can create multiple events; if a user is deleted, delete all associated events

Event.belongsTo(User, { foreignKey: 'createdBy', onDelete: 'CASCADE' }); 
// Each event belongs to a user; if the user is deleted, remove their events

// Export the Event model for use in other parts of the application
export default Event;
