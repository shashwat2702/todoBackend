const url = require('url');
const pingHandler = require('./ping');
const getTasks = require('./getTasks');
const addTask = require('./addTask');
const updateTask = require('./updateTask');
const removeTask = require('./removeTask');

const routeHandler = (req, res) => {
  const path = url.parse(req.url, true).pathname;
  const requestMethod = req.method;
  if (requestMethod === 'GET') {
    switch (path) {
      case '/ping':
        pingHandler(req, res);
        break;
      case '/tasks':
        getTasks(req, res);
        break;
      default:
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('Incorrect URL');
    }
  } else if (requestMethod === 'POST') {
    switch (path) {
      case '/addTask':
        addTask(req, res);
        break;
      default:
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('Incorrect URL');
    }
  } else if (requestMethod === 'PUT') {
    const parsedPath = path.split('/');
    switch (parsedPath[1]) {
      case 'updateTask':
        updateTask(req, res, parsedPath[2]);
        break;
      default:
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('Incorrect URL');
    }
  } else if (requestMethod === 'DELETE') {
    const parsedPath = path.split('/');
    switch (parsedPath[1]) {
      case 'removeTask':
        removeTask(parsedPath[2], res);
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
