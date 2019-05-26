const mysql = require('promise-mysql');
const {
  host, user, password, database,
} = require('./dbParameters');

const insertTaskQuery = todoTask => `INSERT INTO todo (task) VALUES ("${todoTask}")`;
const addOneTask = taskToBeAdded => mysql.createConnection({
  host,
  user,
  password,
  database,
}).then((conn) => {
  const result = conn.query(insertTaskQuery(taskToBeAdded));
  conn.end();
  return result;
}).then(res => res);

module.exports = addOneTask;
