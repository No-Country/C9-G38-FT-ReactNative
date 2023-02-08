const Subcategory = require("../models/subcategories.model");
const Category = require("../models/categories.model");

class SubcategoryService {
  static async create(payload) {
    const data = await Subcategory.create({
      name: payload.name,
      categoryId: payload.categoryId,
    });
    return data;
  }
  static async getAll(payload) {
    const data = await Subcategory.findAll({
      where: { isActive: true },
      include: { model: Category },
    });
    return data;
  }

}

module.exports = SubcategoryService;
