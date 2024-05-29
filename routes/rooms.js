var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:roomId', function(req, res, next) {
  res.render('room',{roomId:req.params.roomId});
});

module.exports = router;
