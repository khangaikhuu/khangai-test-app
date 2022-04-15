const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello');
});

app.listen(3002);
console.log('App is started at 3002');
