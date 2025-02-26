import sequelize from '../models/database.js';
import { UserFactory } from './User.js';

const User = UserFactory(sequelize);

export { User };
