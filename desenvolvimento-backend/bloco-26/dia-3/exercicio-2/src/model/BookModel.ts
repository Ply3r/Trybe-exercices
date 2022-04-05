import { Pool, ResultSetHeader } from 'mysql2/promise';

export type Book = {
  id?: number,
  title: string,
  price: number,
  author: string,
  isbn: string
}

export interface IBookModel {
  findAll(): Promise<Book[]>
  findAll(id: number): Promise<Book[]>
  create(data: Book): Promise<Book>
}

export class BookModel implements IBookModel {
  private _connection: Pool;

  constructor(connection: Pool) {
    this._connection = connection;
  }

  findAll = async () => {
    const query = 'SELECT * FROM `Book_database`.`Books`';
    const [result] = await this._connection.execute(query);

    return result as Book[]
  }

  findOne = async (id: number) => {
    const query = 'SELECT * FROM `Book_database`.`Books` WHERE id = ?';
    const [result] = await this._connection.execute(query, [id]);

    return result as Book[]
  }

  create = async (data: Book) => {
    const { title, price, author, isbn } = data;

    const query = 'INSERT INTO `Book_database`.`Books`(title, price, author, isbn) VALUES (?, ?, ?, ?)';
    const [{ insertId }] = await this._connection.execute<ResultSetHeader>(query, [title, price, author, isbn]);

    return { id: insertId, title, price, author, isbn }
  }
}