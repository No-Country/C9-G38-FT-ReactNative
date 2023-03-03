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

  static async matchUsers(payload) {
    const { userId } = payload;

    const currentUserData = await User.findOne({
      where: { id: userId },
      include: { model: Sport },
      attributes: ['fullname', 'username', 'id', 'avatar'],
    });

    const data = await User.findAll({
      include: { model: Sport },
      attributes: ['fullname', 'username', 'id', 'avatar'],
    });

    const newData = [];
    data.map((user) => {
      user.sports.map((sport) => {
        const sportsFiltered = currentUserData.sports.some(
          (element) => element.id === sport.id
        );

        if (sportsFiltered === true) {
          if (!newData.includes(user)) {
            newData.push(user);
          }
        }
      });
    });

    return data.filter((x) => x.id !== userId);
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
}

module.exports = SportService;
