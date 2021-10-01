const sql = require('./connectMysql')

async function creatuser(firstName,lastName,email){
    await sql.Knex('user').insert({FirstName: `${firstName}`,LastName: `${lastName}`,Email: `${email}`})

}

module.exports = { creatuser }
