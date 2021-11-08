// �� ������ ������
import express from "express";
import logger from "morgan";
import path from "path";

import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 3000; // ��Ʈ��ȣ

const app = express(); // express ��� ���

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "../views")); // log�� �ڼ��� ���� ���ؼ� ���
app.set("view engine", "hbs"); // hbs ���

app.use(logger("dev")); // logger ���

app.use("/", homeRouter); // homeȭ��
app.use("/update", updateRouter); // ����
app.use("/select", selectRouter); // ��ȸ

app.listen(PORT, () => {
  // server ����
  console.log(`Example app listening at http://localhost:${PORT}`)
})
