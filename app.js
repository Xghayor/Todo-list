const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Eat Food", "Get food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();
  let options = { weekday: "long", month: "short", day: "numeric" };
  let day = today.toLocaleString("en-US", options);

  res.render("LIST", { kindOfDay: day, newItem: items });
});

app.post("/", function (req, res) {
  let item = req.body.add;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
