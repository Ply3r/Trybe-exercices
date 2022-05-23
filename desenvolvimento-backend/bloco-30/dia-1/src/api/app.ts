import { connect, ConnectOptions } from 'mongoose';
import express from 'express';
import BookController from '../controller/BookController';

const app = express();
const router = express.Router();

const options: ConnectOptions = {
  autoIndex: false,
  dbName: "books"
}

connect('mongodb://localhost:27017/', options);

app.use(express.json());

const controller = new BookController();
router.get('/books', controller.findAll);
router.get('/books/:id', controller.findOne);

app.use(router);

export default app;
