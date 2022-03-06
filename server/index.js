const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "otes12-exame",
});

app.use(cors());
app.use(express.json());

app.get("/getMethodID/:id", (req, res) => {
  const { id } = req.params;
  
  let SQL = "SELECT * FROM sinistros WHERE id = ?";
  db.query(SQL, [id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.get("/getMethod", (req, res) => {
  let SQL = "SELECT * FROM sinistros";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.post("/postMethod", (req, res) => {
  const { fullName } = req.body;
  const { cpf } = req.body;
  const { plate } = req.body;
  const { telephone } = req.body;
  const { email } = req.body;
  const { accident } = req.body;
  const { date } = req.body;
  const { value } = req.body;
  const { request } = req.body;

  let SQL = "INSERT INTO sinistros (fullName, cpf, plate, telephone, email, accident, date, value, request) VALUES (?,?,?,?,?,?,?,?,?)";
  db.query(SQL, [fullName, cpf, plate, telephone, email, accident, date, value, request], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.put("/putMethod", (req, res) => {
  const { fullName } = req.body;
  const { cpf } = req.body;
  const { plate } = req.body;
  const { telephone } = req.body;
  const { email } = req.body;
  const { accident } = req.body;
  const { date } = req.body;
  const { value } = req.body;
  const { request } = req.body;
  const { id } = req.body;

  let SQL = "UPDATE sinistros SET fullName = ?, cpf = ?, plate = ?, telephone = ?, email = ?, accident = ?, date = ?, value = ?, request = ? WHERE id = ?";
  db.query(SQL, [fullName, cpf, plate, telephone, email, accident, date, value, request, id],(err, result) => {
    if(err) console.log(err);
    else res.send(result);
  })
})

app.delete("/deleteMethod/:id", (req, res) => {
  const { id } = req.params;

  let SQL = "DELETE FROM sinistros WHERE id = ?";
  db.query(SQL, [id], (err, result) => {
    if(err) console.log(err);
    else res.send(result);
  })
});

app.listen(3001, () => {
  console.log("rodando servidor");
})