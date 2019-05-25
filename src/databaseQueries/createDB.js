const mysql = require('mysql');
const {
  host, user, password,
} = require('./dbParameters');

const con = mysql.createConnection({
  host,
  user,
  password,
});
const createDatabase = () => {
  con.connect((err) => {
    if (err) throw err;
    con.query('CREATE DATABASE IF NOT EXISTS todoApp', (error, result) => {
      if (error) throw error;
      console.log('Database created', result);
    });
  });
};
module.exports = createDatabase;
