const { parse } = require('querystring');
const updateOneTask = require('../databaseQueries/updateOneTask');


const updateTask = async (req, res, taskId) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  await req.on('end', async () => {
    const receivedObject = parse(body);
    const taskToBeUpdated = Object.keys(receivedObject);
    const mysqlResponse = await updateOneTask(taskId, taskToBeUpdated[0]);
    const { affectedRows, changedRows } = mysqlResponse;
    if (affectedRows === 1 && changedRows === 1) {
      const responseObject = {
        updated: true,
        taskId,
        task: taskToBeUpdated[0],
      };
      const response = JSON.stringify(responseObject);
      res.end(response);
    }
    const responseObject = {
      updated: false,
    };
    const response = JSON.stringify(responseObject);
    res.end(response);
  });
};
module.exports = updateTask;
