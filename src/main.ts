import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

dotenv.config();

const startServer = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    app.enableCors({
      origin: '*',
      methods: '*',
      allowedHeaders: '*',
      credentials: true,
    });
    await app.listen(process.env.PORT);
    console.log(`Server is running on: ${await app.getUrl()}`);
  } catch (error) {
    console.error(`Unable to start the server due to: ${error.message}`);
  }
};

startServer();
