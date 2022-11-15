
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const { doesNotMatch } = require('assert')
const fs = require('fs')
const path = require('path')

fastify.register(require('./routes/work'))

fastify.register(require("point-of-view"), {
  engine: {
    ejs: require('ejs')
  }
})

fastify.decorate('notFound', (request, reply) => {
  reply.code(404).type('text/html').view('/pages/404.ejs', {message:'Not Found'})
})

fastify.setNotFoundHandler(fastify.notFound)

// fastify.setNotFoundHandler((request, reply) => {
//   let message = "404, page not found."
//   //reply.view('/pages/404.ejs', { message }, { layout: '/layout/main.ejs' })
//   console.log('404 reached')
//   reply.send({message})
// })

fastify.setErrorHandler(function (error, request, reply) {
  // Log error
  this.log.error(error)
  // Send error response
  reply.status(409).send({ ok: false }) // Will send this down if there is an error
})

// Declare a route
fastify.get('/', async (request, reply) => {
  reply.view('/templates/index.ejs', { pageHeading: "hello world from the back-end" })
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()