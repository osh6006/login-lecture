"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const body = this.body;
    const { id, password } = await UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디 입니다." };
  }

  register() {
    UserStorage.save(this.body);
  }
}

module.exports = User;
