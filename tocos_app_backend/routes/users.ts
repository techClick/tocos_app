import { networkResponse } from './globals'
import Express from 'express'
const express = require('express')
const router = express.Router()
const client = require('./connection')

router.post('/users', async (req: Express.Request, res: Express.Response) => {
  try {
    await client.query('CREATE TABLE IF NOT EXISTS Users ( id serial PRIMARY KEY, tocos integer )')
    await client.query('INSERT INTO Users (tocos) VALUES (2500)')
    const result = await client.query('SELECT MAX(id) from Users')
    res.status(200).json((networkResponse('success', result.rows[0].max)))
  } catch (error) {
    res.status(500).json((networkResponse('error', error)))
  }
})

router.get('/users/:id', async (req: Express.Request<{ id: string }>, res: Express.Response) => {
  try {
    const allUsers = await client.query('SELECT MAX(id) from Users')
    const allUsersLength = allUsers.rows[0].max
    const queryId = req.params.id
    if (Number(queryId) > allUsersLength) {
      return res.status(400).json((networkResponse('error', allUsersLength)))
    }
    const result = await client.query(`Select tocos from Users WHERE id=${queryId}`)
    res.status(200).json((networkResponse('success', result.rows[0].tocos)))
  } catch (error) {
    res.status(500).json((networkResponse('error', error)))
  }
})

module.exports = router
