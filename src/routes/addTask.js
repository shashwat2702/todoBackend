const { parse } = require('querystring');
const addOneTask = require('../databaseQueries/addOneTask');

const addTask = async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  await req.on('end', async () => {
    const receivedObject = parse(body);
    const taskToBeAdded = Object.keys(receivedObject);
    const mysqlResponse = await addOneTask(taskToBeAdded[0]);
    if (mysqlResponse.affectedRows === 1) {
      const responseObject = {
        inserted: true,
        taskId: mysqlResponse.insertId,
        task: taskToBeAdded[0],
      };
      const response = JSON.stringify(responseObject);
      res.end(response);
    }
    const responseObject = {
      inserted: false,
    };
    const response = JSON.stringify(responseObject);
    res.end(response);
  });
};
module.exports = addTask;
