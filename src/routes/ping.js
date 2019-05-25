const pingHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('pong');
};
module.exports = pingHandler;
