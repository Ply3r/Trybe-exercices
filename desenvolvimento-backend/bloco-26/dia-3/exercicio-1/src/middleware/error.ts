import { Request, Response, NextFunction } from 'express'

const err = (err: { status: string, message: string }, req: Request, res: Response, next: NextFunction) => {
  const status = +err.status || 500

  res.status(status).json({ status, message: err.message })
}

export default err;
