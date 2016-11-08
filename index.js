var express = require('express')
var dateFormat = require('dateformat')
var app = express()

var transactions = []
var future_store = {}
var seen_payees = {}

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/transactions', function (req, res) {
  console.log("Received " + req.body.length + " transactions")

  req.body.map(function (item) {
    let date = new Date(item.transactionDateTime)
    let key = dateFormat(date, "yyyy-mm-dd")

    if (! (key in future_store)) {
      future_store[key] = []
    }

    future_store[key].push(item)

    item.unfamiliar = false

    // increment the seen amounts
    if (! seen_payees[item.transactionDescription]) {
      seen_payees[item.transactionDescription] = 0
      item.unfamiliar = true
    }
    seen_payees[item.transactionDescription] = seen_payees[item.transactionDescription] + 1

    transactions.push(item)
  });

  res.status(200).send()
})

app.get('/transactions/historical', function(req, res) {
  res.send(transactions)
})

app.get('/debug', function(req, res) {
  res.send(seen_payees)
})

app.get('/', function (req, res) {
  res.status(200).json({hello: "world"})
})

app.listen(3000, '0.0.0.0', function () {
  console.log('Example app listening on port 3000!')
})
