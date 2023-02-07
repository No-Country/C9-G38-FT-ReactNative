const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../config/database.util");

//Creating a model...

const Category = db.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Category };
