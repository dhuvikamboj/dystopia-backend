var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(`/room/${uuidv4()}`);
});

module.exports = router;
