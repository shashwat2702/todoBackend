const addTask = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('TASK ADDED');
};
module.exports = addTask;
