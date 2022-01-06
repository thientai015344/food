'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderbill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     ////fghfg0
    }
  };
//   idbill
// idorder
// sl
// dongia
// thanhtien
  orderbill.init({
    billId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    ctorderId: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'orderbill',
  });
  return orderbill;
};