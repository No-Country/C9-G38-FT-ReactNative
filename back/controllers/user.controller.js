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

  static async updateAvatar(req, res) {
    try {
      const data = {
        file: req.file,
        userId: req.userId,
      };
      const url = await UserService.updateAvatar(data);

      return res.status(200).json({
        url,
      });
    } catch (e) {}
  }

  static async getById(req, res) {
    try {
      const data = {
        userId: req.userId,
        followId: req.params.id,
      };

      const user = await UserService.getById(data);
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
      const { minAge, maxAge, ratio, coordinates } = req.body;
      const data = {
        minAge,
        maxAge,
        ratio,
        ratio,
        sports: req.body.sports,
        userId: req.userId,
      };

      const users = await UserService.search(data);
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

  static async delete(req, res) {
    try {
      await UserService.delete(id);
      res.status(200).send('User Deleted');
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
