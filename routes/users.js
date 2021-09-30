const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("Test 1");
});

router.post("/", (req, res) => {
  res.send("Test 2");
});

router.get("/add", (req, res) => {
  res.send("Test 3");
});

module.exports = router;
