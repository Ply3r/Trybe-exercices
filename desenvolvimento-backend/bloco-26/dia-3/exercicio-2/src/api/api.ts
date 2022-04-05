import express from 'express';
import BookController from '../controller/BookController';
import error from '../middleware/error';

import validate from '../middleware/validate';
import bookSchema from '../schema/bookSchema';

const app = express();
app.use(express.json());

const router = express.Router();

router
  .route('/book')
  .get(BookController.findAll)
  .post(
    validate(bookSchema),
    BookController.create
  )

router
  .route('/book/:id')
  .get(BookController.findOne)

app.use(router);
app.use(error);

export default app;
