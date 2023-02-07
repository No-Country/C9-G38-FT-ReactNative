const User = require('../models/user.model');

class UserService {
  static async create(payload) {
    //implement encrypt
    const data = await User.create({
      fullname: payload.fullname,
      username: payload.username,
      email: payload.email,
      password: payload.password,
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
