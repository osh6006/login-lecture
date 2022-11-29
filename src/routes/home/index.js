"use strict";
const express = require("express");
const router = express.Router();

// 컨트롤러 불러오기
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);

// 외부로 내보내기
module.exports = router;
