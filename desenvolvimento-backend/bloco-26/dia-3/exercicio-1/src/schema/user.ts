import Joi from "joi";

const userSchema = Joi.object({
  username: Joi.string().min(6).max(16).required().messages({
    'string.base': '400|"username" should be a string',
    'string.min': '400|"username" should be at lest 6 length',
    'string.max': '400|"username" should not be more than 16 length',
    'string.empty': '400|"username" should not be empty',
    'any.required': '400|"username" is required',
  }),
  email: Joi.string().min(6).email().max(50).required().messages({
    'string.base': '400|"email" should be a string',
    'string.min': '400|"email" should be at lest 6 length',
    'string.max': '400|"email" should not be more than 50 length',
    'string.email': '400|"email" should be a email',
    'string.empty': '400|"email" should not be empty',
    'any.required': '400|"email" is required',
  }),
  password: Joi.string().min(6).max(16).required().messages({
    'string.base': '400|"password" should be a string',
    'string.min': '400|"password" should be at lest 6 length',
    'string.max': '400|"password" should not be more than 16 length',
    'string.empty': '400|"password" should not be empty',
    'any.required': '400|"password" is required',
  }),
})

export default userSchema;
