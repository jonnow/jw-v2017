const fastify = require('fastify')({logger: true})
const PORT = 3000

fastify.register(require('./routes/items'));

fastify.register(require('@fastify/swagger'), {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
        info: {
            title: { title: 'test'}
        }
    }
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