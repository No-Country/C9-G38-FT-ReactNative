require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/database.js');

app.use(cors());

db.sequelize.sync();

app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
