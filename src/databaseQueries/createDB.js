const mysql = require('promise-mysql');
const {
  host, user, password,
} = require('./dbParameters');

const createDatabase = () => mysql.createConnection({
  host,
  user,
  password,
}).then((conn) => {
  const result = conn.query('CREATE DATABASE IF NOT EXISTS todoApp');
  conn.end();
  return result;
});
module.exports = createDatabase;
