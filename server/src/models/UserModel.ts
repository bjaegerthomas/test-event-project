import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './database';

// Define attributes for User
interface UserAttributes {
  id: string;
  username: string;
  email: string;
  password: string;
  name: string;
  // Optional fields
  createdAt?: Date;
  updatedAt?: Date;
}

// Define optional fields for user creation
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// User Model Class
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  
  public id!: string;
  public username!: string;
  public email!: string;
  public password!: string;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize Model without hooks
User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Users',
    timestamps: true,
  }
);

export default User;
