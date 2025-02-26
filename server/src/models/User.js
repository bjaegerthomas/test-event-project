// Import necessary modules from Sequelize and bcrypt
import { DataTypes, Model } from 'sequelize';
import sequelize from '../models/database.js';
import bcrypt from 'bcrypt';

// Define the User model using Sequelize ORM
class User extends Model {
  async validPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}

// Initialize the User model with fields
User.init({
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
  sequelize,
  modelName: 'User',
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

// Export the User model
export default User;
