"use strict";

// 모듈
const express = require("express");
const app = express();

// 환경변수 관리
const dotenv = require("dotenv");
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// JS연결하기
app.use(express.static(`${__dirname}/src/public`));

// 바디 파서 사용하기
// url을 통해 전달되는 데이터에 한글, 공백, 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우터 불러오기
app.use("/", home); // use => 미들 웨어를 등록해주는 메서드

module.exports = app;
