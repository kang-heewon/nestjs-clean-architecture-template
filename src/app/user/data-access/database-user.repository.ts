import { DatabaseService } from '@infrastructure/database/database.service';
import { Injectable } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(private databaseService: DatabaseService) {}

  create(data: { email: string; name: string }): Promise<User | null> {
    return this.databaseService.user.create({
      data: {
        email: data.email,
      },
    });
  }
}
