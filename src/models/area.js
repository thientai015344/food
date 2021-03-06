'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class areas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      areas.belongsTo(models.tables,{foreignKey: "tableId",});
    }
  };
  areas.init({
   
    areaname: DataTypes.STRING,
    typeerea: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'areas',
  });
  return areas;
};