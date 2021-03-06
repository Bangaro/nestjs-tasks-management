import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  const port = 4000;
  await app.listen(port);

  logger.log(`Application is running on: ${port}`);
}
bootstrap();
