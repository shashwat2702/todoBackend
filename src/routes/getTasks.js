const getAllTasks = require('../databaseQueries/getAllTasks');

const getTasks = async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const tasks = await getAllTasks();
  const response = JSON.stringify(tasks);
  res.end(response);
};
module.exports = getTasks;
