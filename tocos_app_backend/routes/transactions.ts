
import { db } from "@vercel/postgres";
import { networkResponse } from "./globals";
const express = require('express')
const router = express.Router()

router.post('/transactions', async (req, res) => {
  const requestBody = req.body;
  const senderId = requestBody.senderId;
  const recieverId = requestBody.recieverId;
  const tocos = Number(requestBody.tocos);
  try {
    const client = await db.connect();
    const allUsers = await client.sql`Select * from Users`;
    const allUsersLength = allUsers.rows.length;
    if (Number(senderId) > allUsersLength) {
      return res.status(400).json((networkResponse('error', 'Sender Id does not exist')));
    } 
    if (Number(recieverId) > allUsersLength) {
      return res.status(400).json((networkResponse('error', 'Reciever Id does not exist')));
    }

    const senderData = await client.sql`Select tocos from Users WHERE id=${senderId}`
    const senderTocos = Number(senderData.rows[0].tocos);
    const newSenderTocos = senderTocos - tocos;
    if (newSenderTocos < 0) {
      return res.status(400).json((networkResponse('error', 'Not enough Tocos.')));
    }
    await client.sql`UPDATE Users SET tocos = ${newSenderTocos} WHERE id=${senderId}`
  
    const recieverData = await client.sql`Select tocos from Users WHERE id=${recieverId}`
    const recieverTocos = Number(recieverData.rows[0].tocos);
    const newRecieverTocos = recieverTocos + tocos;
    await client.sql`UPDATE Users SET tocos = ${newRecieverTocos} WHERE id=${recieverId}`

    res.status(200).json((networkResponse('success', true)));
  } catch(error) {
    res.status(500).json((networkResponse('error', error)));
  }
})

module.exports = router