const mysql = require('promise-mysql');
const {
  host, user, password, database,
} = require('./dbParameters');

const deleteTaskQuery = id => `DELETE FROM todo WHERE taskId = ${id}`;
const deleteOneTask = taskId => mysql.createConnection({
  host,
  user,
  password,
  database,
}).then((conn) => {
  const result = conn.query(deleteTaskQuery(taskId));
  conn.end();
  return result;
}).then(res => res);
module.exports = deleteOneTask;
