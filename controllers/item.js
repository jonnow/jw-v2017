const { randomUUID } = require('crypto')
const items = require('../work.json')

const getItems = (req, reply) => {
    reply.send(items)
}

const getItem = (req, reply) => {
    const {id} = req.params
    const item = items.find(item => item.id == id)
    reply.send(item)
}

const addItem = (req, reply) => {
    // Check if ID exists
    const {title} = req.body
    const item = items.find(item => item.title == title)
    
    // If not, create a new one
    if(!item) {
        items.push({
            "id": randomUUID(),
            "title": title
        })

        // TO DO: Update the JSON file with the new item

        reply.code(201).send({
            "Success": "Item added!"
        })
    }
    else {
        // Else return error message
        reply.code(501).send({"Error": "Item ID already exists"})
    }
}

module.exports = { getItems, getItem, addItem }