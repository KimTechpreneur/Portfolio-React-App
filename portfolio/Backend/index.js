const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

// Connect to MySQL
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle form submission
app.post('/submit', (req, res) => {
  const { fullName, email, message } = req.body;

  const query = 'INSERT INTO forms (fullName, email, message) VALUES (?, ?, ?)';
  const values = [fullName, email, message];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error inserting form data:', error);
      res.status(500).json({ error: 'An error occurred while submitting the form.' });
    } else {
      console.log('Form data inserted successfully!');
      res.status(200).json({ message: 'Form submitted successfully!' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
