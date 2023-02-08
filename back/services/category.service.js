const Category = require("../models/categories.model");
const Subcategory = require("../models/subcategories.model");

class CategoryService {
  static async create(payload) {
    const data = await Category.create({
      name: payload.name,
    });
    return data;
  }
  static async getAll(payload) {
    const data = await Category.findAll({
      where: { isActive: true },
    });
    return data;
  }
}

module.exports = CategoryService;
