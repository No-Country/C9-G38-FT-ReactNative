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
  
  static async deleteUser(payload) {
    const data = await User.destroy({ 
      where: { id: req.params.id } 
    })
    return data
  }

  
  static async editUser(payload) {
    
    const data = await UserService.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    })
    return data
    const user= update[0]
    const payload = {
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      biography: user.biography,
      phone: user.phone,
      idFollows: user.idFollows,
      idUserSubcategory: user.idUserSubcategory,
      idLocation: user.idLocation,
    };
    return payload;
  }

  static async editAvatar(payload) {
    try {
      const data = await User.update({
        where: { id: payload },
        returning: true,
      });
      return data
    } catch (error) {
        console.log(error);      
    }
  }



}

module.exports = UserService;
