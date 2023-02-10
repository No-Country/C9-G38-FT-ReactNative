const SubcategoryService = require("../services/subcategory.service");

class SubcategoryController {
  static async create(req, res) {
    try {
      const subCategory = await SubcategoryService.create(req.body);
      res.status(201).json({
        data: subCategory,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getAll(req, res) {
    try {
      const subcategories = await SubcategoryService.getAll();
      res.status(200).json({
        data: subcategories,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async delete(req, res) {
    try {
      const { id } = req.params;
      await SubcategoryService.delete(id);
      res.status(200).json({});
    } catch (error) {
      console.log(error);
    }
  }
  static async update(req, res) {
    try {
      const subCategoryUpdated = await SubcategoryService.update([
        req.body,
        req.params,
      ]);
      res.status(200).json({
        data: subCategoryUpdated,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = SubcategoryController;
