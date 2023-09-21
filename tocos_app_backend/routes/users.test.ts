const request = require('supertest')
const users = require('./users')
const express = require('express')
const app = express()

it('User is added to database', async () => {
  const res = await request(app.use(users)).post('/users')
  // console.log(res._body)
  expect(res.statusCode).toBe(200)
})
