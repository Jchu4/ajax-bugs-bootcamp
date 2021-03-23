import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';
import initBugModel from './bugModel.mjs';
import initFeatureModel from './featureModel.mjs';

const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Add your model definitions to db here
db.Bug = initBugModel(sequelize, Sequelize.DataTypes);
db.Feature = initFeatureModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
