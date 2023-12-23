import fastify from 'fastify'

const server = fastify()

server.get('/', async (request, reply) => {
  return 'Hello there! 👋'
})

server.listen({
    port: 3000,
    listenTextResolver: (address) => { return 'Prometheus metrics server is listening at ${address}'}
})