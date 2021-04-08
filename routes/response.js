const RESPONSES = {
  // 500
  500: {
    description: 'Something went wrong internal on the server',
    type: 'string',
    example: 'Something borked jim!'
  },
  // 404
  404: {
    description: 'Not Found',
    type: 'string',
    example: 'Not Found'
  },
  // 400
  400: {
    description: 'Bad Request, request failed',
    type: 'string',
    example: 'Something went wrong'
  },
  // 2xx (Default)
  '2xx': {
    description: 'A successful Request',
    type: 'object',
    properties: {
      OK: { type: 'boolean', example: true }
    }
  }
}

/**
 * @name merge
 * Takes the default responses and merges the provided ones into them, making them flexible and dynamic
 * @private
 * @param {Object} obj The responses you want merged into the default ones
 * @returns {Object} A newly merged object for responses
 */
function merge (obj) {
  return Object.assign({}, RESPONSES, obj)
}

module.exports = {
  RESPONSES,
  merge
}
