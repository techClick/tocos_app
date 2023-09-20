const users_express = require('express')
const router = users_express.Router()

router.get('/users', (req, res) => {
  res.send('YES')
})

module.exports = router