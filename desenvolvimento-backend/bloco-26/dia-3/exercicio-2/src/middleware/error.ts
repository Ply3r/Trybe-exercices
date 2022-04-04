import { Request, Response, NextFunction } from "express";

type Error = {
  message: string
}

const error = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const [status, message] = err.message.split('|');

  console.log(err.message)
  return res.status(+status || 500).json({ message: message || 'Erro no sistema' })
}

export default error
