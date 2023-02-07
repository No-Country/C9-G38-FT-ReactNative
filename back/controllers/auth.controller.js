const User = require('../models/user.model');
const UserService = require('../services/user.service');
class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).send({ message: 'user not found' });
    }

    if (password !== user.password) {
      //TODO! encrypt password
      return res.status(401).send({ message: 'password inc' });
    }
    res.send({ data: user, token: 'token' });
  }

  static async register(req, res) {
    try {
      //fullname, username, email, password
      await UserService.create(req.body);
      res.status(201).json({
        message: 'register successful',
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async validation() {
    console.log(req.user);
    res.send(req.user);
  }

  static async logout(req, res) {
    res.clearCookie('token');
    res.sendStatus(204);
  }
}

module.exports = AuthController;
