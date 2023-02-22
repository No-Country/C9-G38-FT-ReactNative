const Follow = require('../models/follow.model');
const User = require('../models/user.model');

class FollowService {
  static async add(payload) {
    const { userId, follow } = payload;

    const data = await Follow.create({
      userId: userId,
      followId: follow,
    });
    return data;
  }

  static async getById(payload) {
    const { userId } = payload;
    const data = await User.findByPk(userId, {
      include: {
        model: User,
        as: 'follows',
        attributes: ['id', 'fullname', 'username', 'avatar'],
      },
      attributes: ['id', 'fullname', 'username', 'avatar'],
    });
    return data.follows;
  }

  static async isFollow(payload) {
    const { userId, followId } = payload;
    const data = await User.findByPk(userId, {
      include: {
        model: User,
        as: 'follows',
      },
    });

    return data.follows.map((item) => item.id === followId).length !== 0;
  }

  static async getCountFollowers(userId) {
    const countFollow = await Follow.findAll({
      where: { userId: userId },
    });
    return countFollow.length;
  }

  static async getCountFollowing(userId) {
    const countFollow = await Follow.findAll({
      where: { followId: userId },
    });
    return countFollow.length;
  }

  static async remove(payload) {
    const { userId, followId } = payload;
    const follow = await Follow.destroy({
      where: { userId, followId },
    });
    return follow;
  }
}

module.exports = FollowService;
