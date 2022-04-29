import swaggerAutoGen from 'swagger-autogen'

import { PORT } from '~/server/app'

const docs = {
  info: {
    title: 'API',
    version: '1.0.0',
    description: 'API Documentation'
  },
  host: `http://localhost:${PORT}`
}

const outputFile = 'src/swagger/swagger.json'
const endpointsRoutes = ['src/server/app.ts']

swaggerAutoGen({ openapi: '3.0.0' })(outputFile, endpointsRoutes, docs)
