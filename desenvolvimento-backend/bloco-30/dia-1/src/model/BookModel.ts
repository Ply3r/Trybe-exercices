import { model, Schema } from 'mongoose';
import Book from '../interfaces/Book';

const bookSchema = new Schema<Book>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const bookModel = model<Book>('books', bookSchema);

export default bookModel;