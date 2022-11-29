const fastify = require('fastify')({logger:true})

const PORT = 3000


fastify.register(require('@fastify/swagger'), {})
fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    uiHooks: {
        onRequest: function (request, reply, next) { next() },
        preHandler: function (request, reply, next) { next() }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
    transformSpecificationClone: true
})

fastify.register(require('./routes/item'))


const start = async() => {
    try {
        await fastify.listen(PORT)
        fastify.swagger()
    } catch(err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
