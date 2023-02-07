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

const getUserById = (req, res) => {
  const { user } = req;
  return res.status(200).json({
    status: "success",
    data: { user },
  });
  try {
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createUser, getUserById };
