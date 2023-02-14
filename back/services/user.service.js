const User = require('../models/user.model');
const UserSport = require('../models/userSport.model');
const Sport = require('../models/sport.model');
const { encrypt } = require('../utils/encrypt');
const { where, Sequelize } = require('sequelize');
const Op = Sequelize.Op;

class UserService {
  static async create(payload) {
    const passwordEncrypt = await encrypt(payload.password);
    console.log(payload);
    const data = await User.create({
      fullname: payload.fullname,
      username: payload.username,
      email: payload.email,
      password: passwordEncrypt,
      biography: payload.biography,
      phone: payload.phone,
      age: payload.age,
    });
    return data;
  }

  static async getById(payload) {
    const data = await User.findOne({
      where: { id: payload },
      include: { model: Sport },
    });

    return data;
  }

  static async getAll(payload) {
    const data = await User.findAll({
      where: { isActive: true },
      include: { model: Sport },
    });
    return data;
  }

  static async search(payload) {
    const data = await User.findAll({
      where: { id: payload, isActive: true },
      include: { model: Sport },
    });
    return data;
  }

  static async searchById(payload) {
    const data = await User.findAll({
      where: {
        username: {
          [Op.like]: `%${payload}%`,
        },
      },
    });
    return data;
  }

  static async assignSportsInUser(payload) {
    const { sports, userId } = payload;

    await UserSport.destroy({ where: { userId: userId } });

    for (const item of sports) {
      await UserSport.create({
        userId: userId,
        sportId: item.id,
      });
    }
  }

  static async update(payload) {
    const { data, sports, userId } = payload;
    const point = { type: 'Point', coordinates: [-76.984722, 39.807222] };
    const res = await User.update(
      {
        fullname: data.fullname,
        biography: data.biography,
        phone: data.phone,
        coordinates: point,
      },
      {
        where: { id: userId },
      }
    );

    await this.assignSportsInUser({ sports, userId });
    return res;
  }
}

module.exports = UserService;
