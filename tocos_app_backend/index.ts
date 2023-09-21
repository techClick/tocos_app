const mainExpress = require('express')
const cors = require('cors')
const mainApp = mainExpress()
mainApp.use(cors())
mainApp.use(mainExpress.urlencoded({ extended: true }))
mainApp.use(mainExpress.json());
['users', 'transactions'].map((endPoint) => mainApp.use('/', require(`./routes/${endPoint}`)))
require('dotenv').config()

const port = process.env.PORT || 8000

mainApp.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
