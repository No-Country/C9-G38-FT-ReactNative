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

  static async search(req, res) {
    try {
      const { filters } = req.body;
      const users = await UserService.search(filters);
      res.status(200).json({
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async searchById(req, res) {
    try {
      const { id } = req.params;
      const users = await UserService.searchById(id);
      res.status(200).json({
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async update(req, res) {
    try {
      const data = {
        data: req.body,
        userId: req.userId,
        sports: req.body.sports,
      };

      const user = await UserService.update(data);
      res.status(200).json({
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
