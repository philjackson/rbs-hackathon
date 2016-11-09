var express = require('express')
var config = require('./config/config')
var dateFormat = require('dateformat')
var app = express()

var futureMonths = 3
var transactions = []
var future_transactions = []
var future_store = {}
var seen_payees = {}
var monthly_transactions = {}
var confidence_store_month = {}
var runs
var transactionInfo

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

function calculateFutureStore(){
  
  confidence_store_month={}
   
  Object.keys(future_store).map(function(k) {
    future_store[k].map(function(v) {
      let date = new Date(v.transactionDateTime)
      let year = dateFormat(date, "yyyy")
      let month = dateFormat(date, "mm")
      let day = dateFormat(date, "dd")
      let monthCounter = ((year - 1900) * 12) + month - 1

      if (! (monthCounter in confidence_store_month)) {
        confidence_store_month[monthCounter] = {}
      }
      
      if (! (v.transactionDescription in confidence_store_month[monthCounter])) {
        confidence_store_month[monthCounter][v.transactionDescription] = {}
      }
      
      confidence_store_month[monthCounter][v.transactionDescription] = {
        accountId : v.accountId,
        day : day,
        transactionAmount : v.transactionAmount,
        transactionType : v.transactionType,
        transactionDescription : v.transactionDescription,
        category : v.category
      }
    })
  })

  processMonthStore(confidence_store_month);
}

function processMonthStore(store){

    if(Object.keys(store).length == 0)
        return
        
    var sorted_months = Object.keys(store).sort().reverse();
    let firstKey = sorted_months.shift()
    runs = {}
    transactionInfo = {}
    
    let seed = Object.keys(store[firstKey])
    seed.forEach(function(des){
        runs[des] = 1;
        transactionInfo[des] = store[firstKey][des]
    })
    
    sorted_months.forEach(function(month){
        last = seed
        Object.keys(store[month]).forEach(function(description){
            if(last.indexOf(description)> -1){
                runs[description] = runs[description] + 1
            }
        })
        last = Object.keys(store[month])
    })
    
    /*future_transactions={}
    Object.keys(runs).forEach(function(description){
        for(var month=firstKey+1; month < firstKey + futureMonths ; month++)
        future_transactions.push(transactionInfo[des]
    }*/
}

app.post('/transactions', function (req, res) {
  console.log("Received " + req.body.length + " transactions")
  console.log(req.query)
  req.body.map(onItem);
  calculateFutureStore()
  res.status(200).send()
})

app.get('/transactions/past', function(req, res) {
  res.send(transactions)
})

app.get('/transactions/future', function(req, res) {
  res.send(futureTransactions)
})

app.get('/debug', function(req, res) {
  res.send(transactionInfo)
})

app.get('/', function (req, res) {
  res.status(200).json({hello: "world"})
})

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});