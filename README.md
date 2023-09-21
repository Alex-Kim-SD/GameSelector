# GameSelector: Your Ultimate Game Picker

Can't decide on a game to play? Our GameSelector app helps you manage your game list and picks a random game for you!

## Prerequisites

Before you start, ensure you have Node.js and npm installed. Then, perform the necessary npm installations:

### Backend Dependencies
```bash
npm install express mongoose cors bcrypt jsonwebtoken
```

### Frontend Dependencies
```bash
npm install axios react-router-dom
```

## Quick Setup Guide

### 1. Initialize Backend

- Create the GameSelector directory and navigate into it.
- Initialize your backend.

```bash
mkdir GameSelector
cd GameSelector
mkdir backend
cd backend
npm install express mongoose cors bcrypt jsonwebtoken
```

### 2. Set Up the Backend Server

Create an `index.js` file at `/backend/index.js`.

```javascript
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

// Additional code will go here

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
```

### 3. Create Models

Inside the `/backend/models` directory, create `User.js` and `Game.js`.

#### User.js
```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
});

module.exports = mongoose.model('User', UserSchema);
```

#### Game.js
```javascript
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('Game', GameSchema);
```

### 4. Create Routes

Inside `/backend/routes`, create `userRoutes.js` and `gameRoutes.js`.

#### userRoutes.js
```javascript
const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Login and registration logic here

module.exports = router;
```

#### gameRoutes.js
```javascript
const express = require('express');
const Game = require('../models/Game');

const router = express.Router();

// CRUD operations for games

module.exports = router;
```

### 5. Initialize Frontend

Navigate back to the `GameSelector` directory and set up the frontend.

```bash
npx create-react-app frontend
cd frontend
npm install axios
```

### 6. Create Frontend Components

Create essential components like `Login.js`, `Register.js`, `Dashboard.js`, etc.

### 7. Set Up React Router

Run the following command to set up React Router:
```bash
npm install react-router-dom
```

### 8. API Calls with Axios

Utilize Axios to make API calls to your backend for user authentication and game-related operations.

### 9. State Management

For state management, make use of React's `useState` and `useEffect` hooks.

---

## Code Samples

### User Login (Backend Route)

```javascript
// /backend/routes/userRoutes.js
router.post('/login', async (req, res) => {
  // Authentication logic
});
```

### Add Game (Backend Route)

```javascript
// /backend/routes/gameRoutes.js
router.post('/add', async (req, res) => {
  // Game addition logic
});
```

### User Login (Frontend Component)

```javascript
const login = () => {
  // Axios POST to login
};
```

### Add Game (Frontend Component)

```javascript
const addGame = (title) => {
  // Axios POST to add game
};
```

### Pick a Random Game

```javascript
const pickRandomGame = () => {
  // Random game picker logic
};
```

Happy Coding!
