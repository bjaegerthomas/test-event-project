import sequelize from '../models/database.js';
import { UserFactory } from './User';

const User = UserFactory(sequelize);

export { User };
