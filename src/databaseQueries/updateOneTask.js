const mysql = require('promise-mysql');
const {
  host, user, password, database,
} = require('./dbParameters');

const updateTaskQuery = (id, todoTask) => `UPDATE todo SET task = "${todoTask}" WHERE taskId = ${id}`;
const updateOneTask = (taskId, updatedTask) => mysql.createConnection({
  host,
  user,
  password,
  database,
}).then((conn) => {
  const result = conn.query(updateTaskQuery(taskId, updatedTask));
  conn.end();
  return result;
}).then(res => res);

module.exports = updateOneTask;
