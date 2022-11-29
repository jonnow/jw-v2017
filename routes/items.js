const {getItems, getItem} = require('../controllers/item')

const itemSchema =  {
    type: 'object',
    properties: {
        id: {type: 'integer'},
        title: {type: 'string'},
        subTitle: {type: 'string'},
        tags: {type: 'array'}
    }
}

/* 
    A schema can customise what is sent back. A good feature of Fastify
    In this case ID and title only. 
    Though it still uses properties that it may not specify. 
      E.g. looking up via sub-title would still be possible. 
    
    You can create schemas for every response code.
    You can change the type e.g. id: string to integer
*/
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: itemSchema
            }
        }
    },
    handler: getItems
}

const getItemOpts = {
    schema: {
        response: {
            200: itemSchema
        }
    },
    handler: getItem
}

/*
    Makes use of the schema getItemsOpts.
    To do so, pass the schema into the second arg for the get.
*/
function itemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOpts)

    fastify.get('/items/:id', getItemOpts)
    // this is all set in the item handler above
    // , (req, reply) => {
    //     // Uses destructuring to pull out the ID
    //     const { id } = req.params 
    //     /*
    //         Destructuring is a fancy term. 
    //         Basically it means assiging an object value to the variable with the same name. 
    //         In this case, ID 
    //         It works with arrays too, though it will just assign based on the order given.
    //         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    //     */

    //     const item = items.find(item => item.id == id)
    //     reply.send(item)
    // }
    //)


    done()
}

module.exports = itemRoutes