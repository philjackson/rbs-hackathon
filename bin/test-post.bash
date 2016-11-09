#!/usr/bin/env bash

curl -H "Content-type: application/json" \
     -X "POST" \
     -d '[{"accountId": "57e3b951a746a0f62525f820", "transactionDateTime": "2015-02-22T20:58:26.512Z", "transactionAmount": -499.99, "accountBalance": 13186.43, "transactionType": "POS", "transactionDescription": "HARVEY NICHOLS EDINBURGH GB", "id": "57e3b9545fcd0537745f428f", "category": "clothing", "unfamiliar" : "false"}]' \
     'http://localhost:3000/transactions'
