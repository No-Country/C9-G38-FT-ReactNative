const Category = require('../models/categories.model');

class CategoryController {
  static async create(req, res) {
    try {
      const { name } = req.body;
      const category = await Category.create({ name });
      res.status(201).json({
        data: category,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CategoryController;
