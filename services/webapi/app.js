const express = require('express');
const app = express();

let requests = 0;

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/metrics', (req, res) => {
  requests++;
  res.set('Content-Type', 'text/plain');
  res.send(`
# HELP http_requests_total Total requests
# TYPE http_requests_total counter
http_requests_total ${requests}
`);
});

app.listen(3000, () => {
  console.log('WebAPI running on port 3000');
});