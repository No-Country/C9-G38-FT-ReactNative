const User = require('../models/user.model');
const Sport = require('../models/sport.model');
const UserService = require('../services/user.service');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const FollowService = require('../services/follow.service');
dotenv.config();

const tokens = require("../config/tokens");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "900667905220-chl1s7dpt40sn74kgd6l7bgltbg17l4p.apps.googleusercontent.com"
);

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
      const followers = await FollowService.getById({ userId: req.userId });
      const countFollowers = await FollowService.getCountFollowers(req.userId);
      const countFollowing = await FollowService.getCountFollowing(req.userId);
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


  
  static async googlelogin(req, res) {
    const { credential } = req.body;

    client
      .verifyIdToken({
        idToken: credential,
        audience:
          "900667905220-chl1s7dpt40sn74kgd6l7bgltbg17l4p.apps.googleusercontent.com",
      })
      .then((userInfo) => {
        const { email, given_name, family_name } = userInfo.payload;
  
        let password = email + email;
  
        User.findOne({
          where: { email: email }
        }).then((user) => {
          if (!user) {
            return User.create({email: email, password: password, username: given_name, fullname: family_name})
              .then((user) => {
                user.validatePassword(password).then((isValid) => {
                  if (!isValid) return res.send(401);
  
                  const payload = {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    fullname: user.fullname,
                  };
                  const token = tokens.generateToken(payload);
                  res.cookie("token", token);
                  res.sendStatus(201);
                })
              });
          }
  
          user.validatePassword(password).then((isValid) => {
            if (!isValid) return res.send(401);
  
            const payload = {
              id: user.id,
              email: user.email,
              name: user.name,
              lastname: user.lastname,
            };
            const token = tokens.generateToken(payload);
            res.cookie("token", token);
            res.sendStatus(201);
          });
        });
      });
  }


}

module.exports = AuthController;
