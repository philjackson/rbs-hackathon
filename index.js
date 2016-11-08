var express = require('express')
var dateFormat = require('dateformat')
var app = express()

var transactions = []
var future_store = {}

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/transactions', function (req, res) {
  console.log("Received " + req.body.length + " transactions")

  req.body.map(function (item) {
    transactions.push(item)

    let date = new Date(item.transactionDateTime)
    let key = dateFormat(date, "yyyy-mm-dd")

    if (! (key in future_store)) {
      future_store[key] = []
    }

    future_store[key].push(item)
    console.log(future_store)
  });

  res.status(200).send()
})

app.get('/transactions', function(req, res) {
  res.send(transactions)
})

app.get('/', function (req, res) {
  res.status(200).json({hello: "world"})
})

app.listen(3000, '0.0.0.0', function () {
  console.log('Example app listening on port 3000!')
})
