// Import the DataTypes module from Sequelize to define model attributes
import { DataTypes } from 'sequelize';

// Import the Sequelize instance from the database configuration
import sequelize from '../config/database.js';

// Define the User model using Sequelize ORM
const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID, // Use UUID as the unique identifier for each user
    defaultValue: DataTypes.UUIDV4, // Automatically generate a UUID for new users
    primaryKey: true, // Mark this field as the primary key
  },
  name: {
    type: DataTypes.STRING, // Store the user's full name as a string
    allowNull: false, // Name field is required
  },
  email: {
    type: DataTypes.STRING, // Store the user's email as a string
    allowNull: false, // Email is required
    unique: true, // Ensure email is unique across users
    validate: { isEmail: true }, // Validate that the input is in email format
  },
  username: {
    type: DataTypes.STRING, // Store a unique username for the user
    allowNull: false, // Username is required
    unique: true, // Ensure username is unique across users
  },
  password: {
    type: DataTypes.STRING, // Store the hashed password as a string
    allowNull: false, // Password is required
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Export the User model for use in other parts of the application
export default User;
