const User = require("../models/user.model");
const UserSport = require("../models/userSport.model");
const Sport = require("../models/sport.model");
const { encrypt } = require("../utils/encrypt");
const { where, Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const { cloudinary } = require("../config/cloudinary");
const FollowService = require("./follow.service");
const avatarDefault =
  "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg";

class UserService {
  static async create(payload) {
    const passEncrypt = await encrypt(payload.password);
    const data = await User.create({
      fullname: payload.fullname,
      username: payload.username,
      email: payload.email,
      password: passEncrypt,
      biography: payload.biography,
      phone: payload.phone,
      avatar: avatarDefault,
      age: payload.age,
      gender: payload.gender.toLowerCase(),
    });
    return data;
  }

  static async getById(payload) {
    const { userId, followId } = payload;
    const isFollower = await FollowService.isFollow(payload);
    const countFollowers = await FollowService.getCountFollowers(followId);
    const countFollowing = await FollowService.getCountFollowing(followId);
    const data = await User.findOne({
      where: { id: followId },
      include: { model: Sport },
      attributes: [
        "id",
        "username",
        "biography",
        "avatar",
        "phone",
        "age",
        "gender",
      ],
    });

    return {
      ...data.toJSON(),
      isFollower,
      countFollowers,
      countFollowing,
    };
  }

  static async getAll(payload) {
    const data = await User.findAll({
      where: { isActive: true },
      include: { model: Sport },
    });
    console.log(data.length);
    return data;
  }

  static async search(payload) {
    const { userId, minAge, maxAge, sports, gender } = payload;
    //changes

    if (sports.length > 0) {
      const data = await User.findAll({
        where: {
          isActive: true,
          gender: gender || gender === "",
          age: { [Op.between]: [minAge, maxAge] },
        },
        include: { model: Sport },
      });

      let newData = [];
      data.map((user) => {
        user.sports.map((sport) => {
          const sportsFiltered = sports.some(
            (element) => element.id === sport.id
          );

          if (sportsFiltered === true) {
            if (!newData.includes(user)) {
              newData.push(user);
            }
          }
        });
      });
      return newData.filter((x) => x.id !== userId);
    } else {
      const data = await User.findAll({
        where: {
          isActive: true,
          gender: gender || gender === "",
          age: { [Op.between]: [minAge, maxAge] },
        },
        include: { model: Sport },
      });
      return data.filter((x) => x.id !== userId);
    }
  }

  static async searchById(payload) {
    const data = await User.findAll({
      where: {
        username: {
          [Op.like]: `%${payload}%`,
        },
      },
    });
    return data;
  }

  static async assignSportsInUser(payload) {
    const { sports, userId } = payload;

    await UserSport.destroy({ where: { userId: userId } });

    for (const item of sports) {
      await UserSport.create({
        userId: userId,
        sportId: item.id,
      });
    }
  }

  static async update(payload) {
    const { data, sports, userId } = payload;
    const point = { type: "Point", coordinates: [-76.984722, 39.807222] };
    const res = await User.update(
      {
        fullname: data.fullname,
        biography: data.biography,
        phone: data.phone,
        age: data.age,
        coordinates: point,
      },
      {
        where: { id: userId },
      }
    );

    await this.assignSportsInUser({ sports, userId });
    return res;
  }

  static async updateAvatar(payload) {
    const { userId, file } = payload;
    const fileObj = await cloudinary.uploader.upload(file.path);

    const secure_url = fileObj.secure_url;
    await User.update(
      {
        avatar: secure_url,
      },
      {
        where: { id: userId },
      }
    );

    return secure_url;
  }

  static async delete(payload) {
    const data = await User.destroy({
      where: { id: req.params.id },
    });
    return data;
  }
}

module.exports = UserService;
