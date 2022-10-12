import { UserRepository } from "./user.repository";

export interface UserService {
  create: () => Promise<void>;
  update: () => Promise<void>;
  remove: () => Promise<void>;
  get: () => Promise<void>;
  list: () => Promise<void>;
}
export type UserServiceInitial = {
  userRepo: UserRepository;
};
function newUserService(initial: UserServiceInitial): UserService {
  const create = async () => {};
  const update = async () => {};
  const remove = async () => {};
  const get = async () => {};
  const list = async () => {};
  return { create, update, remove, get, list };
}
export default newUserService;
