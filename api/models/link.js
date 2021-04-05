"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Link.belongsTo(models.User);
      Link.hasMany(models.UserLink, {
        as: "Links",
        foreignKey: "linkId",
      });
    }
  }
  Link.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      uniqueLink: DataTypes.STRING,
      viewCount: DataTypes.INTEGER,
      template: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Link",
    }
  );
  return Link;
};
