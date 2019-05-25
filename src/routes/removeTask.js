const removeTask = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('TASK REMOVED');
};
module.exports = removeTask;
