import { Request, Response, NextFunction } from "express";
import BookService from "../service/BookService";

const Book = new BookService();

const findAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (err) {
    next(err)
  }
}

const findOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const books = await Book.findOne(+id);

    return res.status(200).json(books);
  } catch (err) {
    next(err)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, price, author, isbn } = req.body;
    const books = await Book.create({ title, price, author, isbn });

    return res.status(200).json(books);
  } catch (err) {
    next(err)
  }
}

export default { findAll, findOne, create }
