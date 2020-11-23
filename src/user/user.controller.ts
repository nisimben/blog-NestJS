import { Controller, Get, Body, Put, ValidationPipe } from '@nestjs/common';
import { User } from 'src/db/entity/user';
import { UserService } from './user.service';
import { UpdateUserDto } from 'src/models/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private userSrevice : UserService){}
    
    @Get()
    findCurrentUsername(@Body('username',ValidationPipe)username:string){
        if (username.includes("@")) {
            return this.userSrevice.findByEmail(username)
        }
        else

            return this.userSrevice.findByUsername(username)
    }

    @Put()
    update(@Body('username') username:string , @Body(ValidationPipe) data: UpdateUserDto){
        return this.userSrevice.updateUser(username, data)
    }

}

