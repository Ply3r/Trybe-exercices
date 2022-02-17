const { Book } = require('../models');

const verifyIfExists = async (filter) => {
  const exists = await Book.findOne({ where: filter })
  if (exists) return { book: exists, message: 'OK' }

  return { message: 'notFound' }
}

module.exports = { verifyIfExists };
