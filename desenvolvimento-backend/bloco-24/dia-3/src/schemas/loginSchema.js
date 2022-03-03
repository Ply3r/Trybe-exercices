const Joi = require('joi')

const loginSchema = Joi.object({
  username: Joi
    .string()
    .pattern(/^[\w]{4,16}$/)
    .required()
    .messages({
      'any.required': '400|"username" is required',
      'string.base': '400|"username" must be a string',
      'string.empty': '400|"username" can not be empty',
      'string.pattern.base': '422|"username" has to be an string between 4 and 16 length'
    }),
  password: Joi
    .string()
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/)
    .required()
    .messages({
      'any.required': '400|"password" is required',
      'string.base': '400|"password" must be a string',
      'string.empty': '400|"password" can not be empty',
      'string.pattern.base': '422|Invalid password format'
    }),
})

module.exports = loginSchema;