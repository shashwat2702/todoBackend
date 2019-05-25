const mysql = require('promise-mysql');
const {
  host, user, password, database,
} = require('./dbParameters');

const createTableQuery = 'CREATE TABLE IF NOT EXISTS todo (taskId int NOT NULL AUTO_INCREMENT, task varchar(255) NOT NULL, PRIMARY KEY (taskId))';
const createTable = () => mysql.createConnection({
  host,
  user,
  password,
  database,
}).then((conn) => {
  const result = conn.query(createTableQuery);
  conn.end();
  return result;
});

module.exports = createTable;
