const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/database.util');

const UserSport = db.define('userSports', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: false,
  },
  sportId: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: false,
  },
});

module.exports = UserSport;
