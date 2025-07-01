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

Make sure the server is running on ![Screenshot (103)](https://github.com/user-attachments/assets/48978966-be71-4b83-81e1-07dfd10ec7ef)![Screenshot (107)](https://github.com/user-attachments/assets/cb3dd98d-9ae4-412c-bc13-b1efedef6ed3)
![Screenshot (106)](https://github.com/user-attachments/assets/56fbb8dd-d63b-4125-b5d3-af2d12323911)
![Screenshot (105)](https://github.com/user-attachments/assets/46473d37-f9f3-4e1f-a272-0f5d215f76b7)
://localhost:3000

