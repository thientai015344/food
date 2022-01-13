'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tables.belongsTo(models.areas,{foreignKey: "tableId",});
    }
  };
  tables.init({
    areaId: DataTypes.INTEGER,
    numbertable: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'tables',
  });
  return tables;
};