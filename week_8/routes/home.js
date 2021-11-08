// �� ����� ������
import express from "express";
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home'); // home.hbs�� ������
});

router.post('/', (req, res) => {
  // ���� �ѱ�(req�� ����)
  const vars = req.body;
  const var_lenth = Object.keys(req.body).length;

  if (var_lenth > 4) {
    //Employee ������
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
    insertSql.setEmployee(data); // //�����͸� �Ѱ���(DB�� ����)
  } else {
    const data = {
      // Department ������
      Dname: vars.dname,
      Dnumber: vars.dnumber,
      Mgr_ssn: vars.mgr_ssn,
      Mgr_start_date: vars.mgr_start_date,
    };
    insertSql.setDepartment(data); // �����͸� �Ѱ���(DB�� ����)
  }
  res.redirect('/'); // homeȭ������ �̵�(���ΰ�ħ)
})

module.exports = router;
