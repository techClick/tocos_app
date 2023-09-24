const { Client } = require('pg')
require('dotenv').config()

const clientTmp = new Client({
  host: 'tai.db.elephantsql.com',
  user: 'ppiliwco',
  port: 5432,
  password: process.env.PASSWORD, // 'delabEGO234',
  database: 'ppiliwco'
})
clientTmp.connect()

module.exports = clientTmp
