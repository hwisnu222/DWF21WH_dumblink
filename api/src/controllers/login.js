"use strict";
const { User, Link } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const shortid = require("shortid");

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

    response.success(res, result, 200, "Successfully login user");
  } catch (error) {
    console.log(error);
    response.error(res, error, 401, "failed login user");
  }
};

exports.Register = async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    const checkEmail = await User.findOne({
      where: { email: email },
    });

    if (checkEmail) {
      return response.success(res, null, 200, "user is already");
    }

    const saltHashStrength = 10;
    const hashPassword = await bcrypt.hash(password, saltHashStrength);

    const register = await User.create({
      fullName: fullName,
      email: email,
      password: hashPassword,
    });

    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign({ id: register.id }, secretKey);

    const result = {
      user: {
        id: register.id,
        fullName: register.fullName,
        email: register.email,
        token: token,
      },
    };

    response.success(res, result, 200, "successfully registered user");
  } catch (error) {
    response.error(res, error, 401, "failed register user");
    console.log(error);
  }
};

exports.CheckToken = async (req, res) => {
  const userId = req.userId;
  try {
    const auth = await User.findOne({
      where: { id: userId },
    });

    if (!auth) return response.error(res, null, 400, "user not exist");

    const result = {
      user: auth,
    };

    response.success(res, result, 200, "Successfully auth user");
  } catch (error) {
    console.log(error);
    response.error(res, error, 401, "failed auth user");
  }
};
