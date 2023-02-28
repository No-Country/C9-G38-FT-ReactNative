const Follower = require('../models/follower.model');
const Following = require('../models/following.model');
const User = require('../models/user.model');
class FollowerService {
  static async add(payload) {
    const { userId, followId } = payload;

    const data = await Follower.create({
      userId: userId,
      followerId: followId,
    });
    const x = await Following.create({
      userId: followId,
      followingId: userId,
    });
    return data;
  }

  static async isFollow(payload) {
    const { userId, followId } = payload;

    const followersData = await User.findByPk(userId, {
      include: {
        model: User,
        as: 'follower',
        attributes: ['id', 'fullname', 'username', 'avatar'],
      },
      attributes: ['id', 'fullname', 'username', 'avatar'],
    });
    const followingData = await User.findByPk(followId, {
      include: {
        model: User,
        as: 'following',
        attributes: ['id', 'fullname', 'username', 'avatar'],
      },
      attributes: ['id', 'fullname', 'username', 'avatar'],
    });
    const isFollower = followersData.follower.filter((item) => {
      const { isActive, isComplete, userId: id, followerId } = item.followers;
      if (isActive && isComplete && id === userId && followerId === followId) {
        return item;
      }
    });
    const isFollowing = followingData.following.filter((item) => {
      const { isActive, isComplete, userId: id, followingId } = item.followings;
      if (isActive && isComplete && id === followId && followingId === userId) {
        return item;
      }
    });

    return isFollower.length === 1 && isFollowing.length === 1;
  }

  static async getById(payload) {
    const { userId } = payload;

    const data = await User.findByPk(userId, {
      include: {
        model: User,
        as: 'follower',
        attributes: ['id', 'fullname', 'username', 'avatar'],
      },
      attributes: ['id', 'fullname', 'username', 'avatar'],
    });

    const requests = data.follower.filter((item) => {
      if (item.followers.isActive && item.followers.isComplete) {
        return item;
      }
    });
    const countFollowing = await this.getFollowingsById({ userId });

    return {
      followers: requests,
      countFollowers: requests.length,
      countFollowing,
    };
  }

  static async getFollowingsById(payload) {
    const { userId } = payload;

    const data = await User.findByPk(userId, {
      include: {
        model: User,
        as: 'following',
        attributes: ['id', 'fullname', 'username', 'avatar'],
      },
      attributes: ['id', 'fullname', 'username', 'avatar'],
    });

    const requests = data.following.filter((item) => {
      const { isActive, isComplete, userId } = item.followings;
      if (isActive && isComplete && userId === userId) {
        return item;
      }
    });
    return requests.length;
  }

  static async getRequests(payload) {
    const { userId } = payload;
    const data = await User.findByPk(userId, {
      include: {
        model: User,
        as: 'follower',
        attributes: ['id', 'fullname', 'username', 'avatar'],
      },
      attributes: ['id', 'fullname', 'username', 'avatar'],
    });
    const requests = data.follower.filter((item) => {
      if (!item.followers.isActive && !item.followers.isComplete) {
        return item;
      }
    });

    return requests;
  }

  static async getRequestById(payload) {
    const { userId } = payload;
    const data = await User.findByPk(userId, {
      include: {
        model: User,
        as: 'following',
        attributes: ['id', 'fullname', 'username', 'avatar'],
      },
      attributes: ['id', 'fullname', 'username', 'avatar', 'isActive'],
    });

    const requests = data.following.map(
      (item) => !item.followings.isActive && !item.followings.isComplete && item
    );

    return requests;
  }

  static async aprove(payload) {
    const { userId, followId } = payload;
    const res = await Follower.update(
      {
        isActive: true,
        isComplete: true,
      },
      {
        where: {
          userId: userId,
          followerId: followId,
        },
      }
    );
    await Following.update(
      {
        isActive: true,
        isComplete: true,
      },
      {
        where: {
          userId: followId,
          followingId: userId,
        },
      }
    );
    return res;
  }

  static async decline(payload) {
    const { userId, followId } = payload;
    const res = await Follower.update(
      {
        isActive: false,
        isComplete: true,
      },
      {
        where: {
          userId: userId,
          followerId: followId,
        },
      }
    );

    await Follower.update(
      {
        isActive: false,
        isComplete: true,
      },
      {
        where: {
          userId: userId,
          followingId: followId,
        },
      }
    );
    return res;
  }

  // static async isFollow(payload) {
  //   const { userId, followId } = payload;
  //   const data = await User.findByPk(userId, {
  //     include: {
  //       model: User,
  //       as: 'follows',
  //     },
  //   });

  //   return data.follows.map((item) => item.id === followId).length !== 0;
  // }

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

module.exports = FollowerService;
