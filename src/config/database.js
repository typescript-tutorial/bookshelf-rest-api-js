const knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'localhost',
    user     : 'postgres',
    password : '123',
    database : 'masterdata',
    port: 5432,
    charset  : 'utf8'
  }
});
module.exports.knex = knex;