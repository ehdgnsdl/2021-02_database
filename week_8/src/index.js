// 각 모듈들을 가져옴
import express from "express";
import logger from "morgan";
import path from "path";

import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 3000; // 포트번호

const app = express(); // express 기능 사용

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "../views")); // log를 자세히 보기 위해서 사용
app.set("view engine", "hbs"); // hbs 사용

app.use(logger("dev")); // logger 사용

app.use("/", homeRouter); // home화면
app.use("/update", updateRouter); // 수정
app.use("/select", selectRouter); // 조회

app.listen(PORT, () => {
  // server 실행
  console.log(`Example app listening at http://localhost:${PORT}`)
})
