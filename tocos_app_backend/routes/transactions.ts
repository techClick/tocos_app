
import { db } from "@vercel/postgres";
import { networkResponse } from "./globals";
const express = require('express')
const router = express.Router()

router.post('/transactions', async (req, res) => {
  res.status(200).json((networkResponse('success', 'ready')));
})

module.exports = router