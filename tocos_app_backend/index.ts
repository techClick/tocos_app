
const main_express = require('express')
const cors = require('cors')
const app = main_express();
['users', 'transactions'].map((endPoint)=> app.use(`/`, require(`./routes/${endPoint}`)))
require('dotenv').config()

app.use(cors())

const port = process.env.PORT || 8000

app.get('/', async (req, res) => {
  res.send('success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})