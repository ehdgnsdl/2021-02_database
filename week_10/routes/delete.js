// 각  모듈을 가져오기
import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

// 기존의 입력 값 불러오기
router.get("/", async (req, res) => {
  // delete/
  const project = await selectSql.getproject();

  res.render("delete", {
    title: "삭제 기능",
    project,
  });
});

// 삭제 버튼을 눌렀을 경우 delete query를 실행하며 /delete 페이지로 이동
router.post("/", async (req, res) => {
  // 데이터를 받음
  console.log("delete router:", req.body.delBtn);

  const data = {
    Pname: req.body.delBtn,
  };
  await deleteSql.deleteproject(data);

  // /delete 창으로 이동
  res.redirect("/delete");
});

module.exports = router;
