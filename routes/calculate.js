var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/new', function(req, res) {
  res.render('index', { title: 'TuitionCoins' });
});
module.exports = router;
