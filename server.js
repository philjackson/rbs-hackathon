var express = require('express')
var app = express()

var transactions = []
var futursism = {}

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/transactions', function (req, res) {
  console.log("Received " + req.body.length + " transactions")

  req.body.map(function (item) {
    transactions.push(item)
    var date = Date.parse(item.transactionDateTime)
    console.log(date.getMonth())
  });

  res.status(200).send()
})

app.get('/transactions', function(req, res) {
  res.send(transactions)
})

app.get('/', function (req, res) {
  res.status(200).json({hello: "world"})
})

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), '0.0.0.0', function () {
  console.log('Example app listening on port:' + port + '"')
})
