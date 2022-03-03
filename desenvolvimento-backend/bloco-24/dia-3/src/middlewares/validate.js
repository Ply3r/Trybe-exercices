const ValidationError = require('../service/ValidationError.js')

const validate = (schema) => (req, _res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    throw new ValidationError({ code, message })
  }

  next()
}

module.exports = validate;
