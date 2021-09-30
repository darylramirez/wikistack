const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const layout = require('./views/layout')
const { db, User, Page } = require('./models');
// const { Sequelize } = require("sequelize/types");

const app = express();



app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get("/", async (req, res) => {
    try {
        res.send(layout(''))
    } catch (error) {
      res.status(500).send(`Something went wrong: ${error}`);
    }
  });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  const PORT = 1337;

  const init = async () => {
  try{
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`);
    })
  } catch(e) {
    console.log('error', e)
  }
}
init()



