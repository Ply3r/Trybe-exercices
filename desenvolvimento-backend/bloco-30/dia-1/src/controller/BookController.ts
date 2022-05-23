import BookService from '../service/BookService';
import { RequestHandler } from 'express';

class BookController {
  private service: BookService;

  constructor() {
    this.service = new BookService();
  }

  public findAll:RequestHandler = (_req, res, next) => {
    try {
      const result = this.service.findAll();

      return res.status(200).json(result);
    } catch(err) {
      next(err);
    }
  }

  public findOne:RequestHandler = (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, author } = req.query;

      let findOneOptions: any = { id };
      if (title) findOneOptions = { ...findOneOptions, title };
      if (author) findOneOptions = { ...findOneOptions, author };

      const result = this.service.findOne(findOneOptions);

      return res.status(200).json(result);
    } catch(err) {
      next(err);
    }
  }
}

export default BookController;
