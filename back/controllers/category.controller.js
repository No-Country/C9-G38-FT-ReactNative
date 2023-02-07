//Importing models...
const { Category } = require("../models/categories.model");

//Generating middlewares...

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.create({ name });
    res.status(201).json({
      status: "success",
      data: { newCategory },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createCategory };
