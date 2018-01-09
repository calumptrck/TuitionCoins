var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TuitionCoins', data: [], total: 0 });
});

router.post('/', function(req, res) {
  terms=["1A","1B","2A","2B","3A","3B","4A","4B","5A","5B","5C"];
  data = req.body
  console.log(terms);
  console.log(req.body);
  paidTerms = []
  for (term in terms) {
    if (terms[term]!=data.term) {
      paidTerms.push(terms[term]);
    } else {
      paidTerms.push(terms[term]);
      break;
    }
  };
  termCost = {"Math":3306,"CS":6810,"FARM":5062,"SE":7392,"AHS":3306,"Arts":3306,"AFM":3306,"GBDA":6131,"Architecture":4837,"Environment":3306,"BAMath":4521,"BACS":6810,"CPA":3306,"CFM":3306,"Science":3306};
  btcPrices = {
    0:4191.2175,
    1:775.25,
    2:577.995,
    3:224.261,
    4:415.252,
    5:513.4704,
    6:351.2694,
    7:111.795,
    7:795.3968,
    8:10.5239,
    10:13.4999
  }
  payments = [];
  counter = paidTerms.length-1;
  totalbtc = 0;
  while (counter>=0) {
    btcs = (termCost[data.program]/btcPrices[counter]).toFixed(2);
    btcusds = btcPrices[counter].toFixed(2)
    payments.push({
      term:  terms[counter],
      btcusd: btcusds,
      termCost: termCost[data.program],
      btc: btcs

    });
    counter-=1;
    totalbtc+=parseFloat(btcs);
  }
  console.log(paidTerms);
  console.log(payments);
  res.render('index', { title: 'TuitionCoins :))',
                        data: payments,
                        total: totalbtc.toFixed(2) });

});

module.exports = router;
