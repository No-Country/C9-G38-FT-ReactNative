const app = require("./app");
const { db } = require("./config/database.util");
const dotenv = require("dotenv");

const relationshipModels = require("./models/relationshipModels");

dotenv.config();

const init = async () => {
  try {
    await db.authenticate().then((res) => console.log("DB Authenticated"));
    relationshipModels();
    await db.sync().then((res) => console.log("DB Synced"));
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log("Running");
    });
  } catch (error) {
    console.log(error);
  }
};

init();
