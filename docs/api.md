# The Future
Welcome to the future
## Past transactions
Transactions are presented as an array.

GET `/api/transactions/historical`

```
[
    {
        "accountId": "57e3b951a746a0f62525f820",
        "transactionDateTime": "2015-12-22T20:58:26.512Z",
        "transactionAmount": -499.99,
        "accountBalance": 13186.43,
        "transactionType": "POS",
        "transactionDescription": "HARVEY NICHOLS EDINBURGH GB",
        "id": "57e3b9545fcd0537745f428f",
        "category": "clothing",
        "unfamiliar" : "false"
    },
]
```

The 'unfamiliar' field describes whether we've seen that transaction before.

## Future Transactions
Upcoming transactions are presented via the future API. This is similar to the transaction api but the transaction id is synthetic and the transaction date and amount is estimated.

Gives 30 days from today's date

GET `/api/transactions/future`

```
[
   {
        "accountId": "57e3b951a746a0f62525f820",
        "transactionDateTime": "2015-12-22T00:00:00.000Z",
        "transactionAmount": -400,
        "accountBalance": 13186.43,
        "transactionType": "D/D",
        "transactionDescription": "NATWEST MORTGAGES LIMITED",
        "id": "57e3b9545fcd0537745f428f",
        "category": "mortgages",
        "confidence": 0.8
    },
]

# Notifications

When we think you need to know something important we expose this information via a notification api.

GET `/api/notifications`

```
 [
    {
        "notificationId":"asew-f232-1qad-2d23",
        "message":"Just letting you know that it looks like you might go overdrawn tomorrow",
        "detail": "We noticed that a d/d to NATWEST MORTGAGES for £951 will probably go out tomorrow and take your balance below zero",
        "severity":"medium"
    },
    {
        "notificationId":"dfs3-45ew-1qad-sew3",
        "message":"Just letting you know that it looks like you might go over your agreed overdraft tomorrow",
        "detail": "We noticed that a standing order to NATWEST MORTGAGES for £951 will probably go out tomorrow and take you over your overdraft limit",
        "severity":"high"
    },
    {
        "notificationId":"sdse-sw34-sdgk-stqe",
        "message":"You just went over your overdraft limit",
        "detail": "We've temporarily extended your overdraft to cover this amount. You need to have funds in your account by midnight tonight to avoid charges",
        "severity":"critical"

 ]
```
