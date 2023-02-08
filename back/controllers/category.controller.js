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
}

module.exports = CategoryController;
