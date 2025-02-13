const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Erlaubt Anfragen von der React Native App
app.use(express.json()); // Stellt sicher, dass JSON-Body korrekt geparst wird

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
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
  console.log('Server is running on http://10.0.2.2:4000');
});

// API für Benutzer-Login
app.post('/login', (req, res) => {
  console.log('Request Body:', req.body);  // Debug-Ausgabe
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ success: false, message: 'Benutzername und Passwort erforderlich' });
    return;
  }

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Datenbankfehler', error: err });
      return;
    }
    if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.status(400).json({ success: false, message: 'Benutzername oder Passwort ungültig' });
    }
  });
});

// API für Benutzerliste (zum Testen)
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

    results.forEach((user) => {
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
