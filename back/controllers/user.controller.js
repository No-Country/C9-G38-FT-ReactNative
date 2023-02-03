//Importing models...
const { User } = require("../models/user.model");

//Generating middlewares...

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({
      name,
      email,
    });
    res.status(201).json({
      status: "success",
      data: { newUser },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser };
