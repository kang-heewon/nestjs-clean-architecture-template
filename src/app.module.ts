import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { UserModule } from './app/user/user.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
