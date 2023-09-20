
import { db } from "@vercel/postgres";
import { NetworkStatus, networkResponse } from "./globals";
const users_express = require('express')
const router = users_express.Router()

router.get('/users', async (req, res) => {
  let client;
  try {
    client = await db.connect();
    // await client.sql`DROP TABLE IF EXISTS Users`
    await client.sql`CREATE TABLE IF NOT EXISTS Users ( id serial PRIMARY KEY, tocos integer )`
    await client.sql`INSERT INTO Users (tocos) VALUES (2500)`
  } catch(error) {
    return res.status(500).send((networkResponse('error', error)));
  }

  const users = await client.sql`Select * from Users`
  return res.status(200).send((networkResponse('success', users.rows.length)));
})

router.get('/users/{id}', async (req, res) => {
  let client;
  try {
    client = await db.connect();
    await client.sql`CREATE TABLE IF NOT EXISTS Users ( id serial PRIMARY KEY, tocos integer )`
    await client.sql`INSERT INTO Users (tocos) VALUES (2500)`
  } catch(error) {
    return res.status(500).send((networkResponse('error', error)));
  }

  const users = await client.sql`Select * from Users`
  return res.status(200).send((networkResponse('success', users.rows.length)));
})

module.exports = router