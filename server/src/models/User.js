// Import necessary modules from Sequelize and bcrypt
import { DataTypes } from 'sequelize';
import sequelize from '../models/database.js';
import bcrypt from 'bcrypt';

// Define the User model using Sequelize ORM
const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID, 
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true, 
  },
  name: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
  email: {
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true, 
    validate: { isEmail: true }, 
  },
  username: {
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true, 
  },
  password: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
}, { 
  timestamps: true,
  hooks: {
    // Hash password before saving a new user
    beforeCreate: async (user) => {
      const saltRounds = 10;
      user.password = await bcrypt.hash(user.password, saltRounds);
    },
    // Hash password before updating if it's changed
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        const saltRounds = 10;
        user.password = await bcrypt.hash(user.password, saltRounds);
      }
    }
  }
});

// Method to compare passwords for login
User.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Export the User model
export default User;