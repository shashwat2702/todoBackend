const http = require('http');
const routeHandler = require('./routes/index');

const server = http.createServer((req, res) => {
  routeHandler(req, res);
});
const start = () => {
  server.listen(8080);
};
module.exports = { server, start };
