const getTasks = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('LIST OF TASKS');
};
module.exports = getTasks;
