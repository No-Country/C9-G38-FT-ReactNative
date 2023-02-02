const Sequelize = require('Sequelize');

const dbConfig = {
  HOST: process.env.HOST_DB || 'localhost',
  USER: process.env.USER_DB,
  PASSWORD: '',
  DB: process.env.NAME_DB,
  dialect: 'mysql',
};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operationsAliases: false,
  logging: false,
});

const db = {};
db.sequelize = sequelize;

module.exports = db;
