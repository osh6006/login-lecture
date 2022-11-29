"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

// 오브젝트에서 키를 하나만 입력하면 자체적으로
// 동일한 이름의 값을 넣어준다.
module.exports = {
  home,
  login,
};
