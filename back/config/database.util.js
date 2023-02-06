const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

//CONNECTING TO DATABASE...

const db = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB,
  logging: false,
});

module.exports = { db };
