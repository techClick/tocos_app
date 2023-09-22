const request = require('supertest')
const users = require('./users')
const express = require('express')
const app = express()

describe('/users apis', () => {
  let thisId: number
  it('User is added to database', async () => {
    const res = await request(app.use(users)).post('/users')
    thisId = JSON.parse(res._body).data
    expect(res.statusCode).toBe(200)
  })

  it('View user works', async () => {
    const res = await request(app.use(users)).get(`/users/${thisId}`)
    expect(res.statusCode).toBe(200)
  })

  it('User starts with 2500 tocos', async () => {
    const res = await request(app.use(users)).get(`/users/${thisId}`)
    const tocos = JSON.parse(res._body).data
    expect(tocos).toBe(2500)
  })
})
