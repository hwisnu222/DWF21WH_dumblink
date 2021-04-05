"use strict";
const { User } = require("../../models");
const response = require("../response");

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  console.log("login");
  try {
    const login = await User.findOne({
      where: { email: email },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!login)
      return response.error(res, null, 200, "user or password not exist");

    const compareHash = await bcrypt.compare(password, login.password);

    if (!compareHash) {
      return response.error(res, null, 200, "user or password wrong");
    }

    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign({ id: login.id }, secretKey);

    const result = {
      user: login,
      token,
    };

    response.ok(res, result, 200, "Successfully login user");
  } catch (error) {
    console.log(error);
    response.error(res, error, 401, "failed login user");
  }
};

exports.Register = async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    const login = await User.findOne({
      where: { email: email },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!login)
      return response.error(res, null, 200, "user or password not exist");

    const compareHash = await bcrypt.compare(password, login.password);

    if (!compareHash) {
      return response.error(res, null, 200, "user or password wrong");
    }

    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign({ id: login.id }, secretKey);

    const result = {
      user: login,
      token,
    };

    response.ok(res, result, 200, "Successfully login user");
  } catch (error) {
    console.log(error);
    response.error(res, error, 401, "failed login user");
  }
};
