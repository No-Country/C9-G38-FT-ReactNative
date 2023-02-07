const express = require("express");
const { userRouter } = require("./routes/user.routes");

//Inicializing express...
const app = express();

//Setting to receive JSON...
express.json();
app.use(express.json());

//Generating enpoints...
app.use("/api/v1/users", userRouter);

//Handling request errors...
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exist in our server`,
  });
});

module.exports = { app };
