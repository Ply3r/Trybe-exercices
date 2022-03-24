import connection from "./connection";
import { ResultSetHeader } from "mysql2";
import User from "../interface/user";

const create = async (user: User) => {
  const { username, email, password } = user;
  
  const query = 'INSERT INTO `exercicio`.`Users`(username, email, password) VALUES (?, ?, ?)'
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [username, email, password])

  return { id: insertId, ...user };
}

const findAll = async () => {
  const query = 'SELECT * FROM `exercicio`.`Users`';
  const [result] = await connection.execute(query) 

  return result;
}

const findOne = async (id: number) => {
  const query = 'SELECT * FROM `exercicio`.`Users` WHERE `Users`.id = ?';
  const result = await connection.execute(query, [id]) 

  return result;
}

export default { create, findAll, findOne }
