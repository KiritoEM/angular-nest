import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from "morgan";
import * as compression from "compression";
import helmet from "helmet";
import { config as DotenvConfig } from "dotenv";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('pokemon-app')
    .setDescription('Pokemon-app server side API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  DotenvConfig();

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.use(morgan("dev"));
  app.use(compression());
  app.use(helmet());

  await app.listen(process.env['PORT'] ?? 3000,
    () => {
      console.log(`Server is listening in http://localhost:${process.env['PORT']}`);
    }
  );
}
bootstrap();
