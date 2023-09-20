
import { db } from "@vercel/postgres";
import { networkResponse } from "./globals";
const users_express = require('express')
const router = users_express.Router()

router.post('/transactions', async (req, res) => {
  res.status(200).json((networkResponse('success', 'ready')));
})

module.exports = router