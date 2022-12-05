"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  const req = {
    id: id.value,
    password: password.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch(err => {
      console.error("로그인 중 에러 발생");
    });
}
