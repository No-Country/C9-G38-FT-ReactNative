const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../config/database.util");

//Creating a model...

const User = db.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
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
    allowNull: false,
  },
  idFollows: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idUserSubcategory: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idLocation: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "ACTIVE",
  },
});

module.exports = { User };
