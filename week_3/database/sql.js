import mysql from "mysql2";

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root", // 蹂몄씤�쓽 mysql user id
    database: "dbdesign", // 蹂몄씤�씠 留뚮뱺 �뜲�씠�꽣踰좎씠�뒪 �씠由꾩쑝濡� �닔�젙�븯�꽭�슂
    password: "root", // 蹂몄씤�쓽 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

const promisePool = pool.promise();

const sql = {
  getUsers: async () => {
    const [rows] = await promisePool.query(`
      SELECT * FROM student
    `);

    return rows;
  },
};

module.exports = sql;
