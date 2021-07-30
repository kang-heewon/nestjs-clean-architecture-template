import { proxy } from '@infrastructure/common/proxy.provider';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { Module } from '@nestjs/common';
import { DatabaseUserRepository } from './data-access/database-user.repository';
import { TestUserCreator } from './use-cases/TestUserCreator';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    DatabaseUserRepository,
    proxy(TestUserCreator, [DatabaseUserRepository]),
  ],
  controllers: [UserController],
})
export class UserModule {}
