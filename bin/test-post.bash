#!/usr/bin/env bash

curl -H "Content-type: application/json" \
     -X "POST" \
     -d '[{"id":"4b668318-7d71-4dd5-ab1d-0e2394c9663a","accountId":"123242453","transactionDateTime":"2015-06-01T13:02:03+01:00","transactionAmount":-50,"accountBalance":950,"type":"BASC","transactionDescription":"David","category":"direct payment","unfamiliar":true},{"id":"9d0a6381-8f25-4f34-aec5-d9e4589f3c61","accountId":"123242453","transactionDateTime":"2015-06-01T12:04:43+01:00","transactionAmount":-1.5,"accountBalance":998.5,"type":"POS","transactionDescription":"Starbucks","category":"food-drink","unfamiliar":true},{"id":"74caf715-8630-42ac-8614-f6024d97f1d3","accountId":"123242453","transactionDateTime":"2015-06-02T09:03:10+01:00","transactionAmount":-850,"accountBalance":148.5,"type":"D/D","transactionDescription":"Natwest","category":"mortgage payment","unfamiliar":true},{"id":"731ab7b6-af66-4be5-9e9d-58fa26b6c682","accountId":"123242453","transactionDateTime":"2015-06-02T19:01:39+01:00","transactionAmount":-10.1,"accountBalance":138.4,"type":"POS","transactionDescription":"Charles Dickens, Southwark","category":"food-drink","unfamiliar":true},{"id":"2a106c62-d00a-4c61-93db-294d21207b4a","accountId":"123242453","transactionDateTime":"2015-06-02T19:02:23+01:00","transactionAmount":-12.55,"accountBalance":125.85,"type":"POS","transactionDescription":"Charles Dickens, Southwark","category":"food-drink","unfamiliar":false},{"id":"2e19bd9c-132c-4e7f-95ae-ea417ec58949","accountId":"123242453","transactionDateTime":"2015-06-02T20:00:49+01:00","transactionAmount":-50,"accountBalance":75.85,"type":"C/L","transactionDescription":"RBS ATM, Edinburgh Gogab","category":"cash","unfamiliar":true},{"id":"13b18e55-c315-4210-a293-9a1fef321000","accountId":"123242453","transactionDateTime":"2015-06-03T09:01:59+01:00","transactionAmount":-30,"accountBalance":45.85,"type":"S/O","transactionDescription":"Guardian/Observer","category":"newspapers","unfamiliar":true},{"id":"84e1526e-3de6-4ad5-a031-eba1e1b92689","accountId":"123242453","transactionDateTime":"2015-06-03T09:02:17+01:00","transactionAmount":-76.3,"accountBalance":-30.45,"type":"D/D","transactionDescription":"British Gas","category":"utilities","unfamiliar":true},{"id":"79e34840-f3c5-4bf9-9393-f939e72e96e1","accountId":"123242453","transactionDateTime":"2015-06-03T20:04:34+01:00","transactionAmount":-11.85,"accountBalance":-42.3,"type":"POS","transactionDescription":"Charles Dickens, Southwark","category":"food-drink","unfamiliar":false},{"id":"3945ac8c-f5f4-406f-8cb8-317f308415ca","accountId":"123242453","transactionDateTime":"2015-06-03T20:04:53+01:00","transactionAmount":-13.25,"accountBalance":-55.55,"type":"POS","transactionDescription":"Charles Dickens, Southwark","category":"food-drink","unfamiliar":false},{"id":"7815f1d6-19cd-4259-a558-36d3536ee34d","accountId":"123242453","transactionDateTime":"2015-06-03T20:05:20+01:00","transactionAmount":-11.55,"accountBalance":-67.1,"type":"POS","transactionDescription":"Charles Dickens, Southwark","category":"food-drink","unfamiliar":false},{"id":"e31a14e5-f924-421b-8b58-6c6fa5a595f0","accountId":"123242453","transactionDateTime":"2015-06-04T22:03:31+01:00","transactionAmount":-83.75,"accountBalance":-150.85,"type":"POS","transactionDescription":"H&M Oxford Street London","category":"clothing","unfamiliar":true}]' \
     'http://localhost:3000/transactions'

curl -H "Content-type: application/json" \
     -X "POST" \
     -d '[{"accountId": "57e3b951a746a0f62525f820", "transactionDateTime": "2015-03-22T20:58:26.512Z", "transactionAmount": -499.99, "accountBalance": 13186.43, "transactionType": "POS", "transactionDescription": "HARVEY NICHOLS EDINBURGH GB", "id": "57e3b9545fcd0537745f428f", "category": "clothing", "unfamiliar" : "false"}]' \
     'http://localhost:3000/transactions'
     
curl -H "Content-type: application/json" \
     -X "POST" \
     -d '[{"accountId": "57e3b951a746a0f62525f820", "transactionDateTime": "2015-04-22T20:58:26.512Z", "transactionAmount": -499.99, "accountBalance": 13186.43, "transactionType": "POS", "transactionDescription": "HARVEY NICHOLS EDINBURGH GB", "id": "57e3b9545fcd0537745f428f", "category": "clothing", "unfamiliar" : "false"}]' \
     'http://localhost:3000/transactions'
     
curl -H "Content-type: application/json" \
     -X "POST" \
     -d '[{"accountId": "57e3b951a746a0f62525f820", "transactionDateTime": "2015-03-22T20:58:26.512Z", "transactionAmount": -499.99, "accountBalance": 13186.43, "transactionType": "POS", "transactionDescription": "TEST", "id": "57e3b9545fcd0537745f428f", "category": "clothing", "unfamiliar" : "false"}]' \
     'http://localhost:3000/transactions'
     
curl -H "Content-type: application/json" \
     -X "POST" \
     -d '[{"accountId": "57e3b951a746a0f62525f820", "transactionDateTime": "2015-04-22T20:58:26.512Z", "transactionAmount": 100, "accountBalance": 13186.43, "transactionType": "POS", "transactionDescription": "TEST", "id": "57e3b9545fcd0537745f428f", "category": "clothing", "unfamiliar" : "false"}]' \
     'http://localhost:3000/transactions'
     
curl -H "Content-type: application/json" \
     -X "POST" \
     -d '[{"accountId": "57e3b951a746a0f62525f820", "transactionDateTime": "2015-04-10T20:58:26.512Z", "transactionAmount": 100, "accountBalance": 13186.43, "transactionType": "POS", "transactionDescription": "TEST", "id": "57e3b9545fcd0537745f428f", "category": "clothing", "unfamiliar" : "false"}]' \
     'http://localhost:3000/transactions'
     
curl -H "Content-type: application/json" \
     -X "POST" \
     -d '[{"accountId": "57e3b951a746a0f62525f820", "transactionDateTime": "2015-01-22T20:58:26.512Z", "transactionAmount": 100, "accountBalance": 13186.43, "transactionType": "POS", "transactionDescription": "TEST", "id": "57e3b9545fcd0537745f428f", "category": "clothing", "unfamiliar" : "false"}]' \
     'http://localhost:3000/transactions'