var express = require('express')
var config = require('./config/config')
var dateFormat = require('dateformat')
var app = express()

var transactions = []
var future_store = {}
var seen_payees = {}

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

function updatePayees(item) {
  item.unfamiliar = false

  // increment the seen amounts
  if (! seen_payees[item.transactionDescription]) {
    seen_payees[item.transactionDescription] = 0
    item.unfamiliar = true
  }
  seen_payees[item.transactionDescription] = seen_payees[item.transactionDescription] + 1
}

function onItem(item) {
  let date = new Date(item.transactionDateTime)
  let key = dateFormat(date, "yyyy-mm-dd")

  if (! (key in future_store)) {
    future_store[key] = []
  }

  future_store[key].push(item)

  updatePayees(item)
  transactions.push(item)
}

app.post('/transactions', function (req, res) {
  console.log("Received " + req.body.length + " transactions")
  console.log(req.query)
  req.body.map(onItem);
  res.status(200).send()
})

app.get('/transactions/past', function(req, res) {
  res.send(transactions)
})

app.get('/transactions/future', function(req, res) {
  let confidence_store_month = {}

  Object.keys(future_store).map(function(k) {
    future_store[k].map(function(v) {
      let date = new Date(item.transactionDateTime)
      let day = dateFormat(date, "dd")

      if (! (day in confidence_store_month)) {
        confidence_store_month[day] = {}
      }

      confidence_store_month[day][transactionDescription] = 0
    })
  })

  res.send({})
})

app.get('/debug', function(req, res) {
  res.send(future_store)
})

app.get('/', function (req, res) {
  res.status(200).json({hello: "world"})
})

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});