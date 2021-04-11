"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserLink.belongsTo(models.Link);
    }
  }
  UserLink.init(
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING,
      image: DataTypes.STRING,
      linkId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserLink",
    }
  );
  return UserLink;
};
