import fastify from 'fastify'
import { memoriesRoutes } from './routes/menories'

const app = fastify()

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server runing on http://localhost:3333')
  })
