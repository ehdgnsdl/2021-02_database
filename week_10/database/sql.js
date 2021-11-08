import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week10",
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
  getUsers: async () => {
    const [rows] = await promisePool.query(`select * from user`); // table employee에 있는 데이터 값 출력

    return rows;
  },
  getproject: async () => {
    const [rows] = await promisePool.query(`select * from project`); // table department에 있는 데이터 값 출력

    return rows;
  },
};

// delete query
export const deleteSql = {
  deleteproject: async (data) => {
    // 어떤 Dnumber 값이 출력되는지 확인
    console.log("deleteSql.deleteproject:", data.Pname);
    // query문
    const sql = `delete from project where Pname='car'`;

    await promisePool.query(sql);
  },
};
