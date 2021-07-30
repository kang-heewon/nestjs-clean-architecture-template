import { User } from './user.entity';

export interface UserRepository {
  create(data: { email: string; name: string }): Promise<User | null>;
}
