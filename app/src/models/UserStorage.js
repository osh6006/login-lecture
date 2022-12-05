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

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;

    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  // 메소드로 전달
  static async getUsers(isAll, ...fields) {
    try {
      const data = await fs.readFile("./src/database/testdb/users.json"); // Promise를 반환
      return this.#getUsers(data, isAll, fields);
    } catch (error) {
      return console.log(error);
    }
  }

  static async getUserInfo(id) {
    try {
      const data = await fs.readFile("./src/database/testdb/users.json"); // Promise를 반환
      return this.#getUserInfo(data, id);
    } catch (error) {
      return console.log(error);
    }
  }

  static async save(userInfo) {
    // 데이터를 바로 덮어쓰면 파일이 초기화 되기 때문에 읽어온 다음에 추가해서 써줘야 한다.
    const users = await this.getUsers(true);
    // 만약에 받아온 데이터가 DB에 존재하면
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디 입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    // DB에 추가한다.
    fs.writeFile("./src/database/testdb/users.json", JSON.stringify(users));
    return { succes: true };
  }
}

module.exports = UserStorage;
