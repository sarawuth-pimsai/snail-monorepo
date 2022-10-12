import { UserRepository } from "../../../core/src/user/user.repository";
import newUserRedis from "./cache/user.redis";

function newUserStorage(): UserRepository {
  const userRedis = newUserRedis();
  const create = async () => {};
  const update = async () => {};
  const remove = async () => {};
  const get = async () => {};
  const list = async () => {};
  return { create, update, remove, get, list };
}

export default newUserStorage;
