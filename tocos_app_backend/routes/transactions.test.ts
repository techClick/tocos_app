const request = require('supertest')
const users = require('./users')
const transactions = require('./transactions')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

describe('/transactions api', () => {
  let senderId: number
  let receiverId: number
  it('Transaction works', async () => {
    const res = await request(app.use(users)).post('/users')
    senderId = JSON.parse(res._body).data
    const res2 = await request(app.use(users)).post('/users')
    receiverId = JSON.parse(res2._body).data
    const body = {
      senderId,
      receiverId,
      tocos: 2000
    }
    const res3 = await request(app.use(transactions)).post('/transactions').send(body)
    expect(res3.statusCode).toBe(200)
  }, 7000)

  it('Sender tocos decreases correctly', async () => {
    const res = await request(app.use(users)).get(`/users/${senderId}`)
    const tocos = JSON.parse(res._body).data
    expect(tocos).toBe(500)
  })

  it('Receiver tocos increases correctly', async () => {
    const res = await request(app.use(users)).get(`/users/${receiverId}`)
    const tocos = JSON.parse(res._body).data
    expect(tocos).toBe(4500)
  })

  it('Status 400 if sender does not exist', async () => {
    const body = {
      senderId: senderId + 2,
      receiverId,
      tocos: 501
    }
    const res = await request(app.use(transactions)).post('/transactions').send(body)
    expect(res.statusCode).toBe(400)
  })

  it('Status 400 if receiver does not exist', async () => {
    const body = {
      senderId,
      receiverId: receiverId + 1,
      tocos: 501
    }
    const res = await request(app.use(transactions)).post('/transactions').send(body)
    expect(res.statusCode).toBe(400)
  })

  it('Status 400 if sending too much tocos', async () => {
    const body = {
      senderId,
      receiverId,
      tocos: 501
    }
    const res = await request(app.use(transactions)).post('/transactions').send(body)
    expect(res.statusCode).toBe(400)
  })
})

// Empty export below ensures vars are local
// So we can use similar named vars across files
export {}
