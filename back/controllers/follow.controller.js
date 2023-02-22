const FollowService = require('../services/follow.service');

class FollowController {
  static async add(req, res) {
    try {
      const data = {
        userId: req.userId,
        follow: req.body.follow,
      };

      const follow = await FollowService.add(data);

      res.status(201).json({
        data: follow,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const data = {
        userId: req.params.id,
      };
      const users = await FollowService.getById(data);
      res.status(200).json({
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async remove(req, res) {
    try {
      const data = {
        userId: req.userId,
        followId: req.params.id,
      };
      await FollowService.remove(data);
      res.status(200).json({});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = FollowController;
