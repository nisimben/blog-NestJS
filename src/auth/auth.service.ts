import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/models/login.dto';
import { Repository } from 'typeorm';
import { RegisterDto } from 'src/models/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/db/entity/user';
import { JwtService } from '@nestjs/jwt';

@Injectable()

export class AuthService {

    private db = []

    private mockUser = {
        email: 'n@n.com',
        token: 'my-token',
        username: 'nisim',
        descrription: 'i am nism',
        image: null
    }

    constructor(@InjectRepository(User) private userrepo: Repository<User>, private jwtService: JwtService) {
        this.db.push(this.mockUser)
    }

    login(credentials: LoginDto) {
        return this.mockUser
    }

    register(credentials: RegisterDto) {
        if (credentials.email === this.mockUser.email) {
            return this.mockUser
        }

        this.db.push(credentials)
        return credentials
    }
}