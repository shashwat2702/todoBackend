const mysql = require('mysql');
const {
  host, user, password, database,
} = require('./dbParameters');

const createTable = () => {
  const con = mysql.createConnection({
    host,
    user,
    password,
    database,
  });
  con.connect((err) => {
    if (err) throw err;
    const createTableQuery = 'CREATE TABLE IF NOT EXISTS todo (taskId int NOT NULL AUTO_INCREMENT, task varchar(255) NOT NULL, PRIMARY KEY (taskId))';
    con.query(createTableQuery, (error, result) => {
      if (error) throw error;
      console.log('Database created', result);
    });
  });
};

module.exports = createTable;
