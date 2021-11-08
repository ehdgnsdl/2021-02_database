// 각 모듈을 가져옴,
import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get("/", async function (req, res) {
  // select/회원1 이런식. 
  const employee = await selectSql.getEmployee();
  const department = await selectSql.getDepartment();

  res.render("select", {
    // select.hbs 파일과 연동
    title: "직원 테이블", // employee
    title2: "부서 테이블", // department
    employee,
    department,
  });
});

module.exports = router;
