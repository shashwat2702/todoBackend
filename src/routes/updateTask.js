const updateTask = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('TASK UPDATED');
};
module.exports = updateTask;
