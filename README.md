## To-Do List Web Application ##
A fully functional To-Do List app with backend , database integration using Node.js and MySQL, and a modern, responsive frontend with HTML, CSS, and JavaScript. Includes Dark Mode, task editing, deletion, and completion highlighting.

-> Features
. Add new tasks
. Edit tasks
. Delete tasks
. Mark tasks as completed (highlighted with background + strikethrough)
. Dark mode toggle
.Data stored in MySQL database

-> Technologies Used
Frontend: HTML, CSS, Bootstrap, JavaScript (Vanilla)
Backend: Node.js (Express)
Database: MySQL
Styling: Responsive design, dark/light themes

-> Project Structure
todo-app/
│
├── server.js          # Node.js backend
├── todo.html          # Frontend UI
├── todo.css           # Custom styles
├── package.json       # Node.js dependencies
└── README.md

-> Setup Instructions

1.  Install Dependencies
 npm install express cors mysql2
2.  Create MySQL Database

CREATE DATABASE todo;
USE todo;

CREATE TABLE todoItems (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  itemDescription TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);
3. Configure Database
Edit the server.js file and update your MySQL credentials:

const db = mysql.createConnection({
  host: 'localhost',
  user: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD',
  database: 'todo'
});
4. Run Backend Server
 node server.js
5.  Open Frontend
Open todo.html in your browser.

Make sure the server is running on http://localhost:3000

