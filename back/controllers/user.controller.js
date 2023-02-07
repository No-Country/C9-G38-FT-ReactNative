const UserService = require('../services/user.service');

class UserController {
  static async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      res.status(201).json({
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res) {
    const { id } = req.params;

    const user = await UserService.getById(id);

    return res.status(200).json({
      data: user,
    });
  }

  static async getAll(req, res) {
    try {
      const users = await UserService.getById(id);
      res.status(200).json({
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
