'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     ////fghfg
    }
  };
  bill.init({

//     idNV
// areaId
// id Ban
// date
// total
    userId: DataTypes.INTEGER,
    areaId: DataTypes.INTEGER,
    tableId: DataTypes.INTEGER,
    total: DataTypes.STRING,

   
  }, {
    sequelize,
    modelName: 'bill',
  });
  return bill;
};