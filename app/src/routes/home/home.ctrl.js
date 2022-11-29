"use strict";

// 보여주기
const output = {
  home: (req, res) => {
    res.render("home/");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: "ohs6006",
  password: "1234",
};

// 프론트에서 요청
const process = {
  login: (req, res) => {
    console.log(req.body);
    const id = req.body.id,
      password = req.body.password;
    if (id === users.id && password === users.password) {
      return res.json({
        success: true,
      });
    } else {
      return res.json({
        success: false,
        msg: "로그인에 실패하셨습니다.",
      });
    }
  },
};

// 오브젝트에서 키를 하나만 입력하면 자체적으로
// 동일한 이름의 값을 넣어준다.
module.exports = {
  output,
  process,
};
