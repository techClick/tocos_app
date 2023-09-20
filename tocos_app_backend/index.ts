const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express();
['users'].map((endPoint)=> app.use(`/`, require(`./routes/${endPoint}`)))
require('dotenv').config()

app.use(cors())

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})