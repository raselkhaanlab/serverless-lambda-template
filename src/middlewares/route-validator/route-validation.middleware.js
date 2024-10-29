const _ = require("lodash");

/**
 * Function to validate the actual data against Joi Schema
 * @param {object} values               Values which needs to be validated
 * @param {object} schema               Joi Schema
 */
const validate = (values, schema) => {
  if (_.isEmpty(schema)) {
    return values;
  }
  const { error, value } = schema.validate(values);
  if (error) {
    throw error;
  }
  return value;
};

/**
 * Middleware to validate request data
 */
const routeValidator = ({ schema }) => ({
  before: (handler, next) => {
    const request = handler.event;
    const { body, headers, queryStringParameters, pathParameters } = request;
    // validate headers
    handler.event.headers = _.merge(handler.event.headers, validate(headers, schema.headers));
    // validate query
    handler.event.queryStringParameters = _.merge(
      handler.event.queryStringParameters,
      validate(queryStringParameters, schema.query),
    );
    // validate params (path parameters)
    handler.event.pathParameters = _.merge(
      handler.event.pathParameters,
      validate(pathParameters, schema.params),
    );
    // validate body
    handler.event.body = _.merge(handler.event.body, validate(body, schema.body));
    // validate(body, schema.body);
    return next();
  },
  after: (handler, next) => next(),
});

module.exports = {
  validate,
  routeValidator,
};
