const work = require('./../work.json')
const schemas = require('../schemas/schema')
const { kCanSetNotFoundHandler } = require('fastify/lib/symbols')

module.exports = function workRoutes(fastify, options, done) {

    // get all items
    fastify.get('/work', async (request, reply) => {
        var jsonString = JSON.stringify(work)
        var jsonContent = JSON.parse(jsonString)
        var data = {}

        data.work = work
        data.pageHeading = "Work"

        reply.view('/templates/work.ejs', data)
        //return data
    })

    // get single items
    fastify.get('/work/:urlTitle', { schema: schemas.getWork }, async (request, reply) => {
        // e.g. request.params.urlTitle = "alien-isolation"
        // Get the single post
        let error = {}
        try {
            let data = work.filter(items => items.urlName === request.params.urlTitle)       
            if(data.length == 0) {
                error.code = 404 // Post not found
                throw error
            }
            // Set the single post from an array of one object, to just an object
            let postData = Object.assign(data[0]);
            //return postData
            reply.view('/templates/workItem.ejs',  postData)
            
        } catch (error) {
            // if(error.code == 404) {
            //     reply.callNotFound()
            // }
            // else {
            //     log.error(error)
            // }
            // console.error(error)
            // reply.callNotFound(error)

            return fastify.notFound(request, reply)
        }

    })

    fastify.get('/work/new-post', async(request, reply) => {
        reply.view('/templates/newPost.ejs')
    })

    fastify.post('/work/new-post', async(request, reply) => {
        debugger
        console.log('hello post')
    })

    // fastify.post('/work/new-post', { schema: schemas.createWork, attachValidation: true }, async(request, reply) => {
    //     debugger
    //     if(request.validationError) {
    //         reply.code(422).send(request.validationError)
    //     }

    //     let obj = request.body
        
    //     return {
    //         obj
    //     }
    // })

    done()
}