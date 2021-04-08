const swagger = require('fastify-swagger')
const cors = require('fastify-cors')
const limit = require('fastify-rate-limit')
const helmet = require('fastify-helmet')
const cookie = require('fastify-cookie')

async function buildServer (app, _) {
  app
    .register(cookie)
    .register(limit, {
      max: 100,
      timeWindow: '1 minute'
    })
    .register(helmet)
    .register(cors, {
      methods: ['GET', 'PUT', 'POST'],
      allowedHeaders: ['Origin', 'X-PINGOTHER', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
      credentials: true,
      origin: true
    })
    .register(swagger, {
      routePrefix: '/docs',
      exposeRoute: true,
      swagger: {
        info: {
          title: 'Tiier API',
          description: 'The API used by the game Tiier',
          version: '0.1.0'
        },
        host: 'localhost',
        schemes: ['https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
          { name: 'api', description: 'API specific end points for tasks' }
        ]
      }
    })
    .ready().then(() => {
      app.swagger()
      app.log.info(`
|\`-._/\\_.-\`|
|    ||    |
|___o()o___|
|__((<>))__|
\\   o\\/o   /
 \\   ||   /
  \\  ||  /
   '.||.'
     \`\``)
    })
}

module.exports = buildServer
