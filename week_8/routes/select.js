// �� ����� ������,
import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get("/", async function (req, res) {
  // select/ȸ��1 �̷���. 
  const employee = await selectSql.getEmployee();
  const department = await selectSql.getDepartment();

  res.render("select", {
    // select.hbs ���ϰ� ����
    title: "���� ���̺�", // employee
    title2: "�μ� ���̺�", // department
    employee,
    department,
  });
});

module.exports = router;
