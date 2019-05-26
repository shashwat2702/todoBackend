const deleteOneTask = require('../databaseQueries/removeOneTask');

const removeTask = async (taskId, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const mysqlResponse = await deleteOneTask(taskId);
  const { affectedRows } = mysqlResponse;
  if (affectedRows === 1) {
    const responseObject = {
      deleted: true,
      taskId,
    };
    const response = JSON.stringify(responseObject);
    res.end(response);
  }
  const responseObject = {
    deleted: false,
  };
  const response = JSON.stringify(responseObject);
  res.end(response);
};
module.exports = removeTask;
