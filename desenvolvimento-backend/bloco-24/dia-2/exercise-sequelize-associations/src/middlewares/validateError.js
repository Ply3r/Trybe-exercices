class ValidateError extends Error {
  constructor(params) {
    super(params.message)
    this.status = params.message
  }
}

module.exports = ValidateError
