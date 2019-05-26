const http = require('http');
const routeHandler = require('./routes/index');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  routeHandler(req, res);
});
const start = () => {
  server.listen(8080);
};
module.exports = { server, start };
