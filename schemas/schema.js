const getWork = {
    response: {
        200: {
            type: 'object',
            properties: {
                title: {type: 'string'},
                subTitle: {type: 'string'},
                blurb: {type: 'string'},
                tags: {type: 'array'},
            }
        }
    }
}

const createWork = {
    body : {
        type: 'object',
        properties: {
            title: { type: 'string' },
            subTitle: { type: 'string' },
            blurb: { type: 'string' },
        },
        required: ['title', 'blurb']
    }
}

module.exports = { getWork, createWork }