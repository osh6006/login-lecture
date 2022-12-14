"use strict";
const express = require("express");
const router = express.Router();

// 컨트롤러 불러오기
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

// 외부로 내보내기
module.exports = router;
