const CategoryService = require("../services/category.service");

class CategoryController {
  static async create(req, res) {
    try {
      const { name } = req.body;
      const category = await CategoryService.create({ name });
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
  static async delete(req, res) {
    try {
      const { id } = req.params;
      await CategoryService.delete(id);
      res.status(200).json({});
    } catch (error) {
      console.log(error);
    }
  }
  static async update(req, res) {
    try {
      const CategoryUpdated = await CategoryService.update([
        req.body,
        req.params,
      ]);
      res.status(200).json({
        data: CategoryUpdated,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CategoryController;
