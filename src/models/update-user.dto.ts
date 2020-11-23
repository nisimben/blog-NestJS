import { IsOptional, IsEmail } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsEmail()
    email:string

    @IsOptional()
    Image:string
    
    @IsOptional()
    bio:string
}
