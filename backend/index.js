const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myGameApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// More code will go here

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
