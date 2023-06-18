const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/submit', (req, res) => {
  // Get form data from request body
  const { fullName, email, message } = req.body;

  // Create a SQL query to insert form data into the database
  const query = `INSERT INTO forms (fullName, email, message) VALUES (?, ?, ?)`;

  // Execute the query with form data
  pool.query(query, [fullName, email, message], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error saving form data');
    } else {
      res.send('Form submitted successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
