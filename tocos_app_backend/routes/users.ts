
import { db } from "@vercel/postgres";
import { NetworkStatus, networkResponse } from "./globals";
const users_express = require('express')
const router = users_express.Router()

router.get('/users', async (req, res) => {
  let client;
  let status: NetworkStatus = 200;
  client = await db.connect();
  try {
    // await client.sql`DROP TABLE IF EXISTS Users`
    await client.sql`CREATE TABLE IF NOT EXISTS Users ( id serial PRIMARY KEY, tocos integer )`
    await client.sql`INSERT INTO Users (tocos) VALUES (2500)`
  } catch(error) {
    status = 500;
    res.status(status).send((networkResponse('error', error)));
  }

  if (status === 200) {
    const users = await client.sql`Select * from Users`
    res.status(status).send((networkResponse('success', users.rows.length)));
  }
})

module.exports = router