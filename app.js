const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  const timestamp = new Date().toLocaleString();

  console.log(`[${timestamp}] IP: ${ip}`);

  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/info', (req, res) => {
  
  const ip = req.ip || req.connection.remoteAddress;
  const timestamp = new Date().toLocaleString();

  const table = `
    <table>
      <tr>
        <th>IP Address</th>
        <th>Timestamp</th>
      </tr>
      <tr>
        <td>${ip}</td>
        <td>${timestamp}</td>
      </tr>
    </table>
  `;

  res.send(table);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
