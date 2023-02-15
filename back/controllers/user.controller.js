const UserService = require("../services/user.service");

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

  static async deleteUser(req, res) {
    try {
      await UserService.deleteUser(id)
      res.status(200).send("User Deleted")
    } catch (error) {
      console.log(error)
    }
  }

  static async editUser(req, res) {
    try {
      await UserService.update(id)    
      res.send(payload);

    } catch (error) {
      console.log(error)
    }
  }

  static async editAvatar(req, res) {
    try {
      const { id } = req.paramas
      const user = await UserService.update(id);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  

}

module.exports = UserController;
