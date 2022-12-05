"use strict";

// 파일 시스템이 프로미스를 반환
const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    console.log(idx);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  // 메소드로 전달
  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/database/testdb/users.json") // Promise를 반환
      .then(data => {
        return this.#getUserInfo(data, id);
      })
      .catch(error => console.log(error));
  }

  static save(userInfo) {
    // this.#userTest.push(userInfo);
    // console.log(this.#userTest);
  }
}

module.exports = UserStorage;
