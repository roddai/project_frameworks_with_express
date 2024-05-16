let knex = require("knex")({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '87654321',
    database: 'project_manager_tech'
  }
});

module.exports = knex;