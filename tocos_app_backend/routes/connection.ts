const { Client } = require('pg')
require('dotenv').config()

const clientTmp = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: process.env.PASSWORD, // 'delabEGO234',
  database: 'tocos'
})
clientTmp.connect()

module.exports = clientTmp
