
import { db } from "@vercel/postgres";
import { networkResponse } from "./globals";
const users_express = require('express')
const router = users_express.Router()

router.post('/users', async (req, res) => {
  try {
    const client = await db.connect();
    // await client.sql`DROP TABLE IF EXISTS Users`
    await client.sql`CREATE TABLE IF NOT EXISTS Users ( id serial PRIMARY KEY, tocos integer )`
    await client.sql`INSERT INTO Users (tocos) VALUES (2500)`
    const users = await client.sql`Select * from Users`
    res.status(200).json((networkResponse('success', users.rows.length)));
  } catch(error) {
    res.status(500).json((networkResponse('error', error)));
  }
})

router.get('/users/:id', async (req, res) => {
  try {
    const client = await db.connect();
    const allUsers = await client.sql`Select * from Users`;
    const allUsersLength = allUsers.rows.length;
    const queryId = req.params.id;
    if (Number(queryId) > allUsersLength) {
      return res.status(400).json((networkResponse('error', allUsersLength)));
    }
    const users = await client.sql`Select tocos from Users WHERE id=${queryId}`
    res.status(200).json((networkResponse('success', users.rows[0].tocos)));
  } catch(error) {
    res.status(500).json((networkResponse('error', error)));
  }
})

module.exports = router