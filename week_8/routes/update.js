// ��  ����� ��������
import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

// ������ �Է� �� �ҷ�����
router.get("/employee", async (req, res) => { //update/employee
  const emp_res = await selectSql.getEmployee();
  res.render("updateEmployee", {
    title: "���� ���̺� ����",
    emp_res,
  });
});

// ������ �Է� �� �ҷ�����
router.get("/department", async (req, res) => {
  // update/department
  const dept_res = await selectSql.getDepartment();
  res.render("updateDepartment", {
    title: "�μ� ���̺� ����",
    dept_res,
  });
});

// ���� ��ư�� ������ ��� update query�� �����ϸ� ��ȸ �������� �̵�
router.post("/employee", async (req, res) => { // �����͸� ����
  const vars = req.body;
  console.log(vars.salary);

  const data = {
    Salary: vars.salary,
  };

  await updateSql.updateEmployee(data);

  res.redirect("/select");
});

// ���� ��ư�� ������ ��� update query�� �����ϸ� ��ȸ �������� �̵�
router.post("/department", async (req, res) => {
  // �����͸� ����
  const vars = req.body;
  console.log(vars.dname);

  const data = {
    Dname: vars.dname,
  };
  await updateSql.updateDepartment(data);

  res.redirect("/select"); //���ΰ�ħ  localhost:3000/select�� �̵�
});

module.exports = router;
