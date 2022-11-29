"use strict";

class UserStorage {
  // 데이터 은닉화 후
  static #users = {
    id: "ohs6006",
    password: "1234",
    name: "키키키",
  };
  // 메소드로 전달
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
