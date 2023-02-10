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
      include: { model: Category, where: { isActive: true } },
    });
    return data;
  }
  static async delete(payload) {
    const subcategory = await Subcategory.findOne({
      where: { id: payload },
    });
    const data = subcategory.update({ isActive: false });
    return data;
  }
  static async update(payload) {
    const subcategory = await Subcategory.findOne({
      where: { id: payload[1].id },
    });
    const data = subcategory.update({ name: payload[0].name });
    return data;
  }
}

module.exports = SubcategoryService;
