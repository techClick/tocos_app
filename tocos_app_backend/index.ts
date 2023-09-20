const express = require('express')
const path = require('path')
const cors = require('cors')
// const client = require('./connection')
const app = express();
['users'].map((endPoint)=> app.use(`/`, require(`./routes/${endPoint}`)))
require('dotenv').config()

app.use(cors())

const port = process.env.PORT || 8000

// client.connect();
app.get('/', (req, res) => {
  // client.query('Select * from users', (err, result) => {
  //   if (!err) {
  //     res.send(result.rows)
  //   } else {
  //     console.log('ERR', err)
  //   }
  // })
  res.send("Hello world")
})

app.listen(port, () => {
  console.log(`Example app listeningy on port ${port}`)
})