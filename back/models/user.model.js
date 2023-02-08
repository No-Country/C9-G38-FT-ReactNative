const { Sequelize, DataTypes, Model } = require('sequelize');
const { db } = require('../config/database.util');

// class User extends Model { //genera un hash apartir del password y el salt

//   hash(password, salt) {
//   return bcrypt.hash(password, salt)
//   }

//   validatePassword(password) {
//   return this.hash(password, this.salt)
//   .then(newHash => newHash === this.password)
//   }
// }

const User = db.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  google: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  biography: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idFollows: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  idUserSubcategory: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  idLocation: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  },
});

// User.beforeCreate((user)=> {
//   const salt = bcrypt.genSaltSync() //genero el salt
//   user.salt = salt; // asigno el salt a la instancia de User

//   return user.hash(user.password, salt).then(hash => { //espero que se genere el password hasheado para despues crear el usuario
//     user.password =  hash
//   });
// });

module.exports = User;
