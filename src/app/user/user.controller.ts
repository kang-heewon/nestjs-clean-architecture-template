import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateRequest } from './dtos/UserCreateRequest';
import { TestUserCreator } from './use-cases/TestUserCreator';

@Controller('user')
export class UserController {
  constructor(private testUserCreator: TestUserCreator) {}

  @Post()
  create(@Body() userCreateRequest: UserCreateRequest) {
    return this.testUserCreator.call(userCreateRequest);
  }
}
