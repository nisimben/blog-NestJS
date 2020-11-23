import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/db/entity/user';
import { AuthModule } from 'src/auth/auth.module';
import { UserService } from './user.service';

@Module({
  imports:[TypeOrmModule.forFeature([User]),AuthModule],
  providers:[UserService],
  controllers: [UserController]
})
export class UserModule {}
