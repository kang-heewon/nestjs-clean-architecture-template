import { Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/user.repository';
import { UserCreateCommand } from '../dtos/UserCreateCommand';

@Injectable()
export class TestUserCreator {
  constructor(private userRepsitory: UserRepository) {}

  public call(data: UserCreateCommand) {
    return this.userRepsitory.create(data);
  }
}
