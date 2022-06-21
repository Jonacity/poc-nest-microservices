import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
// import { Logger } from '@nestjs/common';
// const Mslogger = new Logger('Microservice');

async function bootstrap() {
  // Create your regular nest application.
  const app = await NestFactory.create(AppModule);

  // Then combine it with your microservice
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8080,
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
