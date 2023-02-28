const User = require('../models/user.model');
const Sport = require('../models/sport.model');
const UserService = require('../services/user.service');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const FollowService = require('../services/follow.service');
const FollowerService = require('../services/follower.service');
dotenv.config();

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
      attributes: [
        'id',
        'fullname',
        'username',
        'email',
        'password',
        'avatar',
        'phone',
        'age',
        'gender',
      ],
    });

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
    delete user.password;

    user.password = undefined;
    res.send({ data: { user, token: token } });
  }

  static async register(req, res) {
    try {
      const user = await UserService.create(req.body);
      res.status(201).json({
        message: 'register successful',
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getCurrent(req, res) {
    try {
      const data = await User.findOne({
        where: { id: req.userId },
        attributes: { exclude: ['password'] },
        include: { model: Sport },
      });

      const { followers, countFollowers, countFollowing } =
        await FollowerService.getById({ userId: req.userId });

      res.status(201).json({
        data: {
          ...data.toJSON(),
          countFollowers,
          countFollowing,
          followers: followers,
        },
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
