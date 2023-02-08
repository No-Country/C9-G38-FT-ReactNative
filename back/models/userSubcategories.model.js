const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../config/database.util");

const UserSubcategory = db.define("userSubcategories", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subcategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = UserSubcategory;
