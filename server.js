require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//mongoose connections
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongoose Connected')
})

connection.on('error', (err) => {
  console.log('mongoose connection error' + err)
})


const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world')
});





const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('App is listening on: ' + PORT );
});
