// 각 모듈을 가져옴
import express from "express";
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home'); // home.hbs를 가져옴
});

router.post('/', (req, res) => {
  // 값을 넘김(req에 저장)
  const vars = req.body;
  const var_lenth = Object.keys(req.body).length;

  if (var_lenth > 4) {
    //Employee 데이터
    const data = {
      Fname: vars.fname,
      Minit: vars.minit,
      Lname: vars.lname,
      Ssn: vars.ssn,
      Bdate: vars.bdate,
      Address: vars.address,
      Sex: vars.sex,
      Salary: vars.salary,
      Super_ssn: vars.super_ssn,
      Dno: vars.dno,
    };
    insertSql.setEmployee(data); // //데이터를 넘겨줌(DB에 저장)
  } else {
    const data = {
      // Department 데이터
      Dname: vars.dname,
      Dnumber: vars.dnumber,
      Mgr_ssn: vars.mgr_ssn,
      Mgr_start_date: vars.mgr_start_date,
    };
    insertSql.setDepartment(data); // 데이터를 넘겨줌(DB에 저장)
  }
  res.redirect('/'); // home화면으로 이동(새로고침)
})

module.exports = router;
