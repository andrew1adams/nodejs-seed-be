import { app, PORT } from '~/server/app'

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
  console.log(`Swagger UI running on: http://localhost:${PORT}/api-docs`)
})
