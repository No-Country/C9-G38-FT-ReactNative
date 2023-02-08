const Subcategory = require('../models/subcategories.model');
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
    const data = await User.findOne({ where: { id: payload } });
    return data;
  }

  static async getAll(payload) {
    const data = await User.findAll({
      where: { isActive: true },
      include: { model: Subcategory },
    });
    return data;
  }
}

module.exports = UserService;
