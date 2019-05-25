const url = require('url');
const pingHandler = require('./ping');

const routeHandler = (req, res) => {
  const path = url.parse(req.url, true).pathname;
  const requestMethod = req.method;
  if (requestMethod === 'GET') {
    switch (path) {
      case '/ping':
        pingHandler(req, res);
        break;
      default:
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('Incorrect URL');
    }
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('Incorrect Request Method');
  }
};
module.exports = routeHandler;
