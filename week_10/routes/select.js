// 각 모듈을 가져옴,
import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get("/", async function (req, res) {
  const project = await selectSql.getproject();

  res.render("select", {
    // select.hbs 파일과 연동
    title: "Project",
    project,
  });
});

module.exports = router;
