const router = require("express").Router();
const connection = require("../db/connection");

router.get("/api/tables", function (req, res) {
  connection.query("SELECT * FROM tables WHERE isWaiting = FALSE", function (err, dbTables) {
    res.json(dbTables);
  });
});

router.post("/api/tables", function(req, res) {
  connection.query("SELECT COUNT(IF(isWaiting = FALSE, 1, NULL)) 'count' FROM tables", function(err, dbSeated) {
    if (err) throw err;
    if (dbSeated[0].count > 4) {
      req.body.isWaiting = true;
    }

    connection.query("INSERT INTO tables set ?", req.body, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
});

router.get("/api/waitlist", function(req, res) {connection.query("SELECT * FROM tables WHERE isWaiting = TRUE", function(err, dbTables) {
  res.json(dbTables);
});
})

router.delete("/api/tables", function (req, res) {
  connection.query("DELETE FROM tables",
  function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;