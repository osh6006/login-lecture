"use strict";

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(e) {
  const req = {
    id: id.value,
    password: password.value,
  };
  console.log(req);

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "appliction/json",
    },
    body: JSON.stringify(req),
  });
}
