const express = require('express');

const port = 7865;
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const data = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.send(data);
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`)
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
