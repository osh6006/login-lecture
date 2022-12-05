"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

// 보여주기
const output = {
  home: (req, res) => {
    res.render("home/");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

// 프론트에서 요청
const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);

    // const id = req.body.id,
    //   password = req.body.password;

    // const users = UserStorage.getUsers("id", "password");
    // const response = {};
    // if (id === users.id && password === users.password) {
    //   response.success = true;
    //   return res.json(response);
    // } else {
    //   response.success = false;
    //   response.msg = "로그인에 실패하셨습니다.";
    //   return res.json(response);
    // }
  },
};

// 오브젝트에서 키를 하나만 입력하면 자체적으로
// 동일한 이름의 값을 넣어준다.
module.exports = {
  output,
  process,
};
