"use strict";

const db = require("../config/db");

class UserStorage {
  // 메소드로 전달

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        // 실패하면 reject 성공하면 resolve
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, userInfo.password], err => {
        // 실패하면 reject 성공하면 resolve
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;
