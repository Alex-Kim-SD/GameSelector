# GameSelector

Having trouble picking a game? Use this app to add to and adjust your game selection, and our app will randomly select one for you to play!

## Setup Steps:

### Backend Setup:

1. Create Dir
=> Create GameSelector Dir
=> mkdir backend
=> cd backend
=> npm install express mongoose cors bcrypt jsonwebtoken
2. Create index.js file @ /backend/index.js
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
2. Create model dir and 'user.js' and 'game.js' models
// User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
});

module.exports = mongoose.model('User', UserSchema);

// Game.js
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: String,
  // maybe add more things here?
});

module.exports = mongoose.model('Game', GameSchema);
3. Create 'routes' directory and 'userRoutes.js' and 'gameRoutes.js'
//userRoutes
const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Login and register routes
// ...

module.exports = router;
//gameRoutes
const express = require('express');
const Game = require('../models/Game');

const router = express.Router();

// CRUD routes for games
// ...

module.exports = router;
4. Set up your front end
Go back to your my-game-app directory and run:
npx create-react-app frontend
cd frontend
npm install axios
5. Create components such as Login.js, Register.js, Dashboard.js, and
6. Set up React Router, run:
npm install react-router-dom
7. Use Axios for API Calls
Use Axios to make API calls to your Express backend for user authentication and game operations.
8. Set up Statemanagement Use React's useState and useEffect hooks for state management.


## Basic template login, game addition and game add

### user login backend route

// /backend/routes/userRoutes
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('User not found');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: user._id }, 'yourSecretKey');
  res.header('auth-token', token).send(token);
});

### add game backend route

// /backend/routes/gameRoutes.js
// add game
router.post('/add', async (req, res) => {
  const game = new Game({
    title: req.body.title,
  });
  const savedGame = await game.save();
  res.send(savedGame);
});

### login.js component function

const login = () => {
  axios.post('http://localhost:5000/api/user/login', { username, password })
    .then(response => {
      localStorage.setItem('token', response.data);
      // Navigate to dashboard
    })
    .catch(error => {
      // Handle error
    });
}

### add game component function

const addGame = (title) => {
  axios.post('http://localhost:5000/api/game/add', { title })
    .then(response => {
      // Add game to state
    })
    .catch(error => {
      // Handle error
    });
}

### pick random game function

const pickRandomGame = () => {
  const randomIndex = Math.floor(Math.random() * games.length);
  const randomGame = games[randomIndex];
  // Do something with randomGame
}

