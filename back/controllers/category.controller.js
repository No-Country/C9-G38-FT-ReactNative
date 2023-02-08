const CategoryService = require('../services/category.service');

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
  static async getAll(req, res) {
    try {
      const categories = await CategoryService.getAll();
      res.status(200).json({
        data: categories,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CategoryController;
