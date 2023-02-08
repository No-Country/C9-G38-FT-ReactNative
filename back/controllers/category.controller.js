const CategoryService = require("../services/category.service");

class CategoryController {
  static async create(req, res) {
    try {
      const category = await CategoryService.create(req.body);
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
