const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

//CONNECTING TO DATABASE...

//using PostrgreSQL...
// const db = new Sequelize({
//   dialect: "postgres",
//   host: "localhost",
//   username: "postgres",
//   password: "cezan27",
//   port: 5432,
//   database: "sports",
//   logging: false,
// });

//Using MySQL...
const db = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB,
  logging: false,
});

module.exports = { db, DataTypes };
