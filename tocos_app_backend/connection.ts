const {Client} = require('pg');

const clientTmp = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'delabEGO234',
  database: 'tocos'
})

module.exports = clientTmp