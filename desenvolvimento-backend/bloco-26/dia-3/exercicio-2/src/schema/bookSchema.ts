import Joi from 'joi';

const bookSchema = Joi.object({
  title: Joi.string().min(4).max(50).required().messages({
    'string.base': '400|"title" deveria ser uma string',
    'string.min': '400|"title" deve ter no minimo 4 caracteres',
    'string.max': '400|"title" deve ter no maximo 50 caracteres',
    'string.empty': '400|"title" não pode ser vazio',
    'any.required': '400|"title" é obrigatorio'
  }),
  author: Joi.string().min(4).max(20).required().messages({
    'string.base': '400|"author" deveria ser uma string',
    'string.min': '400|"author" deve ter no minimo 4 caracteres',
    'string.max': '400|"author" deve ter no maximo 20 caracteres',
    'string.empty': '400|"author" não pode ser vazio',
    'any.required': '400|"author" é obrigatorio'
  }),
  price: Joi.number().positive().required().messages({
    'number.base': '400|"price" deveria ser um number',
    'number.positive': '400|"price" deve ser um numero positivo',
    'any.required': '400|"price" é obrigatorio'
  }),
  isbn: Joi.string().min(4).max(50).required().messages({
    'string.base': '400|"isbn" deveria ser uma string',
    'string.min': '400|"isbn" deve ter no minimo 4 caracteres',
    'string.max': '400|"isbn" deve ter no maximo 50 caracteres',
    'string.empty': '400|"isbn" não pode ser vazio',
    'any.required': '400|"isbn" é obrigatorio'
  }),
})

export default bookSchema;