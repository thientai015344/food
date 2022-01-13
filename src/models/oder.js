'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class oder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      oder.belongsTo(models.user,{foreignKey: "userId",});
      oder.belongsTo(models.tables,{foreignKey: "tableId",});
      oder.belongsTo(models.foods,{foreignKey: "foodId",});     
    }
  };
  oder.init({
    userId: DataTypes.INTEGER,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
    tableId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER,
    
    
  }, {
    sequelize,
    modelName: 'oder',
  });
  return oder;
};