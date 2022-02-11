const connection = require('./connection');

const add = async (name, brand) => {
  const query = `INSERT INTO products (name, brand) VALUES (?, ?);`
  const result = await connection.query(query,[name, brand])
    .then(([result]) => ({ id: result.insertId, name, brand }))
    .catch((err) => ({ error: { message: err.message, status: err.status } }))

  return result
};

const getAll = async () => {
  const rows = await connection.query('SELECT * FROM products')
    .then(([result]) => result)
    .catch((err) => ({ error: { message: err.message, status: err.status } }))
    
  return rows;
};

const getById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?'
  const result = await connection.query(query, [id])
    .then(([result]) => result)
    .catch((err) => ({ error: { message: err.message, status: err.status } }));
 
  return result;
};

const update = async (id, name, brand) => {
  const query = 'UPDATE products SET name = ?, brand = ? WHERE id = ?'
  const result = await connection.query(query, [name, brand, id])
    .then(([result]) => ({ id: result.insertId, name, brand }))
    .catch((err) => ({ error: { message: err.message, status: err.status } }));
  
  return result
};

const exclude = async (id) => {
  const product = await getById(id);
  if (!product.length) return { error: { message: 'NotFound', status: 404 } };

  const query = 'DELETE FROM products WHERE id = ?'
  const result = await connection.query(query, [id])
    .then(([result]) => ({ id: result.insertId, name: product.name, brand: product.brand }))
    .catch((err) => ({ error: { message: err.message, status: err.status } }));
  
  return result
};

module.exports = { add, getAll, getById, update, exclude };