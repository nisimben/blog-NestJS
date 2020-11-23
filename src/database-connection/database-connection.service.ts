import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            name: 'default',
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'qa12345',
            database: 'blogDB',
            synchronize: true,
            logging: true,
            autoLoadEntities: true,
        }
    }
}
    

