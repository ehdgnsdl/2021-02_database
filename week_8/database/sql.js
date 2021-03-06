import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week8",
    password: "root", // DB 비밀번호
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

// async / await 사용
const promisePool = pool.promise();

// select query
export const selectSql = {
  getEmployee: async () => {
    const [rows] = await promisePool.query(`select * from employee`); // table employee에 있는 데이터 값 출력
    console.log(rows);
    return rows;
  },
  getDepartment: async () => {
    const [rows] = await promisePool.query(`select * from department`); // table department에 있는 데이터 값 출력

    return rows;
  },
};

// insert quert
export const insertSql = {
  // data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
  setEmployee: async (data) => {
    // employee에 데이터 값 insert
    const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;

    await promisePool.query(sql);
  },
  setDepartment: async (data) => {
    //department에 데이터 값 insert
    const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;

    await promisePool.query(sql);
  },
};

// update query
export const updateSql = {
  // extern은 밖에서 가져온 변수이다.
  updateEmployee: async (data) => {
    //employee의 salary를 update(수정)
    // where 조건을 만족하는 행에 대해서 salary 수정
    const sql = `update employee set Salary = "${data.Salary}" where Dno = 1`;
    await promisePool.query(sql);
  },
  updateDepartment: async (data) => {
    //department의 salary를 update(수정)
    const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`;
    await promisePool.query(sql);
  },
};
