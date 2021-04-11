"use strict";
const { User } = require("../../models");

const response = require("../response");

exports.getUser = async (req, res) => {
  const userId = req.userId;

  try {
    const profile = await User.findOne({
      where: { id: userId },
      attributes: ["fullName", "email"],
    });
    if (!profile) {
      return response.error(res, null, 400, "user not exist");
    }
    const result = {
      user: profile,
    };

    response.success(res, result, 200, "Successfully get user");
  } catch (error) {
    console.log(error);
    response.error(res, error, 401, "failed get user");
  }
};

exports.UpdateUser = async (req, res) => {
  const { fullName, email } = req.body;
  const userId = req.userId;

  try {
    const updateUser = await User.update(
      { fullName, email },
      { where: { id: userId } }
    );
    const result = {
      user: updateUser,
    };

    response.success(res, result, 200, "Successfully update user");
  } catch (error) {
    console.log(error);
    response.error(res, error, 401, "failed update user");
  }
};

exports.DeleteUser = async (req, res) => {
  const userId = req.userId;

  try {
    const deleteUser = await User.destroy({ where: { id: userId } });

    const result = {
      user: deleteUser,
    };

    response.success(res, result, 200, "Successfully update user");
  } catch (error) {
    console.log(error);
    response.error(res, error, 401, "failed update user");
  }
};
