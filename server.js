const http = require('http');
const { Client } = require('pg');

const PORT = process.env.PORT || 5000;
const { DATABASE_URL } = process.env;
const server = http.createServer((req, res) => {
  const client = new Client({
    connectionString: DATABASE_URL,
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  client.connect()
    .then(() => client.query('SELECT * FROM hellotable'))
    .then((result) => {
      res.end(`${result.rows[0].name}\n`);
      client.end();
    })
    .catch(() => {
      res.end('ERROR');
      client.end();
    });
});
server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server running on ${PORT}`);
});

/* const express = require('express');
// const path = require('path');

const server = express();
// server.use(express.static(__dirname + "/public"));
// server.use(bodyParser.json());

const port = process.env.PORT || 5000;
server.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server listening on port ${port}`)
}); */
