const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sublevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sublevel.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    level_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Levels',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Sublevel',
    tableName: 'Sublevels',
  });
  return Sublevel;
};
