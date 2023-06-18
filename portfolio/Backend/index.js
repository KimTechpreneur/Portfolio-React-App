const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for the form data
const formSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  message: String,
});

// Create a model based on the schema
const Form = mongoose.model('Form', formSchema);

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

  // Create a new form document
  const newForm = new Form({
    fullName,
    email,
    message,
  });

  // Save the form data to the database
  newForm.save((err) => {
    if (err) {
      console.error(err);
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
