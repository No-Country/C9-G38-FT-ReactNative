const Sport = require('../models/sport.model');
const User = require('../models/user.model');
const Category = require('../models/sport.model');

class SportService {
  static async create(payload) {
    const data = await Sport.create({
      name: payload.name,
    });
    return data;
  }

  static async getAll(payload) {
    const data = await Sport.findAll({
      where: { isActive: true },
    });
    return data;
  }

  static async getByUserId(payload) {
    const data = await Sport.findAll({
      where: { id: payload },
      include: { model: User },
    });
    return data;
  }

  static async delete(payload) {
    const sport = await Sport.findOne({
      where: { id: payload },
    });
    const data = sport.update({ isActive: false });
    return data;
  }

  static async update(payload) {
    const sport = await Sport.findOne({
      where: { id: payload[1].id },
    });
    const data = sport.update({ name: payload[0].name });
    return data;
  }

  static async getUsersWithSameSports(payload) {
    const { userId } = payload;

    const currentUser = await User.findOne({
      where: { id: userId },
      include: { model: Sport },
    });

    const data = await User.findAll({
      limit: 9,
      attributes: [
        'id',
        'username',
        'biography',
        'avatar',
        'phone',
        'age',
        'gender',
      ],
      include: { model: Sport },
    });

    const excludeUser = data.filter((x) => x.id !== currentUser.id);
    const newData = [];

    excludeUser.map((user) => {
      user.sports.map((sport) => {
        const sportsFiltered = currentUser.sports.some(
          (element) => element.id === sport.id
        );

        if (sportsFiltered === true) {
          if (!newData.includes(user)) {
            newData.push(user);
          }
        }
      });
    });
    return newData;
  }
}

module.exports = SportService;
