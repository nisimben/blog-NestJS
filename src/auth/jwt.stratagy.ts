import { Injectable } from "@nestjs/common";
import { PassportStrategy } from 'passport-jwt'
import { Strategy,ExtractJwt } from 'passport-jwt'
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/db/entity/user";

@Injectable()
export class JwtStratagy extends PassportStrategy(Strategy){
constructor(@InjectRepository(User)private userRipo : Repository<User>){
    super({
        jwtFromRequest:ExtractJwt.fromAuthHeaterWithSchema('my-token'),
        secretOrKey:'my-secret'
    })

}
}
