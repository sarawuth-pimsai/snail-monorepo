export interface UserRepository {
  create: () => Promise<void>;
  update: () => Promise<void>;
  remove: () => Promise<void>;
  get: () => Promise<void>;
  list: () => Promise<void>;
}
