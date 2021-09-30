const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser')

const app = express();



app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));




app.get("/", async (req, res) => {
    try {
        res.send('hello world')
    } catch (error) {
      res.status(500).send(`Something went wrong: ${error}`);
    }
  });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});