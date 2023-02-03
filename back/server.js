const { app } = require("./app");
const { db } = require("./config/database.util");
const dotenv = require("dotenv");

dotenv.config();

//Creating an express server...
const startSever = async () => {
  try {
    await db.authenticate().then((res) => console.log("Authenticated"));
    await db.sync().then((res) => console.log("Synced"));
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log("running");
    });
  } catch (error) {
    console.log(error);
  }
};

startSever();
