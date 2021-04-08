const { RESPONSES, merge } = require('./response')

module.exports = async function (app, _) {
  app
    .get('/', {
      schema: {
        description: 'A simple home route',
        tags: ['api'],
        summary: 'Home route',
        response: RESPONSES,
        headers: {}
      },
      handler (req, reply) {
        reply.send({ OK: true })
      }
    })
    .get('/info/:id', {
      schema: {
        description: 'Gets the specified players character information',
        tags: ['api'],
        summary: 'Get character information',
        response: merge({
          '2xx': {
            description: 'A successful request',
            type: 'object',
            properties: {
              id: { type: 'string', example: '123U-YB56-UU78' },
              name: { type: 'string', example: 'Georgie' },
              OK: { type: 'boolean', example: true }
            }
          }
        })
      },
      handler (req, reply) {
        reply.send({ OK: true })
      }
    })
}
