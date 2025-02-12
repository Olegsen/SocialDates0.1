const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Erlaubt Anfragen von deiner React Native App

const db = mysql.createConnection({
  host: 'localhost',      // Beispiel: 'localhost'
  user: 'root',      // Beispiel: 'root'
  password: 'root', // Datenbank-Passwort
  database: 'sozidatesdb',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
  });

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      let html = `
        <table border="1" style="width: 100%; border-collapse: collapse;">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
      `;

      results.forEach(user => {
        html += `
          <tr>
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
          </tr>
        `;
      });

      html += '</table>';
      res.send(html);
    });
  });

