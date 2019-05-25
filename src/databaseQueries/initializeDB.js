const createDatabase = require('../databaseQueries/createDB');
const createTable = require('../databaseQueries/createTable');

createDatabase().then(console.log);
createTable().then(console.log);
