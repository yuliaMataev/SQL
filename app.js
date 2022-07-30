const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const sql = require("./modules/connectToSql");
const bodyParser = require("body-parser");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

const viewsPath = path.join(__dirname, "/views");
app.set("views", viewsPath);

app.get("/form", (req, res) => {
  console.log(req.query);
  res.render("form");
});

app.post("/form", (req, res) => {
  console.log("FORM SUBMIT2", req.body);
  const name = req.body.fname;
  const email = req.body.email;
  const phone = req.body.phone;
  const lname = req.body.lname;
  let newUserId = -1;
  const sqlQuery =
    "INSERT INTO persons (Email, Phone, FirstName, LastName)VALUES (?, ?, ?, ?)";
  sql.query(
    sqlQuery,
    [email, phone, name, lname],
    function (error, results, fields) {
      if (error) console.log("USER INSERT ERROR=", error);
      console.log("USER INSERT = ", results, fields);
      newUserId = results.insertId;
      res.redirect(303, "/users?newuser=" + newUserId);
    }
  );
});

app.get("/users", (req, res) => {
  console.log("GOT PARAMS=", req.query);
  sql.query("SELECT * FROM persons", function (error, results) {
    console.log("USERS=", results);
    if (error) throw error;
    res.render("users", { users: results, newUserId: req.query.newuser });
  });
});
app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});
