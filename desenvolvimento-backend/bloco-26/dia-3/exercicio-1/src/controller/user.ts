import { Request, Response, NextFunction } from 'express';
import userService from '../service/user';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.create(req.body);

    return res.status(201).json(result)
  } catch (err) {
    next(err)
  }
}

const findAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.findAll();

    return res.status(200).json(result)
  } catch (err) {
    next(err)
  }
}

const findOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await userService.findOne(+id);

    return res.status(200).json(result)
  } catch (err) {
    next(err)
  }
}

export default { create, findAll, findOne };
