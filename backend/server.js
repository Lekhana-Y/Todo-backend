const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PHW#84#jeor',
  database: 'todo'
});

db.connect((err) => {
  if (err) {
    console.log("Error in DB connection:", err);
    return;
  }
  console.log("Connected to DB successfully");
});

// Get all todo items
app.get('/items', (req, res) => {
  db.query('SELECT * FROM todoItems', (err, result) => {
    if (err) {
      console.log("Error fetching data:", err);
      return res.status(500).send("Error fetching tasks");
    }
    res.send(result);
  });
});

// Add a new item
app.post('/add-item', (req, res) => {
  const { text } = req.body;
  db.query('INSERT INTO todoItems (itemDescription, completed) VALUES (?, ?)', [text, false], (err) => {
    if (err) {
      console.log("Error inserting:", err);
      return res.status(500).send("Error inserting task");
    }
    res.send("Added");
  });
});

// Edit an item
app.put('/edit-item', (req, res) => {
  const { ID, itemDescription } = req.body;
  db.query('UPDATE todoItems SET itemDescription = ? WHERE ID = ?', [itemDescription, ID], (err) => {
    if (err) {
      console.log("Error updating:", err);
      return res.status(500).send("Error updating task");
    }
    res.send("Updated");
  });
});

// Toggle completion status
app.put('/complete-item/:id', (req, res) => {
  const id = req.params.id;
  db.query('UPDATE todoItems SET completed = NOT completed WHERE ID = ?', [id], (err) => {
    if (err) {
      console.log("Error toggling completion:", err);
      return res.status(500).send("Error updating completion status");
    }
    res.send("Toggled complete");
  });
});

// Delete an item
app.delete('/delete-item/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM todoItems WHERE ID = ?', [id], (err) => {
    if (err) {
      console.log("Error deleting:", err);
      return res.status(500).send("Error deleting task");
    }
    res.send("Deleted");
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
