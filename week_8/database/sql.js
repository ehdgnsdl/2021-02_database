import mysql from "mysql2";

// �����ͺ��̽� ����
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week8",
    password: "root", // DB ��й�ȣ
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

// async / await ���
const promisePool = pool.promise();

// select query
export const selectSql = {
  getEmployee: async () => {
    const [rows] = await promisePool.query(`select * from employee`); // table employee�� �ִ� ������ �� ���
    console.log(rows);
    return rows;
  },
  getDepartment: async () => {
    const [rows] = await promisePool.query(`select * from department`); // table department�� �ִ� ������ �� ���

    return rows;
  },
};

// insert quert
export const insertSql = {
  // data��� ��ü Ÿ���� �Ķ���Ϳ� �Է��� ������ �޾Ƽ� query�� ����
  setEmployee: async (data) => {
    // employee�� ������ �� insert
    const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;

    await promisePool.query(sql);
  },
  setDepartment: async (data) => {
    //department�� ������ �� insert
    const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;

    await promisePool.query(sql);
  },
};

// update query
export const updateSql = {
  // extern�� �ۿ��� ������ �����̴�.
  updateEmployee: async (data) => {
    //employee�� salary�� update(����)
    // where ������ �����ϴ� �࿡ ���ؼ� salary ����
    const sql = `update employee set Salary = "${data.Salary}" where Dno = 1`;
    await promisePool.query(sql);
  },
  updateDepartment: async (data) => {
    //department�� salary�� update(����)
    const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`;
    await promisePool.query(sql);
  },
};
