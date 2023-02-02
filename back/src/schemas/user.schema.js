const db = require('../config/database');
const { DataTypes } = require('sequelize');

const User = db.sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
