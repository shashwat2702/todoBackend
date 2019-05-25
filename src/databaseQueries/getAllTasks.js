const mysql = require('promise-mysql');
const {
  host, user, password, database,
} = require('./dbParameters');

const selectTasksQuery = 'SELECT * FROM todo';
const getAllTasks = () => mysql.createConnection({
  host,
  user,
  password,
  database,
}).then((conn) => {
  const result = conn.query(selectTasksQuery);
  conn.end();
  return result;
}).then(res => res);

module.exports = getAllTasks;
