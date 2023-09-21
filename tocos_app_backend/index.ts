const mainExpress = require('express')
const cors = require('cors')
const app = mainExpress()
app.use(cors())
app.use(mainExpress.urlencoded())
app.use(mainExpress.json());
['users', 'transactions'].map((endPoint) => app.use('/', require(`./routes/${endPoint}`)))
require('dotenv').config()

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
