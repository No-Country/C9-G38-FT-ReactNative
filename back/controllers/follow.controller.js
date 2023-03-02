const FollowerService = require('../services/follower.service');

class FollowController {
  static async add(req, res) {
    try {
      const data = {
        userId: req.userId,
        followId: req.body.follow,
      };

      const follow = await FollowerService.add(data);

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
        userId: req.userId,
      };
      const users = await FollowerService.getById(data);
      res.status(200).json({
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getRequestById(req, res) {
    try {
      const data = {
        userId: req.params.id,
      };
      const users = await FollowerService.getRequestById(data);
      res.status(200).json({
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async getRequests(req, res) {
    try {
      const data = {
        userId: req.userId,
      };
      const users = await FollowerService.getRequests(data);
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

  static async aprove(req, res) {
    try {
      const data = {
        userId: req.userId,
        followId: req.params.id,
      };
      await FollowerService.aprove(data);
      res.status(200).json({});
    } catch (error) {
      console.log(error);
    }
  }

  static async decline(req, res) {
    try {
      const data = {
        userId: req.userId,
        followId: req.params.id,
      };
      await FollowerService.decline(data);
      res.status(200).json({});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = FollowController;
