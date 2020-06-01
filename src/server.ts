import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  console.log('Hello world')
  response.json([
    'Jr',
    'Diego',
    'Bytes'
  ])
})

app.listen(3333)