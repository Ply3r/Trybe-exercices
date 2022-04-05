import { Book, BookModel } from "../model/BookModel";
import connection from "../model/connection";

interface IBookService {
  findAll(): Promise<Book[]>
  findOne(id: number): Promise<Book>
  create(data: Book): Promise<Book>
}

class BookService implements IBookService {
  private _Book: BookModel

  constructor() {
    this._Book = new BookModel(connection)
  }

  findAll = async () => {
    const books = await this._Book.findAll();

    return books as Book[]
  }

  findOne = async (id: number) => {
    const [book] = await this._Book.findOne(id);

    return book;
  }

  create = async (data: Book) => {
    const book = await this._Book.create(data);
    
    return book as Book
  }
}

export default BookService;
