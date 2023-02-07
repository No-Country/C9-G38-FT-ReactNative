const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/database.util');

const User = db.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  google: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  biography: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idFollows: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  idUserSubcategory: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  idLocation: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  },
});

module.exports = User;
