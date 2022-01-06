'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foodorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     ////fghfg
    }
  };
  foodorder.init({
    userId: DataTypes.INTEGER,
    tableId: DataTypes.INTEGER,
    ctorderId: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'foodorder',
  });
  return foodorder;
};