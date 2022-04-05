import { Schema } from "joi";
import { Request, Response, NextFunction } from "express";

const validate = (schema: Schema) => (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);

  if (error) {
    throw new Error(error.message)
  }

  next();
}

export default validate;
