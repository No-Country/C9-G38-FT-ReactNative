//Importing models...
const { User } = require("../models/user.model");

//Generating middlewares...

const createUser = async (req, res) => {
  try {
    const {
      fullname,
      username,
      email,
      password,
      biography,
      phone,
      idFollows,
      idUserSubcategory,
      idLocation,
    } = req.body;
    const newUser = await User.create({
      fullname,
      username,
      email,
      password,
      biography,
      phone,
      idFollows,
      idUserSubcategory,
      idLocation,
    });
    res.status(201).json({
      status: "success",
      data: { newUser },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ where: { status: "ACTIVE" } });
    res.status(200).json({
      status: "success",
      data: { users },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, getAllUsers };
