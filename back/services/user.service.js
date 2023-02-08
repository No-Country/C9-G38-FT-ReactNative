const User = require("../models/user.model");

class UserService {
  static async create(payload) {
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
    const data = await User.findOne({ where: { id: payload } });
    return data;
  }

  static async getAll(payload) {
    const data = await User.findAll({ where: { isActive: true } });
    return data;
}
}

module.exports = UserService;
