import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ItemEntity } from './item.entity';
// import { ItemRepository } from './item.repository';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: 'localhost',
  //     port: 5432,
  //     username: 'aline',
  //     password: 'aline',
  //     database: 'pstest',
  //     synchronize: true,
  //     autoLoadEntities: true,
  //   }),
  //   TypeOrmModule.forFeature([ItemRepository, ItemEntity]),
  //   ClientsModule.register([
  //     { name: 'PROFILE_SERVICE', transport: Transport.TCP },
  //   ]),
  // ],
  imports: [
    ClientsModule.register([
      {
        name: 'PROFILE_SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
