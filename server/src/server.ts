import cors from '@fastify/cors'
import 'dotenv/config'
import fastify from 'fastify'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/menories'

const app = fastify()

app.register(cors, {
  // origin: ['http://localhost: 300'. 'https://seu-provedor.com.br/']
  origin: true,
})
app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server runing on http://localhost:3333')
  })
