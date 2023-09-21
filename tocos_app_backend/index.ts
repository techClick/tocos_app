
const main_express = require('express')
const cors = require('cors')
const app = main_express();
app.use(main_express.urlencoded());
app.use(main_express.json());
['users', 'transactions'].map((endPoint)=> app.use(`/`, require(`./routes/${endPoint}`)))
require('dotenv').config();
const corsOrigin ={
    origin:'http://localhost:3000', //or whatever port your 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOrigin))

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})