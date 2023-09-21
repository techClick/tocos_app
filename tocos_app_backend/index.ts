
const main_express = require('express')
const cors = require('cors')
const app = main_express();
app.use(cors())
app.use(main_express.urlencoded());
app.use(main_express.json());
['users', 'transactions'].map((endPoint)=> app.use(`/`, require(`./routes/${endPoint}`)))
require('dotenv').config();

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})