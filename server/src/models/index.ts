import sequelize from '../models/database.js';
import { UserFactory } from './User.ts';

const User = UserFactory(sequelize);

export { User };
