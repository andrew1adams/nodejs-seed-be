import express from 'express'

import swagger from 'swagger-ui-express'

import { swaggerAPI } from '~/swagger'

const app = express()
const PORT = process.env.PORT || 3334

app.use(express.json())

app.use('/api-docs', swagger.serve, swagger.setup(swaggerAPI))

app.get('/', (_req, res) => {
  res.status(200).send({ message: 'Hello World!' })
})

export { app, PORT }
