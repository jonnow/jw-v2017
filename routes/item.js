const { getItems, getItem, addItem } = require('../controllers/item')

const Item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        title: {type: 'string'}
    }
}

const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: getItems
}

const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: getItem
}

const addItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['title'],
            properties: {
                title: {type: 'string'},
            }
        },
        response: {
            200: Item,
            500: {
                type: 'string'
            },
        }
    },
    handler: addItem
}

function itemRoutes(fastify, options, done) {
    // Get all items
    fastify.get('/items', getItemsOpts)

    // Get single item
    fastify.get('/items/:id', getItemOpts)

    // Add item
    fastify.post('/items', addItemOpts)

    // Edit item


    // Delete item 
    
    done()
}

module.exports = itemRoutes