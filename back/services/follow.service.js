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
    return data;
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
