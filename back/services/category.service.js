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
  static async delete(payload) {
    const category = await Category.findOne({
      where: { id: payload },
    });
    const data = category.update({ isActive: false });
    return data;
  }
  static async update(payload) {
    const category = await Category.findOne({
      where: { id: payload[1].id },
    });
    const data = category.update({ name: payload[0].name });
    return data;
  }
}

module.exports = CategoryService;
