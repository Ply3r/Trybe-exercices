import userModel from "../model/user";
import User from "../interface/user";

const create = async (user: User) => {
  const result = await userModel.create(user);

  return result
}

const findAll = async () => {
  const result = await userModel.findAll();

  return result
}

const findOne = async (id: number) => {
  const result = await userModel.findOne(id);

  return result
}

export default { create, findAll, findOne };
