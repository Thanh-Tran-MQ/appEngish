const Knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : `${process.env.user_DATABASE}`,
      password : `${process.env.password_DATABASE}`,
      database : 'apistart'
    }
});

module.exports =  { Knex }