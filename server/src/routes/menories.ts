import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  // list all memories
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })
    return memories
  })

  // detail memory
  app.get('/memories/:id', async () => {})

  // create new memory
  app.post('/memories', async () => {})

  // update memory
  app.put('/memories/:id', async () => {})

  // update memory
  app.delete('/memories/:id', async () => {})
}
