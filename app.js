const express = require('express');
const recipeRoute = require('./recipes/routes');
const pool = require('./db');
const app = express();
const port = 3000;

app.use(express.json());

//Test connection of db
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database:', res.rows);
  }
});

app.use('/api/v1/recipes', recipeRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
