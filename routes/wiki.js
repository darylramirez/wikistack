const wikiRouter = require("express").Router();
const addPage = require("../views/addPage");
const layout = require("../views/layout");

wikiRouter.get("/", (req, res) => {
  res.send(layout(""));
});

wikiRouter.post("/", (req, res) => {
  console.log(req.body)
  res.send("Test 2");
});

wikiRouter.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = wikiRouter;
