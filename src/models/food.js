'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     ////fghfg
    }
  };
  foods.init({
    foodname: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgfood:  DataTypes.STRING, 
  }, {
    sequelize,
    modelName: 'foods',
  });
  return foods;
};