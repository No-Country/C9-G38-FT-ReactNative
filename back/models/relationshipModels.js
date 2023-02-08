const User = require("./user.model");
const Subcategory = require("./subcategories.model");
const Category = require("./categories.model");

const relationshipModels = () => {
  // 1 Category <----> M Subcategory
  Category.hasMany(Subcategory, { foreignKey: "categoryId" });
  Subcategory.belongsTo(Category);

  // M user<---userSubcategories--->M subcategoy
  User.belongsToMany(Subcategory, {
    through: "userSubcategories",
    foreignKey: "userId",
  });
  Subcategory.belongsToMany(User, {
    through: "userSubcategories",
    foreignKey: "subcategoryId",
  });
};

module.exports = relationshipModels;
