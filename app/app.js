"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// JS연결하기
app.use(express.static(`${__dirname}/src/public`));

// 라우터 불러오기
app.use("/", home); // use => 미들 웨어를 등록해주는 메서드

module.exports = app;
