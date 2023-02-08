const User = require('../models/user.model');
const { encrypt } = require('../utils/encrypt');
class UserService {
  static async create(payload) {
    const passwordEncrypt = await encrypt(payload.password);

    const data = await User.create({
      fullname: payload.fullname,
      username: payload.username,
      email: payload.email,
      password: passwordEncrypt,
      biography: payload.biography,
      phone: payload.phone,
      idFollows: payload.idFollows,
      idUserSubcategory: payload.idUserSubcategory,
      idLocation: payload.idLocation,
    });
    return data;
  }

  static async getById(payload) {
    const data = await User.findOne({ where: { payload } });
    return data;
  }

  static async getAll(payload) {
    const users = await User.findAll({ where: { status: true } });
    return users;
  }
}

module.exports = UserService;
