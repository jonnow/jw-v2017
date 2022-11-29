<<<<<<< HEAD
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


=======
const fastify = require('fastify')({logger: true})
const path = require('path')
const PORT = 3000

fastify.register(require('./routes/items'));

// Used to render files in the public folder - CSS etc
fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/'
})

fastify.register(require('@fastify/swagger'), {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
        info: {
            title: { title: 'test'}
        }
    }
})

fastify.register(require("@fastify/view"), {
    engine: {
        nunjucks: require('nunjucks')
    },
    viewExt: 'njk'
})

// fastify.register(require('@fastify/swagger'), {
//     // swagger: {
//     //     info: {
//     //         title: 'Swagger',
//     //         version: '0.1.0'
//     //     },
//     //     host: 'localhost:3000',
//     //     schemes: ['http'],
//     //     path: '/docs',
//     //     exposeRoute: true

//     // }
//     exposeRoute: true,
//     routePrefix: '/docs',
//     swagger: {
//         info: { title: 'fastify-api' },
//     },
// })

fastify.get('/wittr', (req,reply) => {
    reply.view('views/wittr/feed.njk', { title: "My Wittr Feed" })
})
 
>>>>>>> a32c5bf44882e47861ef30b5d1a39e9d4f2f09e9
const start = async() => {
    try {
        await fastify.listen(PORT)
        fastify.swagger()
<<<<<<< HEAD
    } catch(err) {
        fastify.log.error(err)
=======
    } catch (error) {
        fastify.log.error(error)
>>>>>>> a32c5bf44882e47861ef30b5d1a39e9d4f2f09e9
        process.exit(1)
    }
}

<<<<<<< HEAD
start()
=======
start()
>>>>>>> a32c5bf44882e47861ef30b5d1a39e9d4f2f09e9
