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
 
const start = async() => {
    try {
        await fastify.listen(PORT)
        fastify.swagger()
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()
