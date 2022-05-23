import Book from "../interfaces/Book";
import bookModel from "../model/BookModel";

class BookService {
  public async findAll(): Promise<Book[]> {
    const result = await bookModel.find();

    return result;
  }

  public async findOne(params: { title?: string, author?: string }): Promise<Book | null> {
    const result = await bookModel.findOne(params);

    return result;
  }

  public async create(bookData: Book): Promise<Book> {
    const result = await bookModel.create(bookData);

    return result;
  }

  public async update(id: string | number, bookData: Book): Promise<Book> {
    await bookModel.updateOne({ id }, bookData);

    return bookData;
  }

  public async delete(id: string | number, bookData: Book): Promise<boolean> {
    await bookModel.deleteOne({ id });

    return true;
  }
}

export default BookService;