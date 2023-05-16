import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server runing on http://localhost:3333')
  })
