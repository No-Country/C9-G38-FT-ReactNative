const { Sequelize, DataTypes, Model } = require('sequelize');
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
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  coordinates: {
    type: DataTypes.GEOMETRY,
    allowNull: true,
  },
  gender: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  },
});

module.exports = User;
