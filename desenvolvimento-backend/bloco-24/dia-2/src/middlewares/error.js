const error = (err, _req, res, _next) => {
  return res.status(500).json({ error: { code: 500, message: err.message } })
}

module.exports = error;