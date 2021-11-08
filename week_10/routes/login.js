// 각 모듈을 가져옴
import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("login"); // login.hbs를 가져옴
});

router.post("/", async (req, res) => {
  // 값을 넘김(req에 저장)
  const vars = req.body;
  // getUsers의 정보를 users에 저장
  const users = await selectSql.getUsers();
  // 유저인지 구분하기 위한 변수 whoAmI
  let whoAmI = "";
  let checkLogin = false;

  // 내가 입력한 값을 비교
  // map함수는 콜백함수를 받아서 기능을 함.(for문이랑 비슷. 대신 더 간편하다)
  users.map((user) => {
    console.log(user.id);
    // mysql의 database가 field가 대문자라서 user.Id와 user.Password로 비교
    if (vars.id === user.Id && vars.password === user.Password) {
      console.log("login success!");
      checkLogin = true;
      // vars.id가 admin이면 admin.
      if (vars.id === "admin") {
        whoAmI = "admin";
      } else {
        // vars.id가 admin이 아니라면 user.
        whoAmI = "user";
      }
    }
  });

  if (checkLogin && whoAmI === "admin") {
    // admin이라면 /delete로 접속
    res.redirect("/delete");
  } else if (checkLogin && whoAmI === "user") {
    // user이라면 /select로 접속
    res.redirect("/select");
  } else {
    // 다른 경우라면 실패
    console.log("login falied!");
    res.send(
      "<script>alert('로그인에 실패했습니다.'); location.href ='/'; </script>"
    );
  }
});

module.exports = router;
