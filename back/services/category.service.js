const Category = require("../models/categories.model");

class CategoryService {
  static async create(payload) {
    const data = await Category.create({
      name: payload.name,
    });
    return data;
  }
}

module.exports = CategoryService;
