const express = require('express')
const path = require('path')
const cors = require('cors')
// const client = require('./connection')
const app = express();
['users'].map((endPoint)=> app.use(`/`, require(`./routes/${endPoint}`)))
require('dotenv').config()
import { db } from "@vercel/postgres";

app.use(cors())

const port = process.env.PORT || 8000

// client.connect();
app.get('/', async (req, res) => {
  const client = await db.connect();
  // try {
  //   await client.sql`CREATE TABLE IF NOT EXISTS Users ( id serial PRIMARY KEY, tocos integer )`
  //   await client.sql`INSERT INTO Users VALUES (1, 250)`
  // } catch(error) {
  //   res.send(`ERROR HERE ${error}`)
  // }
  // client.query('Select * from users', (err, result) => {
  //   if (!err) {
  //     res.send(result.rows)
  //   } else {
  //     console.log('ERR', err)
  //   }
  // })
  const users = await client.sql`Select * from Users`
  res.send(users.rows);
})

app.listen(port, () => {
  console.log(`Example app listeningy on port ${port}`)
})