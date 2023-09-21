import { db } from '@vercel/postgres'
import { networkResponse } from './globals'
import Express from 'express'
const express = require('express')
const router = express.Router()
interface TypedRequestBody<T> extends Express.Request {
  body: T
}

router.post('/transactions', async (req: TypedRequestBody<{
  senderId: number
  receiverId: number
  tocos: number
}>, res: Express.Response) => {
  const requestBody = req.body
  const senderId = requestBody.senderId
  const receiverId = requestBody.receiverId
  const tocos = requestBody.tocos
  try {
    const client = await db.connect()
    const allUsers = await client.sql`SELECT MAX(id) from Users`
    const allUsersLength = allUsers.rows[0].max
    if (senderId > allUsersLength) {
      return res.status(400).json((networkResponse('error', 'Sender Id does not exist')))
    }
    if (receiverId > allUsersLength) {
      return res.status(400).json((networkResponse('error', 'Receiver Id does not exist')))
    }

    const senderData = await client.sql`Select tocos from Users WHERE id=${senderId}`
    const senderTocos = Number(senderData.rows[0].tocos)
    const newSenderTocos = senderTocos - tocos
    if (newSenderTocos < 0) {
      return res.status(400).json((networkResponse('error', 'Sender does not have enough Tocos')))
    }
    await client.sql`UPDATE Users SET tocos = ${newSenderTocos} WHERE id=${senderId}`

    const receiverData = await client.sql`Select tocos from Users WHERE id=${receiverId}`
    const receiverTocos = Number(receiverData.rows[0].tocos)
    const newreceiverTocos = receiverTocos + tocos
    await client.sql`UPDATE Users SET tocos = ${newreceiverTocos} WHERE id=${receiverId}`

    res.status(200).json((networkResponse('success', true)))
  } catch (error) {
    res.status(500).json((networkResponse('error', error)))
  }
})

module.exports = router
