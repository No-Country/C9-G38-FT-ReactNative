const User = require('../models/user.model');
const UserService = require('../services/user.service');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;
    console.log('debug ', email);
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).send({ message: 'user not found' });
    }

    const isEquals = bcrypt.compare(password, user.password);

    if (!isEquals) {
      return res.status(401).send({ message: 'credentials error' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, password: user.password },
      process.env.TOKEN_SECRET
    );

    res.send({ data: user, token: token });
  }

  static async register(req, res) {
    try {
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
