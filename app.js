const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const layout = require("./views/layout");
const { db, User, Page } = require("./models");
// const { Sequelize } = require("sequelize/types");
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log("connected to the database");
});
app.use("/wiki", require("./routes/wiki"));
app.use("/users", require("./routes/users"));

app.get("/", async (req, res) => {
  res.redirect("/wiki");
});

const PORT = 1337;

const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`);
    });
  } catch (e) {
    console.log("error", e);
  }
};
init();
