const UserService = require("../services/user.service");

class UserController {
  static async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);
      return res.status(200).json({
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getAll(req, res) {
    try {
      const users = await UserService.getAll();
      res.status(200).json({
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async assignSubcategoryInUser(req, res) {
    try {
      const userInCategory = await UserService.assignSubcategoryInUser(
        req.body
      );
      res.status(201).json({
        data: userInCategory,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
