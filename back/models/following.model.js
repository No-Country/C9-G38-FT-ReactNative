const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/database.util');
const { User } = require('./user.model');

const Following = db.define('followings', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: User,
    },
  },
  followingId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: User,
    },
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});

module.exports = Following;
