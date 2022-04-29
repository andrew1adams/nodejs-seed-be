import express from 'express'

import swagger from 'swagger-ui-express'

import { swaggerAPI } from '~/swagger'

const app = express()
const PORT = process.env.PORT || 3334

app.use(express.json())

app.use('/api-docs', swagger.serve, swagger.setup(swaggerAPI))

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.post('/', (_req, res) => {
  res.send('Hello World!')
})

app.patch('/', (_req, res) => {
  res.send('Hello World!')
})
app.patch('/as', (_req, res) => {
  res.send('Hello World!')
})

export { app, PORT }
