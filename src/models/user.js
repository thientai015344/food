'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsTo(models.oder,{foreignKey: "userId",});
    }
  };
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    interfaceName:  DataTypes.STRING,
    roleId: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};