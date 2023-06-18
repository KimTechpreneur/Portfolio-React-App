-- To create the necessary database, tables, and columns in MySQL, you can follow these steps:

-- Ensure that you have MySQL server installed and running on your machine.

-- Open MySQL Workbench or any other MySQL management tool of your choice.

-- Connect to your MySQL server using your credentials.

-- Create a new database by executing the following SQL command:


CREATE DATABASE your_database_name;


-- Replace your_database_name with the desired name for your database.

-- Switch to the newly created database:

USE your_database_name;


-- Create a table named forms to store the form data:

CREATE TABLE forms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- This SQL command creates a table named forms with columns id, fullName, email, message, and created_at. The id column is the primary key, and the created_at column is set to the current timestamp when a row is inserted.

-- Your MySQL database and table are now ready to be used with the Node.js backend.
-- Make sure to update the database credentials in your Node.js index.js file to match your MySQL server configuration.