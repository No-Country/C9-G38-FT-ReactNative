const SportService = require('../services/sport.service');

class SportController {
  static async create(req, res) {
    try {
      const sport = await SportService.create(req.body);
      res.status(201).json({
        data: sport,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getAll(req, res) {
    try {
      const subcategories = await SportService.getAll();
      res.status(200).json({
        data: subcategories,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async matchUsers(req, res) {
    try {
      const data = {
        userId: req.userId,
      };
      const users = await SportService.matchUsers(data);
      res.status(200).json({
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getByUserId(req, res) {
    try {
      const { id } = req.params;
      const users = await SportService.getByUserId(id);
      res.status(200).json({
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async update(req, res) {
    try {
      const sportUpdated = await SportService.update([req.body, req.params]);
      res.status(200).json({
        data: sportUpdated,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await SportService.delete(id);
      res.status(200).json({});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = SportController;
