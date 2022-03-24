import Joi, { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";

const validateSchema = (schema: ObjectSchema) => (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body)

  if (error) {
    const [status, message] = error.message.split('|');

    throw { status, message }
  }

  next()
}

export default validateSchema