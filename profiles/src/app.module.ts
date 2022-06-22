import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Profile from './profile.entity';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PROFILE_SERVICE',
        transport: Transport.TCP,
      },
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'aline',
      database: 'pstest',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Profile]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
